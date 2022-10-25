const BASE_URL_DETAIL = 'http://10.58.52.87:8000';
const BASE_URL_LIST = 'http://10.58.52.125:3000';
const BASE_URL_CART = 'http://10.58.52.56:8000';

export const API = {
  list: `${BASE_URL_LIST}/productlist/`,
  detail: `${BASE_URL_DETAIL}/product`,
  main: `${BASE_URL_DETAIL}`,
  cart: `${BASE_URL_CART}/cart`,
  join: `${BASE_URL_DETAIL}/user`,
};
