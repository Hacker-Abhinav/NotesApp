const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Note = require('../model/notemodel');
router.get('/get', (req, res) => {
  Note.find()
    .then(notes => {
      res.send(notes);
    })
    .catch(err => console.log(err));
});

router.get('/get/:id', (req, res) => {
  const id = req.params.id;
  Note.findById(id)
    .then(notes => {
      res.send(notes);
    })
    .catch(err => console.log(err));
});

router.post('/post', (req, res) => {
  const note = new Note({ title: req.body.title, content: req.body.content });
  return note
    .save()
    .then(result => {
      console.log('Note is Created');
      return res.send(result);
    })
    .catch(err => console.log(err));
});

module.exports = router;
