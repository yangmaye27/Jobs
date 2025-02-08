import React, { FC } from "react";
import { Layout, Space } from "antd";
import { Outlet } from "react-router-dom";

import styles from "./MainLayout.module.scss";
import Logo from "../components/Logo";
import MenuContent from "../components/MenuContent";

import { useLocation } from "react-router-dom";
import useNavPage from "../hooks/useNavPage";

const { Header, Content, Footer } = Layout;

const MainLayout: FC = () => {
  const location = useLocation();

  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>
          <Space>
            <Logo></Logo>
            {location.pathname !== "/" && <MenuContent />}
          </Space>
        </div>
        <div className={styles.right}></div>
      </Header>
      <Content className={styles.main}>
        <Outlet />
      </Content>
      <Footer className={styles.footer}>
        求职帮 ©2025 Created by 小黄同学
      </Footer>
    </Layout>
  );
};

export default MainLayout;
