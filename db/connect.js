const mongoose = require("mongoose");

// MongoDB URI
const uri = "mongodb+srv://CallAPI:AyNGYCMSK6VBv39H@cluster0.sx3pgl8.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0";

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected successfully!");
    } catch (error) {
        console.error("Database connection error:", error.message);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;
