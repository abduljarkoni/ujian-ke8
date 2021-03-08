const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

//koneksi ke mongoose
mongoose.connect(
  "mongodb+srv://jarkoni:jarkoni123@cluster0.kfxdh.mongodb.net/notesDB"
);

//require route
app.use("/", require("./routes/noteRoute"));

app.listen(3001, function () {
  console.log("express server berjalan di port 3001");
});
