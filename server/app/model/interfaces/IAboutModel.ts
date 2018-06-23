import mongoose from "mongoose";

export default interface IAboutModel extends mongoose.Document {
  content: string;
}
