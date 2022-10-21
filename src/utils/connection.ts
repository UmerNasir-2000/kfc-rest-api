import { connect } from "mongoose";
import config from "config";

async function connectToDatabase() {
  const MONGO_URI = config.get<string>("connectionString");

  try {
    const { connection } = await connect(MONGO_URI);
    console.log(
      `successfully connected to ${connection.name} database at ${connection.host}`
    );
  } catch (error) {
    console.log(`Connection to MongoDB failed`, error);
    process.exit(1);
  }
}

export default connectToDatabase;
