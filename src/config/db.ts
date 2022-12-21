// import dotenv from "dotenv";
// dotenv.config();
const mongoose = require("mongoose");

export const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    //   useCreateIndex: true,
    });
    console.log("connected to database successfully!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
