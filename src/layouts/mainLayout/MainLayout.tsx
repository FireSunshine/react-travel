import React from 'react';
import { Footer, Header } from '../../components';
import { PageContent } from './mainLayout.style';

export const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {/* 页面内容 content */}
      <PageContent>{children}</PageContent>
      <Footer />
    </>
  );
};
