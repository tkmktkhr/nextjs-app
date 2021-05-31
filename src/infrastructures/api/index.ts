import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:3030',
  timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

export const get = async (url: string, params: any) => {
  console.log('inside of axios');

  const result = await instance.get(url, params).then((res) => {
    return res.data;
  });

  return result;
  // .catch((e) => {
  //   console.log(e);
  // });
};
