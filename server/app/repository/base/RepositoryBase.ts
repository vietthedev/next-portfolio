import { Document, Model } from "mongoose";

import IReadRepository from "../interfaces/base/IReadRepository";

export default class RepositoryBase<T extends Document>
  implements IReadRepository<T> {
  private model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  public async find(conditions?: any): Promise<T[]> {
    return await this.model.find(conditions).exec();
  }
}
