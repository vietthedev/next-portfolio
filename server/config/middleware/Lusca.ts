import express from "express";
import lusca from "lusca";

export default class Lusca {
  public static configuration() {
    const app = express();

    app.use(
      lusca({
        csrf: true,
        nosniff: true,
        referrerPolicy: "same-origin",
        xframe: "SAMEORIGIN",
        xssProtection: true
      })
    );

    return app;
  }
}
