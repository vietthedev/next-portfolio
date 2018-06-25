import errorHandler from "errorhandler";
import express from "express";

export default class ErrorHandler {
  public static configuration() {
    const app = express();

    app.use(
      errorHandler({
        log: false
      })
    );

    return app;
  }
}
