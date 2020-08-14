import api from './api-helper';

export const readAllFarms = async () => {
  const resp = await api.get('/farms');
  return resp.data
}