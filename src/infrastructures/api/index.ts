import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

export type TErrorResponse = { err: Error; status: number; isError: true };

const headers: AxiosRequestHeaders = {
  'x-api-key': 'api key',
};

const config: AxiosRequestConfig = {
  // baseURL: 'http://127.0.0.1:3001',
  baseURL: 'http://host.docker.internal:3001',
  timeout: 5000,
  responseType: 'json',
  headers,
};

export class APIClient {
  axiosInstance: AxiosInstance;
  constructor() {
    this.axiosInstance = axios.create(config);
  }

  get = async (url: string, params?: ReqParams): Promise<AxiosResponse> => {
    return await this.axiosInstance
      .get(url, { params })
      .then((res) => {
        return res.data;
      })
      .catch((e) => {
        console.log(e);
        throw new Error(e);
      });
  };

  post = async (url: string, params: ReqParams): Promise<AxiosResponse> => {
    return await this.axiosInstance
      .get(url, { params })
      .then((res) => {
        return res.data;
      })
      .catch((e) => {
        console.log(e);
        throw new Error(e);
      });
  };
}

// type ReqParams = {
// [key: string]: string | number;
// };

type ReqParams = Record<string, string | number>;

// export const get = async (url: string, params?: GetReqParams) => {
//   console.log('get start web', new Date());

//   const result = await instance.get(url, { params }).then((res) => {
//     return res.data;
//   });
//   console.log('get end web', new Date());
//   return result;
//   // .catch((e) => {
//   //   console.log(e);
//   // });
// };

// export const post = async (url: string, params: any) => {
//   console.log('post start web', new Date());
//   const result = await instance.post(url, { data: params }).then((res) => {
//     return res.data;
//   });
//   console.log('post end web', new Date());
//   return result;
//   // .catch((e) => {
//   //   console.log(e);
//   // });
// };
