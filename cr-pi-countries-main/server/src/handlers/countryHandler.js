const getCountryById = require("../controllers/idCountryController");
const {
  getAllCountry,
  getCountryByName,
} = require("../controllers/allCountryControler");

const getCountryHandler = async (req, res) => {
  const { name } = req.query;

  try {
    if (name) {
      const countryByName = await getCountryByName(name);
      res.status(200).json(countryByName);
    } else {
      const response = await getAllCountry();
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ------>>>> /:idPais => params
const getIdCountryHandler = async (req, res) => {
  const idPais = req.params.idPais.toUpperCase();
  //const { idPais } = req.params;

  try {
    const response = await getCountryById(idPais);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCountryHandler,
  getIdCountryHandler,
};
