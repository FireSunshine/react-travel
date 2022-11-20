import { Rate, Table, Typography, Image } from 'antd';
import React from 'react';
import { Container } from './productIntro.style';
import { ColumnsType } from 'antd/es/table';

interface PropsType {
  name: string;
  description: string;
  price: string;
  images: string;
}

export const ProductIntro: React.FC<PropsType> = ({ name, description, price, images }) => {
  interface RowType {
    title: string;
    description: string | number | JSX.Element;
    key: number;
  }
  const columns: ColumnsType<RowType> = [
    {
      title: 'title',
      dataIndex: 'title',
      key: 'title',
      align: 'left',
      width: 120
    },
    {
      title: 'description',
      dataIndex: 'description',
      key: 'description',
      align: 'center'
    }
  ];

  const tableDataSource: RowType[] = [
    {
      key: 0,
      title: '路线名称',
      description: name
    },
    {
      key: 1,
      title: '图片',
      description: <Image src={images} style={{ width: 66 }} />
    },
    {
      key: 2,
      title: '价格',
      description: (
        <>
          ¥{' '}
          <Typography.Text type="danger" strong>
            {price}
          </Typography.Text>
        </>
      )
    },
    {
      key: 3,
      title: '限时抢购折扣',
      description: '暂无折扣'
    },
    {
      key: 5,
      title: '领取优惠',
      description: '无优惠券可领'
    },
    {
      key: 6,
      title: '线路评价',
      description: (
        <>
          <Rate defaultValue={3} />
          <Typography.Text style={{ marginLeft: 10 }}>{3} 星</Typography.Text>
        </>
      )
    }
  ];
  return (
    <Container>
      <Typography.Title level={4}>{name}</Typography.Title>
      <Typography.Text>{description}</Typography.Text>
      <div className="intro-detail-content">
        <Typography.Text style={{ marginLeft: 20 }}>
          ¥ <span className="intro-detail-strong-text">{price}</span> /人起
        </Typography.Text>
        <Typography.Text style={{ marginLeft: 50 }}>
          <span className="intro-detail-strong-text">5</span> 分
        </Typography.Text>
      </div>
      <Table<RowType>
        columns={columns}
        dataSource={tableDataSource}
        size="small"
        bordered={false}
        pagination={false}
        showHeader={false}
      />
    </Container>
  );
};
