import express from "express";
import asyncHandler from "express-async-handler";

import AboutController from "../../controllers/AboutController";

const router = express.Router();

export default class AboutRoutes {
  private aboutController: AboutController;

  constructor() {
    this.aboutController = new AboutController();
  }

  get routes(): express.Router {
    const controller = this.aboutController;

    router.get("/about", asyncHandler(controller.find));

    return router;
  }
}
