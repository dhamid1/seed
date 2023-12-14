import Journal from '../model/journal.js';

// Controller function to add a new journal entry
export const addEntry = async (req, res) => {
  try {
    const { title, content, timestamp } = req.body;

    const newEntry = new Journal({ title, content, timestamp });

    await newEntry.save();

    res.status(201).json(newEntry);
  } catch (error) {
    console.error('Error adding entry:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller function to get all journal entries
export const getEntries = async (req, res) => {
  try {
    const entries = await Journal.find();

    res.status(200).json(entries);
  } catch (error) {
    console.error('Error getting entries:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateEntry = async (req, res) => {
    try {
      const { _id, title, content, timestamp } = req.body;
  
      const updatedEntry = await Journal.findByIdAndUpdate(
        _id,
        { title, content, timestamp },
        { new: true }
      );
  
      if (!updatedEntry) {
        return res.status(404).json({ message: 'Entry not found' });
      }
  
      res.status(200).json(updatedEntry);
    } catch (error) {
      console.error('Error updating entry:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  // Controller function to delete a journal entry
export const deleteEntry = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedEntry = await Journal.findByIdAndRemove(id);

    if (!deletedEntry) {
      return res.status(404).json({ message: 'Entry not found' });
    }

    res.status(200).json({ message: 'Entry deleted successfully' });
  } catch (error) {
    console.error('Error deleting entry:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
