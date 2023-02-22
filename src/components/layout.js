import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ children, showBookCallout, showContactCallout }) => {
  return (
    <>
      <Header />
      <main className="main">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;