import { Router } from "express";
import asyncHandler from "express-async-handler";

import ProjectController from "../../controllers/ProjectController";

const router = Router();

export default class ProjectRoutes {
  private projectController: ProjectController;

  constructor() {
    this.projectController = new ProjectController();
  }

  get routes(): Router {
    const controller = this.projectController;

    router.get("/projects", asyncHandler(controller.find));

    return router;
  }
}
