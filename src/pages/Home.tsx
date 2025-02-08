import { Button, Typography } from "antd";
import React, { FC } from "react";
import styles from "./Home.module.scss";
import { MAIN_PATHNAME } from "../router";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph } = Typography;
const Home: FC = () => {
  const nav = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title>基于Python的员工应聘岗位分析与推荐系统</Title>
        <Title level={2}>数据全面 |趋势分析 | 精准推荐</Title>
        <Paragraph>
          已累计收集求职信息 10w+
          份，算法精准度超过90%，已助力1k求职者获得满意offer
        </Paragraph>
        <br />
        <div>
          <Button type="primary" onClick={() => nav(MAIN_PATHNAME)}>
            开始使用
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
