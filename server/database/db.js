import mongoose from "mongoose";
export const Connection=async(USERNAME,PASSWORD)=>{
  const URL=`mongodb://chakribontha:wofA1T9OCThcSijv@ac-13krkib-shard-00-00.6dm70xx.mongodb.net:27017,ac-13krkib-shard-00-01.6dm70xx.mongodb.net:27017,ac-13krkib-shard-00-02.6dm70xx.mongodb.net:27017/?ssl=true&replicaSet=atlas-tjhvza-shard-0&authSource=admin&retryWrites=true&w=majority`
   try{ 
     await mongoose.connect(URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true 
    });
     console.log(`Database connection is established`)
    }catch(error){
        console.log(`Connection Error from Database:`,error.message);
    }
}
export default Connection;