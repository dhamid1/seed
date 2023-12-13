import React, { useState } from 'react';

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
  marginLeft: '10px',
  padding: '10px',
  background: '#464552',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
};

const entryBoxStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  marginBottom: '10px',
  width: '100%',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
  overflow: 'hidden',
  background: 'white', // Set the background color to rgb(205, 118, 25)
  color: 'black', // Set text color to black
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
      setEntries([...entries, journalEntry]);
      setJournalEntry({ title: '', content: '', timestamp: '' });
    }
  };

  const handleEdit = (index, entry) => {
    setEditIndex(index);
    setEditedEntry({ ...entry });
  };

  const handleSaveEdit = (index) => {
    const updatedEntries = [...entries];
    updatedEntries[index] = editedEntry;
    setEntries(updatedEntries);
    setEditIndex(-1);
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
                    <button style={buttonStyle} onClick={() => handleEdit(index, entry)}>Edit</button>
                    <button style={buttonStyle} onClick={() => handleShare(entry)}>Share</button>
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
