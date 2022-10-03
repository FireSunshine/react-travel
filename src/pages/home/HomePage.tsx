import React from "react";
import { Row, Col, Typography } from "antd";
import {
  Header,
  Footer,
  SideMenu,
  Carousel,
  ProductCollection,
  BusinessPartners,
} from "../../components";
import { productList1, productList2, productList3 } from "./mockups";
import sideImage from "../../assets/images/sider_2019_12-09.png";
import sideImage2 from "../../assets/images/sider_2019_02-04.png";
import sideImage3 from "../../assets/images/sider_2019_02-04-2.png";
import styles from "./HomePage.module.css";
import { withTranslation, WithTranslation } from "react-i18next";
import styled from "@emotion/styled";

const HomePageComponent: React.FC<WithTranslation> = (props) => {
  // 高阶组件
  const { t } = props;
  return (
    <div>
      <Header />
      <div className={styles["page-content"]}>
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
              {t("home_page.hot_recommended")}
            </Title>
          }
          sideImage={sideImage}
          products={productList1}
        />
        <ProductCollection
          title={
            <Title level={3} type="danger">
              {t("home_page.new_arrival")}
            </Title>
          }
          sideImage={sideImage2}
          products={productList2}
        />
        <ProductCollection
          title={
            <Title level={3} type="danger">
              {t("home_page.domestic_travel")}
            </Title>
          }
          sideImage={sideImage3}
          products={productList3}
        />
        <BusinessPartners />
      </div>
      <Footer />
    </div>
  );
};

export const HomePage = withTranslation()(HomePageComponent);

export const Title = styled(Typography.Title)`
  font-family: "IBMPlexSerif-BoldItalic";
`;
