const { Country, Activity } = require("../db");

const getCountryById = async (idPais) => {
  const countryById = await Country.findByPk(idPais, {
    include: Activity,
  });

  if (!countryById) {
    throw new Error("No se encontró un país con el ID proporcionado.");
  }
  return countryById;
};

module.exports = getCountryById;
