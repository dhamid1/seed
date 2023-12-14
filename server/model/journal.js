import mongoose from 'mongoose';

const journalSchema = new mongoose.Schema({
  title: String,
  content: String,
  timestamp: String,
});

const Journal = mongoose.model('Journal', journalSchema);

export default Journal;
