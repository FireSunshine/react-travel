import React from 'react';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import { PageContent } from './userLayout.style';
const { Content } = Layout;

export const UserLayout = ({ children }) => {
  return (
    <PageContent>
      <Layout className="user-layout-container">
        <Content className="content">
          <div className="top">
            <div className="content-header">
              <Link to="/">
                <img alt="logo" className="logo" src={logo} />
                <span className="title">React Travel</span>
              </Link>
            </div>
            <div className="desc">放心的服务 放心的旅行 放心的畅玩</div>
            {children}
          </div>
        </Content>
      </Layout>
    </PageContent>
  );
};
