const express = require("express")
var router = express.Router();

const donorRoutes = () => {
  router.get("/", list);

  router.delete("/:id",delById)

  router.put("/:id",updateById)

  return router;
};
module.exports = donorRoutes;