import { Schema } from "mongoose";

import IProjectModel from "../../model/interfaces/IProjectModel";
import DataAccess from "../DataAccess";

const { mongooseConnection } = DataAccess;

class ProjectSchema {
  static get schema() {
    return new Schema(
      {
        imageName: {
          type: String
        },
        name: {
          required: true,
          type: String
        },
        repository: {
          required: true,
          type: String
        },
        skills: {
          default: undefined,
          required: true,
          type: [String]
        },
        website: {
          type: String
        }
      },
      { collection: "projects" }
    );
  }
}

const schema = mongooseConnection.model<IProjectModel>(
  "projects",
  ProjectSchema.schema
);

export default schema;
