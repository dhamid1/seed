import mongoose from "mongoose"



 const Connection =async (username, password) =>{
    const URL = `mongodb+srv://seedllcgrow:HbndITJeIXU0RqVP@seed.afjqs9j.mongodb.net/?retryWrites=true&w=majority`;
     //const URL = `mongodb+srv://${username}:${password}@seed.afjqs9j.mongodb.net/?retryWrites=true&w=majority`;
    // const URL = `mongodb+srv://seedllcgrow:HbndITJeIXU0RqVP@seed.afjqs9j.mongodb.net/?retryWrites=true&w=majority`;
    try {
      await  mongoose.connect(URL,{ useNewUrlParser: true });
      console.log('Database is Connected');
    } catch (error){
        console.log('Error while connecting', error);
    }


}

export default Connection;