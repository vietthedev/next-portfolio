import express from "express";

import ProjectBusiness from "../app/business/ProjectBusiness";
import IControllerBase from "./interfaces/base/IControllerBase";

export default class ProjectController
  implements IControllerBase<ProjectBusiness> {
  public async find(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<void> {
    const projectBusiness = new ProjectBusiness();

    res.send(await projectBusiness.find());
  }
}
