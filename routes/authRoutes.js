const express = require("express")
var router = express.Router();

const authRoutes = () => {
  router.post("/", signin);

  router.post("/",register)

  return router;
};
module.exports = authRoutes;