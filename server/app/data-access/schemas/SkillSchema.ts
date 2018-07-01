import { Schema } from "mongoose";

import { SkillType } from "../../../config/constants/constants";
import ISkillModel from "../../model/interfaces/ISkillModel";
import DataAccess from "../DataAccess";

const { mongooseConnection } = DataAccess;

class SkillSchema {
  static get schema() {
    return new Schema(
      {
        name: {
          required: true,
          type: String
        },
        type: {
          enum: Object.keys(SkillType),
          required: true,
          type: String
        }
      },
      { collection: "skills" }
    );
  }
}

const schema = mongooseConnection.model<ISkillModel>(
  "skills",
  SkillSchema.schema
);

export default schema;
