const express = require("express")
var router = express.Router();

const payment_historyRoutes = () => {

  router.get("/donor/:id", getByDonorId);

  return router;
};
module.exports = payment_historyRoutes;