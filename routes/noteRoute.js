const express = require("express");
const router = express.Router();
const Note = require("../models/noteModel");

//hubung kan ke createnote.js dengan / link create nya
router.route("/create").post((req, res) => {
  // fungsi crate ke frontend
  const username = req.body.username;
  const email = req.body.email;
  const phone = req.body.phone;
  const address = req.body.address;

  const newNote = new Note({
    title,
    content,
  });

  newNote.save();
});

router.route("/notes").get((req, res) => {
  Note.find().then((foundNotes) => res.json(foundNotes));
});

module.exports = router;
