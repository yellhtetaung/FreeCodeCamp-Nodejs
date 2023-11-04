const express = require("express");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();

const tasks = require("./routes/tasks");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1/tasks", tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);

// app.get("/api/v1/tasks"); - get all the tasks
// app.post("api/v1/tasks"); - create a new task
// app.get("api/v1/tasks/:id") - get single task
// app.put("api/v1/tasks/:id") - update task
// app.delete("api/v1/tasks/:id") - delete task

const port = 3000;

const start = async () => {
	try {
		await connectDB(process.env.MONGODB_URI);
		app.listen(port, console.log(`Server is listening on port ${port}`));
	} catch (error) {
		console.log(error);
	}
};

start();
