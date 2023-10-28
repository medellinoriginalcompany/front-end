import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // URL API
  withCredentials: true,
});

export const useApi = () => ({
  validateToken: async () => {
    const response = await api.post('/validar');
    return response.data;
  },

  login: async (email: string, password: string) => {
    const response = await api.post('/login', { email, password });
    return response.data;
  },

  logout: async () => {
    const response = await api.post('/logout');
    return response.data;
  },

  getProduct: async (id: number) => {
    const response = await api.get(`/produtos/${id}`);
    return response.data;
  },

  getProducts: async () => {
    const response = await api.get('/produtos');
    return response.data;
  },

  getActiveProducts: async () => {
    const response = await api.get('/produtos/ativos');
    return response.data;
  },

});