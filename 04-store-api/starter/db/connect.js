const mongoose = require("mongoose");

const connectDB = (url) => {
	return mongoose.connect(url, {
		dbName: "04-STORE-API",
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
};

module.exports = connectDB;
