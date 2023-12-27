const axios = require("axios");
const { Country } = require("../db");
const URL = "http://localhost:5000/countries";

const infoClean = (arr) =>
  arr.map((c) => {
    return {
      Id: c.cca3,
      name: c.name.common,
      image: c.flags.png,
      continents: c.continents,
      capital: c.capital,
      subregion: c.subregion,
      area: c.area,
      population: c.population,
    };
  });

const getAllCountry = async () => {
  //const countryBD = Country.findAll();
  const infoApi = (await axios.get(URL)).data;

  const countryApi = infoClean(infoApi);

  return countryApi;
};

const getCountryByName = async (name) => {
  const infoApi = (await axios.get(URL)).data;

  const countryApi = infoClean(infoApi);

  const countryMatch = countryApi.filter((c) =>
    new RegExp(name, "i").test(c.name)
  );

  //const countryTheDB = await Country.findAll({ where: { name: name } });

  return countryMatch;
};

module.exports = { getAllCountry, getCountryByName };
