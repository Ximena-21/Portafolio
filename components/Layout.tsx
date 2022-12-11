import React, { useEffect, useState } from 'react';
// import { Header, Social, Email, Footer } from '@components';
import { LayoutContainer } from '../styles';
import Header from './Header';

const Layout = ({ children, location }: any) => {
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }

  }, [isLoading]);

  return (
    <LayoutContainer>

      <div className="layout">
        <Header />
        {/* <Social />
        <Email /> */}

        <main id='content' className='fillHeight'>
          {children}
          {/* <Footer /> */}
        </main>
      </div>

    </LayoutContainer>

  )

}

export default Layout