// import { MongoClient } from "mongodb";
import mongoose from 'mongoose';

const uri = process.env.MONGO;


let client;
let clientPromise;

if(!process.env.MONGO){
  throw new Error(`Please add your Mongo Uri to .env.local`)
}

if(process.env.NODE_ENV === 'development'){
  if(!global._mongoClientPromise){
    client = mongoose.connect(uri); 
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
}else{
  client = mongoose.connect(uri); 
  clientPromise = client.connect();
}



export default clientPromise;