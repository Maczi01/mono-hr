import axios from 'axios';

export const getAllEmployees = async () =>
  await axios.get('/api').then((res) => res.data);
