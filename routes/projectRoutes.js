const express = require("express")
var router = express.Router();

const projectRoutes = () => {
  router.get("/", list);

  router.put("/:id",updateById)

  router.get("/:id", getById);

  return router;
};
module.exports = projectRoutes;