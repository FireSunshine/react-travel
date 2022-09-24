import React from "react";
import { Layout, Typography } from "antd";
import { FooterBox } from "./Footer.style";

export const Footer = () => {
  return (
    <FooterBox>
      <Layout.Footer>
        <Typography.Title level={2} className={"app-footer"}>
          Copyright @ React Travel
        </Typography.Title>
      </Layout.Footer>
    </FooterBox>
  );
};
