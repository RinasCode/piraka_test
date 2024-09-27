const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.use(userRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
