import mongoose from 'mongoose';


const connectedDb = handler => async (req,res) => {
  if(mongoose.connections[0].readyState){
    return handler(req,res);
  }

  await mongoose.connect(process.env.MONGO, {
    autoIndex: true,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
  });

  return handler(req,res);
}


export default connectedDb; 