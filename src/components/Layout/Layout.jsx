import { Suspense } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <>
      <Header />
      {/* <Suspense
        fallback={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
            }}>
            <Spinner />
          </div>
        }> */}
        <Outlet />
      {/* </Suspense> */}
    </>
  );
};

export default Layout;
