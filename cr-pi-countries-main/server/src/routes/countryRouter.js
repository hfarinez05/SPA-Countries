const { Router } = require("express");

const {
  getCountryHandler,
  getIdCountryHandler,
} = require("../handlers/countryHandler");

const countryRouter = Router();

countryRouter.get("/", getCountryHandler);

countryRouter.get("/:idPais", getIdCountryHandler);

module.exports = countryRouter;
