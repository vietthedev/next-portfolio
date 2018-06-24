import { Router } from "express";
import asyncHandler from "express-async-handler";

import AboutController from "../../controllers/AboutController";

const router = Router();

export default class AboutRoutes {
  private aboutController: AboutController;

  constructor() {
    this.aboutController = new AboutController();
  }

  get routes(): Router {
    const controller = this.aboutController;

    router.get("/about", asyncHandler(controller.find));

    return router;
  }
}
