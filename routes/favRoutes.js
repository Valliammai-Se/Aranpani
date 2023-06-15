const express = require("express")
var router = express.Router();

const favRoutes = () => {
  router.get("/donor/:id", getByDonorId);

  router.get("/project/:id",getByProjectId)

  return router;
};
module.exports = favRoutes;