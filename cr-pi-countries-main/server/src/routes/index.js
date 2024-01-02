const { Router } = require("express");
const router = Router();

const countryRouter = require("./countryRouter");
const postRouter = require("./postRouter");
const activityRouter = require("./activityRouter");

router.use("/countries", countryRouter);

router.use("/activities", postRouter);

router.use("/activities", activityRouter);

module.exports = router;
