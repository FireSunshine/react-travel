import { Col, Row, Spin, DatePicker, Button, Space, Anchor, Menu, Divider, Typography } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header, Footer, ProductIntro, ProductComments } from '../../components';
import { PageContent } from './detail.style';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { commentMockData } from './mockup';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

export const Detail: React.FC = () => {
  let { id } = useParams();
  const { RangePicker } = DatePicker;
  const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.post('http://127.0.0.1:7001/api/product/detail', { id });
        setProduct(data?.data ?? null);
        setLoading(false);
      } catch (error: any) {
        setError(error.response.data.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);
  if (error) {
    return <div>网站出错：{error}</div>;
  }
  return (
    <Spin spinning={loading}>
      <Header />
      <PageContent>
        {/* 产品简介 与 日期选择 */}
        <div className="product-intro-container">
          <Row>
            <Col span={13}>
              <ProductIntro
                name={product?.name}
                description={product?.description}
                price={product?.price}
                images={product?.images}
              />
            </Col>
            <Col span={11}>
              <Space direction="vertical">
                <Button
                  loading={false}
                  type="primary"
                  shape="round"
                  icon={<ShoppingCartOutlined />}
                  size="large"
                  style={{ margin: '32px 0', background: '#f15a22', border: 'none' }}
                >
                  加入购物车
                </Button>
                <RangePicker />
              </Space>
            </Col>
          </Row>
        </div>
        {/* 锚点菜单 */}
        <Anchor className="product-detail-anchor">
          <Space>
            <Anchor.Link href="#feature" title="产品特色" />
            <Anchor.Link href="#fees" title="费用" />
            <Anchor.Link href="#notes" title="预定须知" />
            <Anchor.Link href="#comments" title="用户评价" />
          </Space>
        </Anchor>
        {/* 产品特色 */}
        <div id="feature" className="product-detail-container">
          <Divider orientation="center">
            <Typography.Title level={3}>产品特色</Typography.Title>
          </Divider>
          <div dangerouslySetInnerHTML={{ __html: product?.feature }} style={{ margin: 50 }} />
        </div>
        {/* 费用 */}
        <div id="fees" className="product-detail-container">
          <Divider orientation="center">
            <Typography.Title level={3}>费用</Typography.Title>
          </Divider>
          <div dangerouslySetInnerHTML={{ __html: product?.fees }} style={{ margin: 50 }} />
        </div>
        {/* 预订须知 */}
        <div id="notes" className="product-detail-container">
          <Divider orientation="center">
            <Typography.Title level={3}>预定须知</Typography.Title>
          </Divider>
          <div dangerouslySetInnerHTML={{ __html: product?.notes }} style={{ margin: 50 }} />
        </div>
        {/* 商品评价*/}
        <div id="comments" className="product-detail-container">
          <Divider orientation="center">
            <Typography.Title level={3}>用户评价</Typography.Title>
          </Divider>
          <div style={{ margin: 40 }}>
            <ProductComments data={commentMockData} />
          </div>
        </div>
      </PageContent>
      <Footer />
    </Spin>
  );
};
