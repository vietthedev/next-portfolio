import express from "express";

import AboutRoutes from "../AboutRoutes";

const app = express();

export default class RouteBase {
  get routes() {
    app.use("/", new AboutRoutes().routes);

    return app;
  }
}
