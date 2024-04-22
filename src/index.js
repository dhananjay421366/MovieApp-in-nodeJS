import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({
    path:'./.env'
})

connectDB()
.then(()=>{

})
.catch()




























// const app = express();
// // Connect to MongoDB database using Mongoose
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("errr", (error) => {
//       console.log("error");
//       throw error;
//     });
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// })();
