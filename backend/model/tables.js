const mongoose = require('mongoose');

const tableSchema = mongoose.Schema({
    name: {type: String, required: true},
    regno: {type: String, required: true},
    age: {type: Number, required: true},
    bdate: {type: String, required: true},
    marks: {type: Number, required: true},
    class: {type: Number, required: true},
    section: {type: String, required: true}
});

module.exports = mongoose.model('table', tableSchema);