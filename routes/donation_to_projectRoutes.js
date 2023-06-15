const express = require("express")
var router = express.Router();

const donation_to_projectRoutes = () => {
  router.get("/donor/:id", getByDonorId);

  router.get("/project/:id",getByProjectId)

  return router;
};
module.exports = donation_to_projectRoutes;