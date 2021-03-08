const mongoose = require("mongoose");

const notesSchema = {
  username: String,
  email: String,
  phone: String,
  address: String,
};

const Note = mongoose.model("Note", notesSchema);

module.exports = Note;
