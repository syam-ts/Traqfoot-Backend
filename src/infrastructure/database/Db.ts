import { connect } from "mongoose";
require("dotenv").config();

const mongo_uri: string = process.env.MONGO_URI as string;

export const ConnectDB = async (): Promise<void> => {
  try {
    await connect(mongo_uri);

    console.log("Database Connection Established");
  } catch (error) {
    console.log("ERROR: ", error);
  }
};
