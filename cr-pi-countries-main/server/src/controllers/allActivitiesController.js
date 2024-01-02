const { Activity, Country } = require("../db");

const getAllActivities = async () => {
  const allActivitiesDB = await Activity.findAll();

  return allActivitiesDB;
};

module.exports = getAllActivities;
