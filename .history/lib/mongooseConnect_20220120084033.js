import mongoose from 'mongoose';






async function dbConnect () {
  if(mongoose.connections[0].readyState){
    return;
  }

  await mongoose.connect(process.env.MONGO);
}

export default dbConnect;
