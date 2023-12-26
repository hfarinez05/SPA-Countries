const { Activity } = require("../db");

const createActivityDB = async (
  ID,
  Nombre,
  Dificultad,
  Duracion,
  Temporada
) => {
  const newActivity = await Activity.create({
    ID,
    Nombre,
    Dificultad,
    Duracion,
    Temporada,
  });

  return newActivity;
};

module.exports = { createActivityDB };
