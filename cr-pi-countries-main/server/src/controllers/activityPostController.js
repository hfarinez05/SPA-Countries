const { Activity } = require("../db");

const createActivityDB = async (
  CountryId,
  name,
  difficulty,
  duration,
  season
) => {
  const newActivity = await Activity.create({
    CountryId,
    name,
    difficulty,
    duration,
    season,
  });

  await newActivity.addCountries(CountryId);

  return newActivity;
};

module.exports = { createActivityDB };
