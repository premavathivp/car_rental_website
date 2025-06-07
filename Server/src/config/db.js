const mongoose = require("mongoose");

const URL="mongodb+srv://prema1234:prema1234@cluster0.o1wss.mongodb.net/car_rental_website?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
    try{
      await mongoose.connect(URL);
      console.log(" Database Connected Successfully!");
    }catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;
