const getAllActivities = require("../controllers/allActivitiesController");

const getActivityHandler = async (req, res) => {
  try {
    const allActivities = await getAllActivities();
    res.status(200).send(allActivities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getActivityHandler };
