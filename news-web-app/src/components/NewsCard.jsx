import React from 'react';
import SaveButton from './SaveButton';

const NewsCard = ({ news }) => {
  return (
    <div className="bg-white rounded shadow-md hover:shadow-lg p-4 mb-4 border">
      <h2 className="text-xl font-bold mb-2">{news.headline.main}</h2>
      <p className="text-gray-700 mb-2">{news.snippet}</p>
      <div className="flex justify-between items-center mt-4">
        <a href={news.web_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Read More
        </a>
        <SaveButton news={news} />
      </div>
    </div>
  );
};

export default NewsCard;