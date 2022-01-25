import mongoose from 'mongoose';



const connection = {}


export async function dbConnect () {
  
  if(connection.isConnected){
    return;
  }
  console.log(connection);
  const db = await mongoose.connect(process.env.MONGO);

  connection.isConnected = db.connections[0].readyState;
}


