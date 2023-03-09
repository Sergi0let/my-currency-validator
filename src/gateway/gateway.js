import axios from 'axios';

export const getCurrencies = async (base = 'USD', symbols = 'UAH') => {
  const { data: response } = await axios.get(`${process.env.API_URL}latest`, {
    params: {
      symbols,
      base,
    },
    headers: {
      apikey: process.env.API_KEY,
    },
  });
  return response;
};

export const convertCurrency = async (amount, from, to) => {
  const { data: response } = await axios.get(`${process.env.API_URL}convert`, {
    params: {
      to,
      from,
      amount,
    },
    headers: {
      apikey: process.env.API_KEY,
    },
  });
  return response;
};
