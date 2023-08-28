import { BASE_URL } from '@/libs/constants';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    ['X-RapidAPI-Key']: '286b8f952cmshcc06dd52918be61p1afea7jsna086167aa476',
    ['X-RapidAPI-Host']: 'free-to-play-games-database.p.rapidapi.com',
  },
});
