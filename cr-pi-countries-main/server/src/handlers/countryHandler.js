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
  const { id } = params;

  try {
    const response = await getCountryById(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCountryHandler,
  getIdCountryHandler,
};
