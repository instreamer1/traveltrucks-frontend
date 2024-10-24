import './App.css';

import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import { fetchCampers } from './redux/campers/operation';
import { Toaster } from 'react-hot-toast';
import { selectFilters } from './redux/filters/selectors.js';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage.jsx'));
const CamperDetailsPage = lazy(() =>
  import('./pages/CamperDetailsPage/CamperDetailsPage.jsx')
);
const Features = lazy(() => import('./components/Features/Features.jsx'));
const Reviews = lazy(() => import('./components/Reviews/Reviews.jsx'));
const Layout = lazy(() => import('./components/Layout/Layout.jsx'));

const App = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters)
  useEffect(() => {
    dispatch(fetchCampers(filters));
  }, []);



  return (
    <>
      <Toaster />

      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='catalog' element={<CatalogPage />} />
            <Route path='catalog/:id' element={<CamperDetailsPage />}>
              <Route index element={<Navigate to='features' replace />} />
              <Route path='features' element={<Features />} />
              <Route path='reviews' element={<Reviews />} />
            </Route>
            <Route path='*' element={<Navigate to='/' />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
