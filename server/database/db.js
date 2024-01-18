import mongoose from "mongoose"


 export const Connection =  async () => {
    const URL = `mongodb://aryan:aryan@ac-sb4etru-shard-00-00.d3z71m1.mongodb.net:27017,ac-sb4etru-shard-00-01.d3z71m1.mongodb.net:27017,ac-sb4etru-shard-00-02.d3z71m1.mongodb.net:27017/?ssl=true&replicaSet=atlas-l50wlp-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {

        await mongoose.connect(URL, { useNewUrlParser: true});
        console.log('Database connected succesffuly')  ;

    } catch (error) {
        console.log('Error while connecting to the database', error); 
        
    }
} 
export default Connection;