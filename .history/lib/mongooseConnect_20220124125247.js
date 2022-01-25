import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO;

if(!MONGO_URI){
  throw new Error('Define the MONGO environmental variable')
}