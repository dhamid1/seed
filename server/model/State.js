const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
    state: Number,
    timestamp: { type: Date, default: Date.now }
});

const State = mongoose.model('State', stateSchema);

module.exports = State;