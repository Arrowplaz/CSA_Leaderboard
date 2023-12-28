//This is the connection File
import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);

let conn;
try {
  console.log("Connecting to MongoDB Atlas...");
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

//Can rename this as whatever I want
let db = conn.db("sample_training2");

//Exports a DB object that connects to the sample_training in the atlas cluster
export default db;