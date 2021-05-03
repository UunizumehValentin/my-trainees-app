const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/connectDB");
const studentsRoute = require("./routes/studentsRoute");
const usersRoute = require("./routes/usersRoute");
const cors = require("cors");
const { urlencoded } = require("express");

dotenv.config();

const app = express();

connectDB();

//middlewares
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

//routes
app.use("/api/v2/students", studentsRoute);
app.use("/api/v2/users", usersRoute);

//home route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to my students exeat API <h1>");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
