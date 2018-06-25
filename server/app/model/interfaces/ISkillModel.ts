import { Document } from "mongoose";

import { SkillType } from "../../../config/constants/constants";

export default interface ISkillModel extends Document {
  name: string;
  rating: number;
  type: SkillType;
}
