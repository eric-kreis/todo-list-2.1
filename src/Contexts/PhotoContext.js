import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { database, storage } from '../firebase';
import { useAuth } from './AuthContext';

import defaultImage from '../assets/default-profile.png';

const PhotoContext = createContext();

export const usePhoto = () => useContext(PhotoContext);

export default function PhotoProvider({ children }) {
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
          setError('');
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
          setError('* Ocorreu um problema ao enviar este arquivo, tente novamente mais tarde');
          switch (imageError.code) {
            case 'storage/object-not-found':
              setError('* Foto não encontrada');
              break;
            case 'storage/unauthorized':
              setError('* Você não têm permissão para acessar este arquivo');
              break;
            case 'storage/canceled':
              setError('* Download da imagem cancelado');
              break;
            default:
              setError('* Ocorreu um problema ao enviar este arquivo, tente novamente mais tarde');
              break;
          }
          setPath('/');
          setImage(defaultImage);
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
      if (path !== '/' && currentUser) {
        try {
          setLoading(true);
          setError('');

          await database.users.doc(currentUser.uid).update({
            imagePath: path,
          });
        } catch (imageError) {
          setError('Falha ao salvar sua imagem');
          setPath('/');
          setImage(defaultImage);
        }
        setLoading(false);
      }
    })();
  }, [currentUser, path]);

  const handleDelete = async () => {
    try {
      setLoading(true);
      setError('');

      await database.users.doc(currentUser.uid).update({
        imagePath: '/',
      });

      setPath('/');
      setImage(defaultImage);
    } catch (imageError) {
      setError('* Falha ao excluir sua imagem');
    }
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
