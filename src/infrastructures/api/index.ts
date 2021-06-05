import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:3030',
  timeout: 1000,
  responseType: 'json',
});

export const get = async (url: string, params: any) => {
  console.log('inside of axios');
  console.log(params);

  // postじゃないと{ data: params }入れれない
  const result = await instance.get(url, { params }).then((res) => {
    return res.data;
  });

  return result;
  // .catch((e) => {
  //   console.log(e);
  // });
};

export const post = async (url: string, params: any) => {
  console.log('inside of axios');
  console.log(params);

  // postじゃないと{ data: params }入れれない
  const result = await instance.post(url, { data: params }).then((res) => {
    return res.data;
  });

  return result;
  // .catch((e) => {
  //   console.log(e);
  // });
};
