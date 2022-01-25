import { MongoClient } from "mongodb";

const uri = process.env.MONGO;


let client;
let clientPromise;

if(!process.env.MONGO){
  throw new Error(`Please add your Mongo Uri to .env.local`)
}

if(process.env.NODE_ENV === 'development'){
  if(!global._mongoClientPromise){
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global_mongoClientPromise;
}else{
  client = new MongoClient(uri);
  clientPromise = client.connect();
}



export default clientPromise;