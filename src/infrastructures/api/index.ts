import axios, { AxiosInstance, AxiosResponse, CreateAxiosDefaults } from 'axios';

export type TErrorResponse = { err: Error; status: number; isError: true };

const headers = {
  'x-api-key': 'api-key',
};

const config: CreateAxiosDefaults = {
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
      .post(url, { data: params })
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
