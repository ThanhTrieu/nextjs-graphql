const axios = require('axios');

exports.getDataCoronaFromApi = async () => {
  const response = await axios.get(`https://api.covid19api.com/summary`);
  const result = await response.status === 200 ? await response.data : [];
  return result;
}