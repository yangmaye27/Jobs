import React, { FC, useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import {
  BookOutlined,
  FundViewOutlined,
  HomeOutlined,
} from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "首页",
    key: "main",
    icon: <HomeOutlined />,
  },
  {
    label: "职业库",
    key: "app",
    icon: <BookOutlined />,
  },
  {
    label: "趋势分析",
    key: "SubMenu",
    icon: <FundViewOutlined />,
    children: [
      {
        label: "Item 1",
        key: "setting:1",
      },
      {
        label: "Item 2",
        key: "setting:2",
      },
    ],
  },
  {
    key: "key3",
    label: "简历管理",
  },
  {
    key: "key4",
    label: "薪资预测",
  },
  {
    key: "key5",
    label: "职位推荐",
  },
  {
    key: "key6",
    label: "个人信息",
  },
];

const MenuContent: FC = () => {
  const [current, setCurrent] = useState("main");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
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
