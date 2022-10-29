import React, { useEffect, useState } from 'react';
import { Row, Col, Typography, Spin } from 'antd';
import { Header, Footer, SideMenu, Carousel, ProductCollection, BusinessPartners } from '../../components';
import sideImage from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';
import styles from './HomePage.module.css';
import { withTranslation, WithTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import axios from 'axios';
import { connect } from 'react-redux';
import { RootStore } from '../../redux/store';
import {
  fetchRecommendProductFailActionCreator,
  fetchRecommendProductStartActionCreator,
  fetchRecommendProductSuccessActionCreator
} from '../../redux/recommendProducts/recommendProductsActions';

const mapStateToProps = (state: RootStore) => {
  return {
    loading: state.recommendProducts.loading,
    error: state.recommendProducts.error,
    productList: state.recommendProducts.productList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStart: () => {
      dispatch(fetchRecommendProductStartActionCreator());
    },
    fetchSuccess: (data) => {
      dispatch(fetchRecommendProductSuccessActionCreator(data));
    },
    fetchFail: (error) => {
      dispatch(fetchRecommendProductFailActionCreator(error));
    }
  };
};

type PropsType = WithTranslation & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const HomePageComponent: React.FC<PropsType> = (props) => {
  // 高阶组件
  const { t, loading, productList, error, fetchStart, fetchSuccess, fetchFail } = props;

  const getProductList = async () => {
    fetchStart();
    try {
      const { data } = await axios.post('http://127.0.0.1:7001/api/product/lists');
      fetchSuccess(data.data);
    } catch ({ message }) {
      fetchFail(message);
    }
  };

  useEffect(() => {
    getProductList();
  }, []);

  if (error) {
    return <div>网站出错：{error}</div>;
  }
  return (
    <Spin spinning={loading}>
      <Header />
      <div className={styles['page-content']}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <Carousel />
          </Col>
        </Row>
        <ProductCollection
          title={
            <Title level={3} type="danger">
              {t('home_page.hot_recommended')}
            </Title>
          }
          sideImage={sideImage}
          products={productList.filter((item) => item.categoryId === '1')}
        />
        <ProductCollection
          title={
            <Title level={3} type="danger">
              {t('home_page.new_arrival')}
            </Title>
          }
          sideImage={sideImage2}
          products={productList.filter((item) => item.categoryId === '2')}
        />
        <ProductCollection
          title={
            <Title level={3} type="danger">
              {t('home_page.domestic_travel')}
            </Title>
          }
          sideImage={sideImage3}
          products={productList.filter((item) => item.categoryId === '3')}
        />
        <BusinessPartners />
      </div>
      <Footer />
    </Spin>
  );
};

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(withTranslation()(HomePageComponent));

export const Title = styled(Typography.Title)`
  font-family: 'IBMPlexSerif-BoldItalic';
`;
