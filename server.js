const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/connectDB");
const studentsRoute = require("./routes/studentsRoute");
const usersRoute = require("./routes/usersRoute");
const cors = require("cors");

dotenv.config();

const app = express();

// connection
connectDB();

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// routes
app.use("/api/v1/students", studentsRoute);
app.use("/api/v1/users", usersRoute);

// home route
app.get("/", (req, res) => {
  res.send("<h1>welcome to our students API</h1>");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
