import { MongoClient } from "mongodb";

const client = new MongoClient(
  "mongodb+srv://ilya:1111@cluster0.nvhgwsm.mongodb.net/?retryWrites=true&w=majority"
);

const start = async () => {
  try {
    await client.connect();
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};
