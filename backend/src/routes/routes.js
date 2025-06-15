import express from 'express';
import Note from "../models/Note.js"
const router = express.Router();

router.get('/', async (_, res) => {
  try {
    const notes = await Note.find().sort({createdAt: -1}); // newest note first
    res.status(200).send(notes);
  } catch (err) {
    console.error("Error in retrieving notes");
    res.status(500).json({'message': "Internal Server Error"})
  }
})

router.get('/:id', async (req, res) => {
  try {
    const note = await Note.findById(req.params.id)
    if(!note) return res.status(400).json({'message': "Note not found"})
    res.status(200).json(note)
  } catch (error) {
    console.error("Error in retrieving note");
    res.status(500).json({'message': "Internal Server Error"})
  }
})

router.post('/', async (req, res) => {
  try {
    const {title, content} = req.body;
    const newNote = new Note({title, content})
    const savedNote = await newNote.save();
    res.status(201).json(savedNote)
  } catch (err) {
    console.error("Error creating note");
    res.status(500).json({'message': "Internal server error"})
  }
})

router.put('/:id', async (req, res) => {
  try {
    const {title, content} = req.body;
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content}, { new: true })
    if(!updatedNote) return res.status(404).json({'message': "Note not found"})
    res.status(200).json(updatedNote)
  } catch (err) {
    console.error("Error updating note");
    res.status(500).json({'message': "Internal server error"})
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id)
    if(!deletedNote) return res.status(404).json({'message': "Note not found"})
    res.status(200).json({'message': 'Note deleted successfully'})
  } catch (error) {
    console.error("Error deleting note");
    res.status(500).json({'message': "Internal server error"})
  }
})

export default router;