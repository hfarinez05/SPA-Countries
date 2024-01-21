const axios = require("axios");
const { Country } = require("../db");
const { Op } = require("sequelize");
const URL = "http://localhost:5000/countries";

const infoClean = (arr) =>
  arr.map((c) => {
    return {
      id: c.cca3,
      name: c.name.common,
      image: c.flags.png,
      continents: c.continents[0],
      capital: c.capital ? c.capital[0] : "No tiene esta propiedad",
      subregion: c.subregion,
      area: c.area,
      population: c.population,
    };
  });

const getAllCountry = async () => {
  const countryBD = await Country.findAll();

  if (countryBD.length === 0) {
    // infoApi guarda los data de la peticion a la URL
    const infoApi = (await axios.get(URL)).data;

    // countryApi trae los datos que me interesan de la info general de countries
    const countryApi = infoClean(infoApi);

    await Country.bulkCreate(countryApi);
  }

  return countryBD;
};

const getCountryByName = async (name) => {
  const countryByQuery = await Country.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
        //[Op.iLike]: `%${name.split("").join("%")}%`,
      },
    },
  });

  if (!countryByQuery || countryByQuery.length === 0) {
    throw new Error(`No se encontraron paises con el nombre: ${name}`);
  }
  //const infoApi = (await axios.get(URL)).data;

  //const countryApi = infoClean(infoApi);

  /*const countryMatch = countryApi.filter((c) =>
    new RegExp(name, "i").test(c.name)
  );
  */
  return countryByQuery;
};

module.exports = { getAllCountry, getCountryByName };
