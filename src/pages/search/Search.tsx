import { Spin } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { Header, Footer, Carousel, ProductList } from '../../components';
import { useSelector } from '../../redux/hooks';
import { searchProduct } from '../../redux/productSearch/productSearchSlice';
import { PageContent } from './search.style';

export const Search: React.FC = () => {
  const { keywords } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.productSearchSlice.loading);
  const error = useSelector((state) => state.productSearchSlice.error);
  const pagination = useSelector((state) => state.productSearchSlice.pagination);
  const productList = useSelector((state) => state.productSearchSlice.data);

  useEffect(() => {
    dispatch(searchProduct({ pageNum: 1, pageSize: 3, keywords }));
  }, [location]);

  const onPageChange = (pageNum, pageSize) => {
    dispatch(searchProduct({ pageNum, pageSize, keywords }));
  };

  if (error) {
    return <div>网站出错：{error}</div>;
  }

  return (
    <Spin spinning={loading}>
      <Header />
      <PageContent>
        <div className="product-list-container">
          <Carousel />
        </div>
        <div className="product-list-container">
          <ProductList productData={productList} pagination={pagination} onPageChange={onPageChange} />
        </div>
      </PageContent>
      <Footer />
    </Spin>
  );
};
