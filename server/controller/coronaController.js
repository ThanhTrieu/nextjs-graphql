const api = require('../service/api');

exports.getDataCorona = async (req, res) => {
  const covid = await api.getDataCoronaFromApi();
  const words = await covid.Global;
  const country = await covid.Countries;
  const root = {
    Global: words,
    Countries: country
  }
  return root;
}