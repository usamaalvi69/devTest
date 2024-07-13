import Config from 'react-native-config';
import {networkService} from './NetworkService';

// Helper function for API requests
export const makeRequest = async (url, params) => {
  try {
    const response = await networkService.request({
      method: 'GET',
      url,
      params: {
        api_key: Config.API_KEY,
        language: 'en-US',
        ...params,
      },
    });
    if (response?.data) {
      return response.data;
    } else {
      throw new Error('No data received');
    }
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
    throw error;
  }
};
