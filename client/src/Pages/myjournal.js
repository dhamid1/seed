import React, { useState, useEffect} from 'react';
import axios from 'axios';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '80vh',
  background: '#fc975f', // Gradient background
};

const inputContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '10px',
  width: '100%',
  maxWidth: '80%',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  background: 'white', // Set the background color to rgb(205, 118, 25)
  color: 'black', // Set text color to black
};

const buttonContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '80%',
};

const buttonStyle = {
  borderRadius: '20px', // Make the button oval
  padding: '10px', // Adjust padding for a more balanced look
  margin: '5px', // Add some margin between buttons
  background: '#d08447', // Background color a bit darker than the page background
  color: 'white', // Text color
  border: 'none', // Remove default button border
  cursor: 'pointer',
  transition: 'background 0.1s ', // Add transition for a fade effect on hover
  // Add hover effect
  ':hover': {
    background: '#f68847', // Darken the background color on hover
  },
};

const ovalButtonStyle = {
  borderRadius: '20px', // Make the button oval
  padding: '10px', // Adjust padding for a more balanced look
  margin: '5px', // Add some margin between buttons
  marginLeft: '50px',
  background: '#d08447', // Background color a bit darker than the page background
  color: 'white', // Text color
  border: 'none', // Remove default button border
  cursor: 'pointer',
  transition: 'background 0.3s ease-in-out', // Add transition for a fade effect on hover

  // Add hover effect
  ':hover': {
    background: '#6d5e5e', // Darken the background color on hover
  },

};

const entryBoxStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  marginBottom: '10px',
  width: '100%',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
  overflow: 'hidden',
  background: '#d08447', // Set the background color to rgb(205, 118, 25)
  color: 'black', // Set text color to black
  textAlign: 'center',
  borderRadius: '75px',
};

const entryBoxContainerStyle = {
  width: '100%',
  maxWidth: '600px',
  marginBottom:'155px',
};

const entryContentStyle = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  padding: '0 20px',
};

export const Myjournal = () => {
  const [journalEntry, setJournalEntry] = useState({ title: '', content: '', timestamp: '' });
  const [entries, setEntries] = useState([]);
  const [showOldEntries, setShowOldEntries] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const [editedEntry, setEditedEntry] = useState({ title: '', content: '', timestamp: '' });

  useEffect(() => {
    // Fetch entries when component mounts
    getJournalEntries();
  }, []);

  const handleJournalEntryChange = (e) => {
    setJournalEntry({ ...journalEntry, content: e.target.value });
  };

  const handleTitleChange = (e) => {
    setJournalEntry({ ...journalEntry, title: e.target.value });
  };


  const handleAddEntry = () => {
    if (journalEntry.content) {
      const timestamp = new Date().toLocaleString();
      setJournalEntry({ ...journalEntry, timestamp });

      // Send a request to add a new entry
      axios.post('/api/addEntry', journalEntry)
        .then(response => {
          setEntries([...entries, response.data]);
          setJournalEntry({ title: '', content: '', timestamp: '' });
        })
        .catch(error => console.error('Error adding entry:', error));
    }
  };

  const handleEdit = (index, entry) => {
    setEditIndex(index);
    setEditedEntry({ ...entry });
  };

  const handleSaveEdit = (index) => {
    const updatedEntries = [...entries];
    updatedEntries[index] = editedEntry;

    // Send a request to update the entry
    axios.post('/api/updateEntry', editedEntry)
      .then(response => {
        setEntries(updatedEntries);
        setEditIndex(-1);
      })
      .catch(error => console.error('Error updating entry:', error));
  };

  const handleShare = (entry) => {
    if (navigator.share) {
      navigator.share({
        title: entry.title,
        text: entry.content,
        url: window.location.href,
      })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Share failed:', error));
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };

  const truncateText = (text, maxCharacters) => {
    if (text.length <= maxCharacters) return text;
    const sentenceEnd = text.indexOf('.', maxCharacters);
    if (sentenceEnd !== -1) {
      return text.substring(0, sentenceEnd + 1) + '...';
    }
    return text.substring(0, maxCharacters) + '...';
  };


  const getJournalEntries = () => {
    // Fetch all entries from the server
    axios.get('/api/getEntries')
      .then(response => setEntries(response.data))
      .catch(error => console.error('Error getting entries:', error));
  };

  const handleDelete = (id) => {
    // Send a request to delete the entry
    axios.delete(`/api/deleteEntry/${id}`)
      .then(response => {
        // Remove the deleted entry from the state
        setEntries(entries.filter(entry => entry._id !== id));
      })
      .catch(error => console.error('Error deleting entry:', error));
  };



  return (
    <div style={containerStyle}>
      <h2 style={{ color: 'white' }}>Journals</h2>
      <div style={inputContainerStyle}>
        <textarea
          style={inputStyle}
          type="text"
          placeholder="Journal Title"
          value={journalEntry.title}
          onChange={handleTitleChange}
        />
      </div>
      <div style={inputContainerStyle}>
        <textarea
          style={inputStyle}
          placeholder="Write your journal entry..."
          value={journalEntry.content}
          onChange={handleJournalEntryChange}
        />
      </div>
      <div style={buttonContainerStyle}>
        <button style={buttonStyle} onClick={handleAddEntry}>Add Entry</button>
        <button style={buttonStyle} onClick={() => setShowOldEntries(!showOldEntries)}>
          {showOldEntries ? 'Hide Old Entries' : 'Show Old Entries'}
        </button>
      </div>
      {showOldEntries && (
        <div style={entryBoxContainerStyle}>
          <h3 style={{ color: 'white' }}>Old Entries</h3>
          {entries.map((entry, index) => (
            <div key={index} style={entryBoxStyle}>
              {editIndex === index ? (
                <div>
                  <input
                    type="text"
                    value={editedEntry.title}
                    onChange={(e) => setEditedEntry({ ...editedEntry, title: e.target.value })}
                  />
                  <textarea
                    style={inputStyle}
                    value={editedEntry.content}
                    onChange={(e) => setEditedEntry({ ...editedEntry, content: e.target.value })}
                  />
                  <div style={buttonContainerStyle}>
                    <button style={buttonStyle} onClick={() => handleSaveEdit(index)}>Save</button>
                  </div>
                </div>
              ) : (
                <div>
                  <h4>{entry.title}</h4>
                  <p style={entryContentStyle}>{truncateText(entry.content, 100)}</p>
                  <p>{entry.timestamp}</p>
                  <div style={buttonContainerStyle}>
                    <button style={ovalButtonStyle} onClick={() => handleEdit(index, entry)}>Edit</button>
                    <i className="fas fa-edit"></i>
                    <button style={ovalButtonStyle} onClick={() => handleShare(entry)}>Share</button>
                    <i className="fas fa-share"></i>
                    <button style={ovalButtonStyle} onClick={() => handleDelete(entry._id)}>Delete</button>
                    <i className="fas fa-trash"></i>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
