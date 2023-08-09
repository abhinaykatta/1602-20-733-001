const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const router = require("./routes/backtrain");
dotenv.config();

const app = express();

const PORT = 5000;

// app.get("/", (req, res) => {
//   res.status(200).send("<h1>Hello World</h1>");
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

app.listen(PORT, console.log(`Server is Listening on PORT ${PORT}`));
