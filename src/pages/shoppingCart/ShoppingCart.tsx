import React, { useEffect, useState } from 'react';
import { ProductList, PaymentCard } from '../../components';
import { MainLayout } from '../../layouts/mainLayout';
import { Row, Col, Affix } from 'antd';
import { PageContent } from './shoppingCart.style';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../redux/hooks';
import { clearShoppingCart } from '../../redux/shoppingCart/shoppingCartSlice';
import axios from 'axios';

export const ShoppingCart = () => {
  const [cartlist, setCartList] = useState([]); // 分页查询购物车列表
  const [pagination, setPagination] = useState({
    pageNum: 1,
    pageSize: 3,
    total: 0
  });

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.shoppingCartSlice.loading);
  const shoppingCarts = useSelector((state) => state.shoppingCartSlice.carts);
  const token = useSelector((state) => state.userSlice.token);

  const getCartList = async () => {
    const res = await axios.post(
      'http://127.0.0.1:7001/api/shoppingCart/lists',
      {
        pageNum: pagination.pageNum,
        pageSize: pagination.pageSize
      },
      {
        headers: {
          token
        }
      }
    );
    setCartList(res?.data?.data?.data ?? []);
    setPagination({ ...pagination, total: res?.data?.data?.pagination.total ?? 0 });
  };

  const onPageChange = (pageNum, pageSize) => {
    setPagination({ ...pagination, pageNum, pageSize });
  };

  useEffect(() => {
    getCartList();
  }, [pagination.pageNum]);
  return (
    <MainLayout>
      <PageContent>
        <Row>
          <Col span={16}>
            <div className="product-list-container">
              <ProductList productData={cartlist} pagination={pagination} onPageChange={onPageChange} />
            </div>
          </Col>
          <Col span={8}>
            <Affix>
              <div className="payment-card-container">
                <PaymentCard
                  originalPrice={shoppingCarts?.map((item) => item.price * 1).reduce((a, b) => a + b, 0)}
                  price={shoppingCarts?.map((item) => item.price * 1).reduce((a, b) => a + b, 0)}
                  loading={loading}
                  onCheckout={() => {}}
                  onShoppingCartClear={() => {
                    dispatch(clearShoppingCart({ token, cartIds: shoppingCarts?.map((item) => item.id) }));
                    setCartList([]);
                    setPagination({
                      pageNum: 1,
                      pageSize: 3,
                      total: 0
                    });
                  }}
                />
              </div>
            </Affix>
          </Col>
        </Row>
      </PageContent>
    </MainLayout>
  );
};
