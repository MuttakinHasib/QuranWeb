import axios from 'axios';
import { setLoading } from '../context/actions';
require('dotenv').config();

const ch_api = 'http://api.quran.com:3000/api/v3';
const api_key = process.env.REACT_APP_API_KEY;
const api = `http://api.globalquran.com`;

export const fetchChaptersList = () =>
  axios.create({
    baseURL: 'http://api.quran.com:3000/api/v3/',
  });

export const getChaptersList = async () => {
  try {
    const {
      data: { chapters },
    } = await axios.get(`${ch_api}/chapters`);
    console.log(chapters);
    return chapters;
  } catch (err) {
    console.log(err);
  }
};

export const fetchSurah = async num => {
  try {
    const {
      data: { quran },
    } = await axios.get(
      `https://cors-anywhere.herokuapp.com/${api}/surah/${num}/quran-simple?key=${api_key}`,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
    return quran['quran-simple'];
  } catch (err) {
    console.log(err);
  }
};
