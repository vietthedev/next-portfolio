import { Document } from "mongoose";

export default interface IAboutModel extends Document {
  content: string;
}
