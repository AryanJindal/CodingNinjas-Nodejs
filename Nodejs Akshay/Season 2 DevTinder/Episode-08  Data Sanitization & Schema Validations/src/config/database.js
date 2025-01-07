const mongoose = require("mongoose");

require("dotenv").config();

const connectDb = async () => {
  // mongoose returns a promise, therefore we can use async/await
  // the string is in the following format: mongodb+srv://<username>:<password>@<cluster>/<database>
  await mongoose.connect(
    `mongodb+srv://DevTinderAdmin:${process.env.MongoDBPassword}@nodejs-devtinder.17me2.mongodb.net/devTinder`
  );
};

module.exports = connectDb;

  