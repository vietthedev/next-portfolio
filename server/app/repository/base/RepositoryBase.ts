import mongoose from "mongoose";

import IReadRepository from "../interfaces/base/IReadRepository";

export default class RepositoryBase<T extends mongoose.Document>
  implements IReadRepository<T> {
  private model: mongoose.Model<T>;

  constructor(model: mongoose.Model<T>) {
    this.model = model;
  }

  public async find(conditions?: any): Promise<T[]> {
    return await this.model.find(conditions || {}).exec();
  }
}
