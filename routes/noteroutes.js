const express= require('express');
const router= express.Router();
const mongoose=require('mongoose');
const Note= require('../model/notemodel');


router.get("/get", async(req, res, next) => {
    try{
      const notes= await Note.find();
      res.json(notes);
    } catch(err) {
      res.json( {message:err});
    }
});


router.post("/post", async(req, res, next) => {
    const note = new Note({
      title : req.body.title,
      content: req.body.content
    });
    try {
      savedNote= await note.save();
      res.json(savedNote);
    } catch(err) {
      res.status(404).json({
        message: err
      });
  }
});
    

module.exports= router;