import api from './api-helper';

export const readAllFarms = async () => {
  const resp = await api.get('/farms');
  return resp.data
}

export const readOneFarm = async (farmId) => {
  const resp = await api.get(`/farms/${farmId}`);
  return resp.data;
}