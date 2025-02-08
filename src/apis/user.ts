import axios, { ResDataType } from "./ajax.ts";

export async function getUserInfoService(): Promise<ResDataType> {
  const url = "api/user/info";
  const res = (await axios.get(url)) as ResDataType;
  return res;
}

// 注册
export async function registerService(
  username: string,
  password: string,
  email: string,
  phone: string
): Promise<ResDataType> {
  const url = "api/user/register";
  const data = {
    username,
    password,
    email,
    phone,
  };
  const res = (await axios.post(url, data)) as ResDataType;
  return res;
}

// 登录
export async function loginService(
  username: string,
  password: string
): Promise<ResDataType> {
  const url = "api/user/login";
  const data = {
    username,
    password,
  };
  const res = (await axios.post(url, data)) as ResDataType;
  return res;
}
