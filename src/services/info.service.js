import axios from 'axios';
import { FRONT_URL } from '../utils/consts';

const API_URL = `${FRONT_URL}`;

const Infoservice = {
  getStreetInfo: async (cityId) => {
    try {
      const { data } = await axios.get(`${API_URL}/user/fetch-city?cityid=${cityId}`);
      return data;
    } catch (error) {
      return error.response;
    }
  },
  getBanner: async () => {
    try {
      const { data } = await axios.get(`${API_URL}/info/banner`);
      return data;
    } catch (error) {
      return error.response;
    }
  },
};
export default Infoservice;
