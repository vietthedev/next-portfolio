import express from "express";

export default interface IReadController {
  find(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void;
}
