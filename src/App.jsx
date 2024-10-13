import './App.css';

import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import CamperDetails from './pages/CamperDetails/CamperDetails';
import Features from './components/Features/Features';
import Reviews from './components/Reviews/Reviews';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from './redux/campers/selectors';
import { useEffect } from 'react';
import { fetchCampers } from './redux/campers/operation';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);


  useEffect(() => {
    dispatch(fetchCampers()); 
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/catalog' element={<CatalogPage />} />
          <Route path='/catalog/:id' element={<CamperDetails />}>
            <Route index element={<Features />} />
            <Route path='feature' element={<Features />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
