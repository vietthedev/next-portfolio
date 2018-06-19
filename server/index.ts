import express from "express";
import { IncomingMessage, ServerResponse } from "http";
import next from "next";

import dotenv from "dotenv";
import MiddlewareBase from "./config/middleware/base/MiddlewareBase";

dotenv.config();

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = parseInt(process.env.PORT, 10) || 3000;

app
  .prepare()
  .then(() => {
    const server = express();

    server.set("port", port);
    server.use(MiddlewareBase.configuration);

    server.get("*", (req: IncomingMessage, res: ServerResponse) => {
      return handle(req, res);
    });

    server.listen(port, (err: Error) => {
      if (err) {
        throw err;
      }

      console.log(`> Ready on http://localhost:${port}/`);
    });
  })
  .catch((ex: Error) => {
    console.error(ex.stack);
    process.exit(1);
  });
