import axios from 'axios';
import { FRONT_URL } from '../utils/consts';

const API_URL = `${FRONT_URL}`;

const ProfileAPI = {
  profile: async (token) => {
    try {
      const { data, status } = await axios.get(`${API_URL}/profile`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return { ...data, status };
    } catch (error) {
      // console.log(error);
      return { data: null, status: 500 };
    }
  },
  stages: async () => {
    try {
      const { data, status } = await axios.get(`${API_URL}/profile/userStages`);
      console.log(data);
      return { ...data, status };
    } catch (error) {
      // console.log(error);
      return { data: null, status: 500 };
    }
  },
  updateProfile: async (token, profile) => {
    try {
      const { data, status } = await axios.put(
        `${API_URL}/profile`,
        { profile },
        {
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return { ...data, status };
    } catch (error) {
      // console.log(error);
      return { data: null, status: 500 };
    }
  },
};

export default ProfileAPI;
