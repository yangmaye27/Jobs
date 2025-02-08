import React, { FC } from "react";
import { Typography, Space, Form, Input, Button, message } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import styles from "./Login.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_PATHNAME } from "../router";
import { registerService } from "../apis/user";
import { useRequest } from "ahooks";

const { Title } = Typography;

const Register: FC = () => {
  const nav = useNavigate();
  const { run } = useRequest(
    async (values) => {
      const { username, password, email, phone } = values;
      await registerService(username, password, email, phone);
    },
    {
      manual: true,
      onSuccess() {
        message.success("注册成功");
        nav(LOGIN_PATHNAME);
      },
    }
  );

  const onFinish = (value: any) => {
    run(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div style={{ textAlign: "center" }}>
          <Space>
            <Title level={2}>
              <UserAddOutlined />
            </Title>
            <Title level={2}>注册新用户</Title>
          </Space>
        </div>
        <div>
          <Form
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 20 }}
            onFinish={onFinish}
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[
                { required: true, message: "请输入用户名" },
                {
                  type: "string",
                  min: 5,
                  max: 10,
                  message: "字符长度在5-10之间",
                },
                { pattern: /^\w+$/, message: "只能是字母数字下划线" },
              ]}
            >
              <Input></Input>
            </Form.Item>
            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: "请输入密码" }]}
            >
              <Input.Password></Input.Password>
            </Form.Item>
            <Form.Item
              label="确认密码"
              name="confirm"
              dependencies={["password"]}
              rules={[
                { required: true, message: "请再次输入密码" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    } else {
                      return Promise.reject(new Error("两次密码不一致"));
                    }
                  },
                }),
              ]}
            >
              <Input.Password></Input.Password>
            </Form.Item>
            <Form.Item
              label="邮箱"
              name="email"
              rules={[
                { required: true, message: "请输入用户邮箱" },
                { type: "email", message: "请输入正确的邮箱格式" },
              ]}
            >
              <Input></Input>
            </Form.Item>
            <Form.Item
              label="手机号"
              name="phone"
              rules={[
                { required: true, message: "请输入用户手机号" },
                {
                  pattern: /^1[3-9]\d{9}$/,
                  message: "请输入正确的手机号格式",
                },
              ]}
            >
              <Input></Input>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6, span: 20 }}>
              <Space>
                <Button type="primary" htmlType="submit">
                  注册
                </Button>
                <Link to={LOGIN_PATHNAME}>已有账户，请登录</Link>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
