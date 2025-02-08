import React, { FC, useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import {
  BookOutlined,
  FundViewOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "首页",
    key: "/main",
    icon: <HomeOutlined />,
  },
  {
    label: "职业库",
    key: "/alldata",
    icon: <BookOutlined />,
  },
  {
    label: "趋势分析",
    key: "SubMenu",
    icon: <FundViewOutlined />,
    children: [
      {
        label: "不同行业分析",
        key: "/visualization/vis1",
      },
      {
        label: "岗位应聘需求分析",
        key: "/visualization/vis2",
      },
      {
        label: "招聘地域可视分析",
        key: "/visualization/vis3",
      },
      {
        label: "招聘公司分析",
        key: "/visualization/vis4",
      },
      {
        label: "就业薪资分析",
        key: "/visualization/vis5",
      },
    ],
  },
  {
    key: "/resume",
    label: "简历管理",
  },
  {
    key: "/salaryPrediction",
    label: "薪资预测",
  },
  {
    key: "/recommendation",
    label: "职位推荐",
  },
  {
    key: "/selfMessage",
    label: "个人信息",
  },
];

const MenuContent: FC = () => {
  const [current, setCurrent] = useState("/main");
  const nav = useNavigate();
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    nav(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      theme="dark"
    />
  );
};

export default MenuContent;
