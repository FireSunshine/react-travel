import React from "react";
import { Content } from "./BusinessPartners.style";
import image1 from "../../assets/images/microsoft-80658_640.png";
import image2 from "../../assets/images/icon-720944_640.png";
import image3 from "../../assets/images/follow-826033_640.png";
import image4 from "../../assets/images/facebook-807588_640.png";
import { Col, Divider, Row, Typography } from "antd";

const companies = [
  { src: image1, title: "Microsoft" },
  { src: image2, title: "Youtube" },
  { src: image3, title: "Ins" },
  { src: image4, title: "Facebook" },
];

export const BusinessPartners = () => {
  return (
    <Content>
      <Divider orientation="left">
        <Typography.Title level={3}>合作企业</Typography.Title>
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
