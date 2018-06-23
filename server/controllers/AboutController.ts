import express from "express";

import AboutBusiness from "../app/business/AboutBusiness";
import IControllerBase from "./interfaces/base/IControllerBase";

export default class AboutController implements IControllerBase<AboutBusiness> {
  public async find(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<void> {
    const aboutBusiness = new AboutBusiness();

    res.send(await aboutBusiness.find());
  }
}
