import React from "react";
import { Layout, Typography } from "antd";
import { FooterBox } from "./Footer.style";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <FooterBox>
      <Layout.Footer>
        <Typography.Title level={2} className={"app-footer"}>
          {t("footer.detail")}
        </Typography.Title>
      </Layout.Footer>
    </FooterBox>
  );
};
