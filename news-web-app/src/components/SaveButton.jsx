import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSavedNews, removeSavedNews } from '../store/savedSlice';

const SaveButton = ({ news }) => {
  const dispatch = useDispatch();
  const savedNews = useSelector((state) => state.saved.savedNews);
  const isSaved = savedNews.some((saved) => saved._id === news._id);

  const handleSave = () => {
    if (isSaved) {
      dispatch(removeSavedNews(news._id));
    } else {
      dispatch(addSavedNews(news));
    }
  };

  return (
    <button
        onClick={handleSave}
        className={`rounded px-4 py-2 transition-all duration-300 text-white font-medium ${isSaved ? 'bg-red-500 hover:bg-red-700 shadow-md hover:shadow-lg' : 'bg-green-500 hover:bg-green-700 shadow-md hover:shadow-lg'}`}
    >
    {isSaved ? 'Un-Save' : 'Save'}
    </button>
  );
};

export default SaveButton;