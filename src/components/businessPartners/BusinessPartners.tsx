import React from "react";
import { Content } from "./BusinessPartners.style";
import image1 from "../../assets/images/microsoft-80658_640.png";
import image2 from "../../assets/images/icon-720944_640.png";
import image3 from "../../assets/images/follow-826033_640.png";
import image4 from "../../assets/images/facebook-807588_640.png";
import { Col, Divider, Row } from "antd";
import { Title } from "../../pages/home";
import { useTranslation } from "react-i18next";

const companies = [
  { src: image1, title: "Microsoft" },
  { src: image2, title: "Youtube" },
  { src: image3, title: "Ins" },
  { src: image4, title: "Facebook" },
];

export const BusinessPartners = () => {
  const { t } = useTranslation();

  return (
    <Content>
      <Divider orientation="left">
        <Title level={3}>{t("home_page.joint_venture")}</Title>
      </Divider>
      <Row>
        {companies.map((item, index) => (
          <Col span={6} key={"bussiness-partner" + index}>
            <img
              src={item.src}
              alt="bussiness-partner"
              className="bussiness-partner"
            />
          </Col>
        ))}
      </Row>
    </Content>
  );
};
