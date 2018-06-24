import { Schema } from "mongoose";

import IAboutModel from "../../model/interfaces/IAboutModel";
import DataAccess from "../DataAccess";

const { mongooseConnection } = DataAccess;

class AboutSchema {
  static get schema() {
    return new Schema(
      {
        content: {
          required: true,
          type: String
        }
      },
      { collection: "about" }
    );
  }
}

const schema = mongooseConnection.model<IAboutModel>(
  "about",
  AboutSchema.schema
);

export default schema;
