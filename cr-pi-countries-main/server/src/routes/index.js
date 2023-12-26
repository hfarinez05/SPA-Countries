const { Router } = require("express");
const router = Router();

const countryRouter = require("./countryRouter");
const postRouter = require("./postRouter");
const activityRouter = require("./activityRouter");

router.use("/countries", countryRouter);

/*FALTA LA RUTA QUE RECIBE QUERY
router.get("/countries", (req, res) => {
  res.status(200).send("Detalle del pais por query");
});
*/

router.use("/post", postRouter);

router.use("/activities", activityRouter);

module.exports = router;
