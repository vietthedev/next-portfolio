import { Document } from "mongoose";

export default interface IProjectModel extends Document {
  name: string;
  skills: string[];
  repository: string;
  website: string;
}
