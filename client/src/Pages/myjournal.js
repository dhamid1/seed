import React, { useState } from 'react';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
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

  return (
    <div style={containerStyle}>
      <h2>Journals</h2>
      <div>
        <textarea
          type="text"
          placeholder="Journal Title"
          value={journalEntry.title}
          onChange={handleTitleChange}
        />
        <textarea
          placeholder="Write your journal entry..."
          value={journalEntry.content}
          onChange={handleJournalEntryChange}
        />
        <button onClick={handleAddEntry}>Add Entry</button>
      </div>
      <div>
        <button onClick={() => setShowOldEntries(!showOldEntries)}>
          {showOldEntries ? 'Hide Old Entries' : 'Show Old Entries'}
        </button>
      </div>
      {showOldEntries && (
        <div>
          <h3>Old Entries</h3>
          {entries.map((entry, index) => (
            <div key={index} className="journal-entry">
              {editIndex === index ? (
                <div>
                  <input
                    type="text"
                    value={editedEntry.title}
                    onChange={(e) => setEditedEntry({ ...editedEntry, title: e.target.value })}
                  />
                  <textarea
                    value={editedEntry.content}
                    onChange={(e) => setEditedEntry({ ...editedEntry, content: e.target.value })}
                  />
                  <button onClick={() => handleSaveEdit(index)}>Save</button>
                </div>
              ) : (
                <div>
                  <h4>{entry.title}</h4>
                  {entry.content}
                  <p>{entry.timestamp}</p>
                  <button onClick={() => handleEdit(index, entry)}>Edit</button>
                  <button onClick={() => handleShare(entry)}>Share</button> {/* Add this line */}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
