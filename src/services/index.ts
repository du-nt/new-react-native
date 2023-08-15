import {AxiosResponse} from 'axios';

import authAxios from './authAxios';

const defaultHeaders = {
  'Content-Type': 'application/json',
};

class Service {
  static get = async <T>(url: string, params?: any, headers = defaultHeaders) =>
    authAxios<any, AxiosResponse<T>>(url, {
      method: 'GET',
      params,
      headers,
    }).then(response => response.data);

  static post = async <T>(url: string, data: T, headers = defaultHeaders) =>
    authAxios(url, {
      method: 'POST',
      headers,
      data,
    }).then(response => response.data);

  static patch = async <T>(url: string, data: T, headers = defaultHeaders) =>
    authAxios(url, {
      method: 'PATCH',
      headers,
      data,
    }).then(response => response.data);

  static put = async <T>(url: string, data: T, headers = defaultHeaders) =>
    authAxios(url, {
      method: 'PUT',
      headers,
      data,
    }).then(response => response.data);

  static delete = async <T>(url: string, data: T, headers = defaultHeaders) =>
    authAxios(url, {
      method: 'DELETE',
      headers,
      data,
    }).then(response => response.data);
}

export default Service;
