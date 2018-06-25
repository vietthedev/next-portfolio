import bodyParser from "body-parser";
import compression from "compression";
import express from "express";

import RouteBase from "../../routes/base/RouteBase";
import ExpressSession from "../ExpressSession";
import Lusca from "../Lusca";
import MethodOverride from "../MethodOverride";

export default class MiddlewareBase {
  static get configuration() {
    const app = express();

    app.use(bodyParser.json());
    app.use(ExpressSession.configuration());
    app.use(Lusca.configuration());
    app.use(MethodOverride.configuration());
    app.use(compression());

    app.use(new RouteBase().routes);

    return app;
  }
}
