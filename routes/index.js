const donorRoutes = require("./donorRoutes");

const projectRoutes = require("./projectRoutes");

const donation_to_projectRoutes = require("./donation_to_projectRoutes")

const authRoutes = require("./authRoutes")

const favRoutes = require("./favRoutes")

const payment_historyRoutes = require("./payment_historyRoutes")

const routes = (app) => {
  app.use("/project", projectRoutes());
  app.use("/donor", donorRoutes());
  app.use("/auth", authRoutes());
  app.use("/donation_to_project", donation_to_projectRoutes());
  app.use("/fav", favRoutes());
  app.use("/payment_history", payment_historyRoutes());
};
module.exports = routes;