import React from 'react';
import { Link } from 'react-router-dom';
import { List, Rate, Space, Image, Tag, Typography } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const { Text } = Typography;

interface Product {
  departureCity: string;
  description: string;
  discountPresent: number;
  id: string;
  originalPrice: number;
  price: number;
  rating: number;
  name: string;
  touristRoutePictures: any[];
  travelDays: string;
  tripType: string;
  images: string;
}
interface PropsType {
  productData: Product[];
  pagination: any;
  onPageChange?: (nextPage, pageSize) => void;
}

const listData = (productList: Product[]) =>
  productList?.map((p) => ({
    id: p.id,
    title: p.name,
    description: p.description,
    tags: (
      <>
        {<Tag color="#f50">深圳出发</Tag>}
        {<Tag color="#108ee9">高端定制</Tag>}
        {<Tag color="#87d068">超低折扣</Tag>}
        {<Tag color="#2db7f5">perfect</Tag>}
      </>
    ),
    imgSrc: p.images,
    price: p.price
  }));

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export const ProductList: React.FC<PropsType> = ({ productData, pagination, onPageChange }) => {
  const products = listData(productData);
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        current: pagination?.pageNum ?? 1,
        onChange: (page) => onPageChange && onPageChange(page, pagination?.pageSize),
        pageSize: pagination?.pageSize ?? 3,
        total: pagination?.total
      }}
      dataSource={products}
      footer={
        <div>
          搜索总路线: <Text strong>{pagination?.total}</Text> 条
        </div>
      }
      renderItem={(item) => (
        <List.Item
          key={item.id}
          actions={[
            <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
            <>
              <Rate defaultValue={3} />
              <Text strong className="ant-rate-text">
                {3}
              </Text>
            </>
          ]}
          extra={<Image width={272} height={172} alt="image" src={item.imgSrc} />}
        >
          <List.Item.Meta
            title={
              <>
                <Text type="danger" style={{ fontSize: 20, fontWeight: 400 }}>
                  ¥ {item.price}
                </Text>
                <Link to={'/detail/' + item.id}> {item.title}</Link>
              </>
            }
            description={item.tags}
          />
          {item.description}
        </List.Item>
      )}
    />
  );
};
