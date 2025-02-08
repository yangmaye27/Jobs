import React, { FC, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import {
  Button,
  Checkbox,
  Form,
  Input,
  message,
  Space,
  Typography,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { MAIN_PATHNAME, REGISTER_PATHNAME } from "../router";
import { loginService } from "../apis/user";
import { useRequest } from "ahooks";
import { setToken } from "../utils/user-token";

const { Title } = Typography;

const USERNAME_KEY = "USERNAME";
const PASSWORD_KEY = "PASSWORD";

function rememberUser(username: string, password: string) {
  localStorage.setItem(USERNAME_KEY, username);
  localStorage.setItem(PASSWORD_KEY, password);
}

function deleteUserFromStorage() {
  localStorage.removeItem(USERNAME_KEY);
  localStorage.removeItem(PASSWORD_KEY);
}

function getUserFromStorage() {
  return {
    username: localStorage.getItem(USERNAME_KEY),
    password: localStorage.getItem(PASSWORD_KEY),
  };
}

const Login: FC = () => {
  const nav = useNavigate();
  const [form] = Form.useForm();

  useEffect(() => {
    const { username, password } = getUserFromStorage();
    form.setFieldsValue({ username, password });
  }, []);

  const { run } = useRequest(
    async (username: string, password: string) => {
      const data = await loginService(username, password);
      return data;
    },
    {
      manual: true,
      onSuccess(result) {
        const { token = "" } = result;
        // 存储token
        setToken(token);
        message.success("登陆成功");
        nav(MAIN_PATHNAME);
      },
    }
  );
  const onFinish = (values: any) => {
    const { username, password, remember } = values;
    run(username, password);
    if (remember) {
      rememberUser(username, password);
    } else {
      deleteUserFromStorage();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div style={{ textAlign: "center" }}>
          <Space>
            <Title level={2}>
              <UserOutlined />
            </Title>
            <Title level={2}>用户登录</Title>
          </Space>
        </div>
        <div>
          <Form
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 20 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            form={form}
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
              wrapperCol={{ offset: 6, span: 20 }}
              name="remember"
              valuePropName="checked"
            >
              <Checkbox>记住我</Checkbox>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6, span: 20 }}>
              <Space>
                <Button type="primary" htmlType="submit">
                  登录
                </Button>
                <Link to={REGISTER_PATHNAME}>注册新用户</Link>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
