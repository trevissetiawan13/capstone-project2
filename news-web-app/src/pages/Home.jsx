import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../store/apiSlice';
import NewsCard from '../components/NewsCard';
import Loading from '../components/Loading';

const Home = () => {
  const dispatch = useDispatch();
  const { news, loading, error } = useSelector((state) => state.api);

  useEffect(() => {
    dispatch(fetchNews({ country: 'indonesia' }));
  }, [dispatch]);

  if (loading) return <Loading/>;
  if (error) return <div className="text-red-500">Error: {error}</div>;
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Latest News in Indonesia</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {news.map((newsItem) => (
            <NewsCard key={newsItem._id} news={newsItem} />
            ))}
        </div>
    </div>
  );
};

export default Home;