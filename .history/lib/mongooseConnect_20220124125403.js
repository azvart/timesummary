import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO;

if(!MONGO_URI){
  throw new Error('Define the MONGO environmental variable')
}


let cachedClient = null;
let cachedDb = null;


export async function dbConnect(){
  if(cachedClient && cachedDb){
    return {
      client: cachedClient,
      db: cachedDb
    }
  }

  let client = new MongoClient(MONGO_URI);
}