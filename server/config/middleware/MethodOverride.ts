import express from "express";
import methodOverride from "method-override";

export default class MethodOverride {
  public static configuration() {
    const app = express();

    app.use(methodOverride("X-HTTP-Method"));
    app.use(methodOverride("X-HTTP-Method-Override"));
    app.use(methodOverride("X-Method-Override"));
    app.use(methodOverride("_method"));

    return app;
  }
}
