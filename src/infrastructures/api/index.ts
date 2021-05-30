import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:3030',
  timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

export const get = (url: string, params: Object) => {
  console.log('inside of axios');

  instance
    .get(url, params)
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
};
