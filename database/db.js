import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_URL);
    console.log(
      `Connection has been successfully established with ${connection.connection.host}`
    );
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
