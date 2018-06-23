import mongoose from "mongoose";

import IAboutModel from "../../model/interfaces/IAboutModel";
import DataAccess from "../DataAccess";

const { mongooseConnection } = DataAccess;

class AboutSchema {
  static get schema() {
    return new mongoose.Schema({
      content: {
        required: true,
        type: String
      }
    });
  }
}

const schema = mongooseConnection.model<IAboutModel>(
  "about",
  AboutSchema.schema
);

export default schema;
