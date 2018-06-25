import { Router } from "express";
import asyncHandler from "express-async-handler";

import SkillController from "../../controllers/SkillController";

const router = Router();

export default class SkillRoutes {
  private skillController: SkillController;

  constructor() {
    this.skillController = new SkillController();
  }

  get routes(): Router {
    const controller = this.skillController;

    router.get("/skills", asyncHandler(controller.find));

    return router;
  }
}
