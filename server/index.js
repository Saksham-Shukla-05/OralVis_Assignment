const express = require("express");
const app = express();
const dotenv = require("dotenv");

const authRoute = require("./routes/auth");
dotenv.config();

const PORT = process.env.PORT || 4000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is up");
});

app.use("/auth", authRoute);

app.listen(PORT, () => {
  console.log(`App is live at http://localhost:${PORT}`);
});
