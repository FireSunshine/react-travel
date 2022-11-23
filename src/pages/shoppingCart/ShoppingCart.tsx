import React from 'react';
import { ProductList, PaymentCard } from '../../components';
import { MainLayout } from '../../layouts/mainLayout';
import { Row, Col, Affix } from 'antd';
import { PageContent } from './shoppingCart.style';

export const ShoppingCart = () => {
  return (
    <MainLayout>
      <PageContent>
        <Row>
          <Col span={16}>
            <div className="product-list-container">{/* <ProductList/> */}</div>
          </Col>
          <Col span={8}>
            <Affix>
              <div className="payment-card-container">{/* <PaymentCard /> */}</div>
            </Affix>
          </Col>
        </Row>
      </PageContent>
    </MainLayout>
  );
};
