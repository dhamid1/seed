import mongoose from "mongoose"

import dotenv from 'dotenv';
 

dotenv.config();
 const Connection =async () =>{
  
    const URL = process.env.MONGODB_URL;
    
      try {
      await  mongoose.connect(URL,{ useNewUrlParser: true });
      console.log('Database is Connected');
    } catch (error){
        console.log('Error while connecting', error);
    }


}

export default Connection;
