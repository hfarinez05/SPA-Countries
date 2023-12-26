// body ====>> recibimos info

const { createActivityDB } = require("../controllers/activityPostController");

const createActivityHandler = async (req, res) => {
  const { ID, Nombre, Dificultad, Duracion, Temporada } = req.body;

  try {
    const response = await createActivityDB(
      ID,
      Nombre,
      Dificultad,
      Duracion,
      Temporada
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createActivityHandler };
