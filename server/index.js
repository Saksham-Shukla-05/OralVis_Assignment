const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 4000;
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Server up",
  });
});

app.listen(PORT, (req, res) => {
  console.log(`App is live at http://localhost:${PORT}`);
});
