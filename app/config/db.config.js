module.exports = {
  //url: "mongodb://0.0.0.0:27017/bezkoder_db"
  url: process.env.MONGO_URI || "mongodb://127.0.0.1:27017/bezkoder_db"
};
