// import { Suspense } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectIsLoading } from '../../redux/campers/selectors';

const Layout = () => {
  // const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <Header />
      {/* <Suspense fallback={<p>Loading...</p>}>
        {isLoading ? <p>Loading...</p> :  */}
      <Outlet />
      {/* } */}
      {/* </Suspense> */}
    </>
  );
};

export default Layout;
