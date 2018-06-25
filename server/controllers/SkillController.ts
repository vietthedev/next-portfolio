import express from "express";

import SkillBusiness from "../app/business/SkillBusiness";
import IControllerBase from "./interfaces/base/IControllerBase";

export default class SkillController implements IControllerBase<SkillBusiness> {
  public async find(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<void> {
    const skillBusiness = new SkillBusiness();

    res.send(await skillBusiness.find());
  }
}
