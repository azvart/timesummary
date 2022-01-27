import mongoose from 'mongoose';


const MONGO_URI = process.env.MONGO;

if(!MONGO_URI){
  throw new Error('Invalid mongodb uri')
}


let cached = global.mongoose;

if(!cached){
  cached = global.mongoose = {conn: null, promise: null}
}