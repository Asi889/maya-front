import axios from 'axios';
import { FRONT_URL } from '../utils/consts';

const API_URL = `${FRONT_URL}`;

const VendorAPI = {
  getCategory: async (token, type) => {
    try {
      const { data } = await axios.get(`${API_URL}/vendor/${type}`, {
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
