import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo.svg";
import { UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, Layout, Menu, Typography } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={styles["app-header"]}>
      <Layout.Header className={styles["main-header"]}>
        <span onClick={() => navigate("/")} className={styles["go-home"]}>
          <img src={logo} alt="" className={styles["App-logo"]} />
          <Typography.Title level={2} className={styles.title}>
            React Travel
          </Typography.Title>
        </span>
        <Input.Search
          placeholder="想去哪"
          enterButton
          className={styles["search-input"]}
        />
        <Button.Group className={styles["button-group"]}>
          <Button
            icon={<UserOutlined />}
            style={{ borderRadius: "25px" }}
            onClick={() => navigate("signin")}
          >
            请登录
          </Button>
          <Button
            style={{ margin: "0 15px" }}
            type="text"
            onClick={() => navigate("register")}
          >
            注册
          </Button>
          <Dropdown.Button
            overlay={
              <Menu>
                <Menu.Item key={"zh"}>中文</Menu.Item>
                <Menu.Item key={"en"}>English</Menu.Item>
              </Menu>
            }
            icon={<GlobalOutlined />}
          >
            语言
          </Dropdown.Button>
        </Button.Group>
      </Layout.Header>
      {/* <Menu mode="horizontal" className={styles["main-menu"]}>
        <Menu.Item key={1}>旅游首页</Menu.Item>
        <Menu.Item key={2}>周末游</Menu.Item>
        <Menu.Item key={3}>跟团游</Menu.Item>
        <Menu.Item key="4"> 自由行 </Menu.Item>
        <Menu.Item key="5"> 私家团 </Menu.Item>
        <Menu.Item key="6"> 邮轮 </Menu.Item>
        <Menu.Item key="7"> 酒店+景点 </Menu.Item>
        <Menu.Item key="8"> 当地玩乐 </Menu.Item>
        <Menu.Item key="9"> 主题游 </Menu.Item>
        <Menu.Item key="10"> 定制游 </Menu.Item>
        <Menu.Item key="11"> 游学 </Menu.Item>
        <Menu.Item key="12"> 签证 </Menu.Item>
        <Menu.Item key="13"> 企业游 </Menu.Item>
        <Menu.Item key="14"> 高端游 </Menu.Item>
        <Menu.Item key="15"> 爱玩户外 </Menu.Item>
        <Menu.Item key="16"> 保险 </Menu.Item>
      </Menu> */}
    </div>
  );
};
