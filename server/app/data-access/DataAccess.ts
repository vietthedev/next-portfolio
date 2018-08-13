import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

class DataAccess {
  public static mongooseInstance: typeof mongoose;
  public static mongooseConnection: mongoose.Connection;

  public static async connect(): Promise<typeof mongoose> {
    if (this.mongooseInstance) {
      return this.mongooseInstance;
    }

    this.mongooseConnection = mongoose.connection;
    this.mongooseConnection.once("open", () => {
      console.log("Connection to database is open.");
    });
    this.mongooseConnection.on("error", (err: Error) =>
      console.error(`Database connection error occurred: ${err.message}`)
    );

    this.mongooseInstance = await mongoose.connect(
      process.env.MONGODB_URI,
      {
        pass: process.env.MONGODB_PASS,
        useNewUrlParser: true,
        user: process.env.MONGODB_USER
      }
    );

    return this.mongooseInstance;
  }
}

(async () => await DataAccess.connect())();

export default DataAccess;
