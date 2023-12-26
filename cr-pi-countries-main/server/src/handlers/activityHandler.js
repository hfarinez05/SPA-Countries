const getActivityHandler = (req, res) => {
  res.status(200).send("Ruta que me trae todas las actividades");
};

module.exports = { getActivityHandler };
