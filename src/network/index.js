import base from './axios'
export const baseService = base;

export const getGoods = () => {
  const api = `mock/goods.json`;
  return baseService.get(api);
};
