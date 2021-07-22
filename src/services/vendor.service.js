import axios from 'axios';
import { FRONT_URL } from '../utils/consts';

const API_URL = `${FRONT_URL}`;

const VendorAPI = {
  getCategorys: async (token, type, ids = null) => {
    try {
      const { data } = await axios.get(`${API_URL}/vendor/${type}${ids ? `?ids=[${ids}]` : ''}`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      return [];
    }
  },
  fetchComparedCategorys: async (token, filteredData, type) => {
    try {
      const { data } = await axios.post(
        `${API_URL}/vendor/${type}`,
        { filteredData },
        {
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    } catch (error) {
      return [];
    }
  },
  getCategory: async (token, type, id) => {
    try {
      const { data } = await axios.get(`${API_URL}/vendor/${type}?id=${id}`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      return error.response;
    }
  },
};

export default VendorAPI;
