const axios = require("axios");
const { Country } = require("../db");
const URL = "http://localhost:5000/countries";

const infoClean = (arr) =>
  arr.map((c) => {
    return {
      ID: c.cca3,
      Nombre: c.name.common,
      Imagen: c.flags.png,
      Continente: c.continents,
      Capital: c.capital,
      Subregion: c.subregion,
      Area: c.area,
      Poblacion: c.population,
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

  const countryFiltered = countryApi.filter((c) => c.name === name);

  //const countryTheDB = await Country.findAll({ where: { name: name } });

  return countryFiltered;
};

module.exports = { getAllCountry, getCountryByName };
