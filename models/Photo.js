const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'User',
    },
    url: String,
    plant_name: Array,
    latdec: Number,
    longdec: Number,
    name: String,
    user: String,
    tags: Array,
    user: String,
    date_created: { type: Date, default: Date.now },
});

const Photo = mongoose.model('Photos', photoSchema);

module.exports = Photo;
