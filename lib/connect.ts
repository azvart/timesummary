import mongoose from 'mongoose';




async function Connect(){
  mongoose.connect("mongodb://localhost:27017/NextApp")
  .then((mong) => {
    return mong;
  });
}


export default Connect;