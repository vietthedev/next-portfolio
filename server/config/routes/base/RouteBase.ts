import express from "express";

import AboutRoutes from "../AboutRoutes";
import ProjectRoutes from "../ProjectRoutes";
import SkillRoutes from "../SkillRoutes";

const app = express();
const apiPath = process.env.API_PATH;

export default class RouteBase {
  get routes() {
    app.use(apiPath, new AboutRoutes().routes);
    app.use(apiPath, new ProjectRoutes().routes);
    app.use(apiPath, new SkillRoutes().routes);

    return app;
  }
}
