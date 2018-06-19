import express from "express";
import session from "express-session";

export default class ExpressSession {
  public static configuration() {
    const app = express();

    app.use(
      session({
        resave: true,
        saveUninitialized: true,
        secret: process.env.EXPRESS_SESSION_SECRET
      })
    );

    return app;
  }
}
