import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import { database } from '../firebase';
import { useAuth } from './AuthContext';

const ListContext = createContext();

export const useList = () => useContext(ListContext);

export default function ListProvider({ children }) {
  const { currentUser } = useAuth();

  const [display, setDisplay] = useState('all');
  const [tasks, setTasks] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (currentUser) {
        try {
          setLoading(true);
          const doc = await database.userData.doc(currentUser.uid).get();
          setLoading(false);
          if (doc.exists) {
            const userData = doc.data();
            setTasks(userData.tasks || []);
            setCheckedItems(userData.checkedItems || []);
          } else {
            setTasks([]);
            setCheckedItems([]);
          }
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log(error);
        }
      } else {
        setTasks([]);
        setCheckedItems([]);
      }
    })();
  }, [currentUser]);

  // State observer;
  useEffect(() => {
    if (currentUser && tasks.length > 0) {
      database.userData.doc(currentUser.uid).set({
        tasks,
        checkedItems,
        lastModification: database.getCurrentTimestamp(),
      });
    }
  }, [checkedItems, currentUser, tasks]);

  const changeDisplay = ({ target: { value } }) => {
    setDisplay(value);
  };

  const addAndSaveToDo = (text) => {
    setTasks((prevTasks) => [...prevTasks, { id: v4(), text }]);
  };

  const removeAndSaveToDo = (id) => {
    setTasks((prevTasks) => prevTasks.filter(({ id: taskId }) => taskId !== id));
  };

  const toggleAndSavingChecked = ({ target: { value, checked } }) => {
    if (checked) {
      setCheckedItems((prevChecks) => [...prevChecks, value]);
    } else {
      setCheckedItems(checkedItems.filter((id) => id !== value));
    }
  };

  const editingTasks = (taskText, taskId) => {
    if (taskText.trim()) {
      setTasks((prevTasks) => prevTasks.map(({ id, text }) => {
        if (id === taskId) return { id, text: taskText };
        return { id, text };
      }));
    }
  };

  const clearToDo = () => {
    setTasks((prevTasks) => prevTasks.filter(({ id }) => checkedItems.includes(id)));
  };

  const clearDone = () => {
    setTasks((prevTasks) => prevTasks.filter(({ id }) => !checkedItems.includes(id)));
    setCheckedItems([]);
  };

  const clearAll = () => {
    setCheckedItems([]);
    setTasks([]);
  };

  const contextValue = {
    display,
    tasks,
    checkedItems,
    loading,
    changeDisplay,
    addAndSaveToDo,
    removeAndSaveToDo,
    toggleAndSavingChecked,
    editingTasks,
    clearToDo,
    clearDone,
    clearAll,
  };

  return (
    <ListContext.Provider value={contextValue}>
      { children }
    </ListContext.Provider>
  );
}

ListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
