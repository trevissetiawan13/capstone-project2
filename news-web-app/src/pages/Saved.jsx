import React from 'react';
import { useSelector } from 'react-redux';
import NewsCard from '../components/NewsCard';

const Saved = () => {
  const savedNews = useSelector((state) => state.saved.savedNews);

  return (
    <div className="p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Saved News</h2>
        {savedNews.length === 0 ? (
          <p className="text-gray-500 text-center">No saved news yet.</p>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {savedNews.map((newsItem) => (
            <NewsCard key={newsItem._id} news={newsItem} />
            ))}
          </div>
        )}
    </div>
  );
};

export default Saved;