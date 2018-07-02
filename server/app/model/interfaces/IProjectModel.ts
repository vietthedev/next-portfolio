import { Document } from "mongoose";

export default interface IProjectModel extends Document {
  imageName: string;
  name: string;
  skills: string[];
  repository: string;
  website: string;
}
