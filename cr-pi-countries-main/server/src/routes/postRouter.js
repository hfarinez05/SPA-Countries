const { Router } = require("express");

const { createActivityHandler } = require("../handlers/postActivityHandler");

const postRouter = Router();

postRouter.post("/", createActivityHandler);

module.exports = postRouter;
