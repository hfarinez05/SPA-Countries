// body ====>> recibimos info

const { createActivityDB } = require("../controllers/activityPostController");

const createActivityHandler = async (req, res) => {
  const { CountryId, name, difficulty, duration, season } = req.body;

  try {
    const response = await createActivityDB(
      CountryId,
      name,
      difficulty,
      duration,
      season
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createActivityHandler };
