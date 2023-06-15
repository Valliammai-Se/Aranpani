const express = require("express");
const expressApp = require("./expressApp.js");
const sequelize = require("sequelize")

const StartServer = async () => {
const app = express();
  try {
    await db.sequelize.authenticate();

    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.log("Unable to connect to the database:", error);
  }
  await expressApp(app);

  app.listen(4000, () => {
      console.log(`Listening to port 4000`);
    })

    .on("error", (err) => {
      console.log("App failed to start",err);

      process.exit();
    });
};

StartServer();
