import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:3030',
  timeout: 5000,
  responseType: 'json',
});

type GetReqParams = {
  [key: string]: string | number;
};

export const get = async (url: string, params?: GetReqParams) => {
  const result = await instance.get(url, { params }).then((res) => {
    return res.data;
  });
  console.log(result);

  return result;
  // .catch((e) => {
  //   console.log(e);
  // });
};

export const post = async (url: string, params: any) => {
  console.log('------------------inside of axiosPost');
  console.log(params);

  const result = await instance.post(url, { data: params }).then((res) => {
    return res.data;
  });

  return result;
  // .catch((e) => {
  //   console.log(e);
  // });
};
