import React from 'react';
import { useParams } from 'react-router-dom';

const NewsDetail = () => {
  const { url } = useParams();
  window.open(url, '_blank');
  return (
    <div>
      Redirecting...
    </div>
  );
};

export default NewsDetail;