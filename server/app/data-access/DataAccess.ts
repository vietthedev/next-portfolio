import { MongoError } from "mongodb";
import mongoose from "mongoose";

class DataAccess {
  public static mongooseInstance: any;
  public static mongooseConnection: mongoose.Connection;

  public static connect(): mongoose.Connection {
    if (this.mongooseInstance) {
      return this.mongooseInstance;
    }

    this.mongooseConnection = mongoose.connection;
    this.mongooseConnection.once("open", () => {
      console.log("Connection to database is open.");
    });

    this.mongooseInstance = mongoose.connect(
      process.env.MONGODB_URI,
      { user: process.env.MONGODB_USER, pass: process.env.MONGODB_PASS },
      (err: MongoError) => console.error(err.message)
    );

    return this.mongooseInstance;
  }
}

DataAccess.connect();

export default DataAccess;
