import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { ThemeContext } from 'styled-components';

import { database, storage } from '../firebase';
import { useAuth } from './AuthContext';

import defaultImage from '../assets/default-profile.png';

const PhotoContext = createContext();

export const usePhoto = () => useContext(PhotoContext);

export default function PhotoProvider({ children }) {
  const { title } = useContext(ThemeContext);
  const { currentUser } = useAuth();

  const [image, setImage] = useState(defaultImage);

  const [path, setPath] = useState('/');

  const [error, setError] = useState('');

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (currentUser) {
        try {
          setLoading(true);
          const doc = await database.users.doc(currentUser.uid).get();
          if (doc.exists && doc.data().imagePath !== '/') {
            const imageURL = await storage
              .ref(`images/${currentUser.uid}`)
              .child(doc.data().imagePath)
              .getDownloadURL();

            setPath(doc.data().imagePath);
            setLoading(false);
            setImage(imageURL);
          }
        } catch (imageError) {
          switch (imageError.code) {
            case 'storage/object-not-found':
              setError('Foto não encontrada');
              break;
            case 'storage/unauthorized':
              setError('Você não têm permissão para acessar este arquivo');
              break;
            case 'storage/canceled':
              setError('Download da imagem cancelado');
              break;
            default:
              setError('Ocorreu um problema ao carregar a imagem');
              break;
          }
          setPath('/');
          setImage(defaultImage);
          setError('Ocorreu um problema ao carregar a imagem');
        }
        setLoading(false);
      } else {
        setPath('/');
        setImage(defaultImage);
      }
    })();
  }, [currentUser]);

  // State observer;
  useEffect(() => {
    (async () => {
      if (currentUser) {
        try {
          const doc = await database.users.doc(currentUser.uid).get();
          if (doc.exists && doc.data().imagePath !== path) {
            await database.users.doc(currentUser.uid).update({ imagePath: path });
          }
        } catch (imageError) {
          setError('Falha ao salvar o enderço da sua imagem :(');
          setPath('/');
        }
      } else {
        setImage(defaultImage);
      }
    })();
  }, [currentUser, path]);

  const handleDelete = async () => {
    setLoading(true);
    await toast.promise(
      database.users.doc(currentUser.uid).update({ imagePath: '/' }),
      {
        pending: {
          render() { return 'Processando...'; },
          theme: title,
        },
        success: {
          render() { return 'Imagem removida :)'; },
          theme: title,
        },
        error: {
          render() { return 'Falha ao deletar a imagem :('; },
          theme: title,
        },
      },
    );
    setPath('/');
    setImage(defaultImage);
    setLoading(false);
  };

  const contextValue = {
    image,
    loading,
    path,
    error,
    setPath,
    setLoading,
    setError,
    setImage,
    handleDelete,
  };

  return (
    <PhotoContext.Provider value={contextValue}>
      { children }
    </PhotoContext.Provider>
  );
}

PhotoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
