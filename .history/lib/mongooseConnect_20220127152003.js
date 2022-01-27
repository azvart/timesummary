import mongoose from 'mongoose';


const MONGO_URI = process.env.MONGO;

if(!MONGO_URI){
  throw new Error('Invalid mongodb uri')
}


let cached = global.mongoose;


if(!cached){
  cached = global.mongoose = { conn: null, promise: null }
}


async function dbConnect(){
  if(cached.conn){
    return cached.conn;
  }

  if(!cached.promise){
    cached.promise = mongoose.connect(MONGO_URI).then(mongoose => {
      return mongoose;
    })
  }

  cached.conn = await cached.promise;
  console.log(cached.conn);
  return cached.conn;
}
export default dbConnect;