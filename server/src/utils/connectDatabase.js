// Require Dependencies
const config = require("../config");
const mongoose = require("mongoose");

// Setup Additional Variables
const DATABASE_NAME = "hello"; // Replace with your actual database name
const MONGO_URI = "mongodb+srv://skranee:skranee999@rolledgg.altb3mu.mongodb.net/?retryWrites=true&w=majority&appName=rolledgg";
  // process.env.NODE_ENV === "production"
  //   ? config.database.productionMongoURI
  //   : "mongodb://127.0.0.1:27017/hello";

// Configure MongoDB and Mongoose
const connectDatabase = async () => {
  try {
    await mongoose
      .connect(MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      })
      .then(() => console.log("MongoDB >> Connected!"));
  } catch (error) {
    console.log(`MongoDB ERROR >> ${error.message}`);

    // Exit current process with failure
    process.exit(1);
  }
};

// Export the util
module.exports = connectDatabase;
