const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    registration: {
        type: Date,
        default: Date.now
    },
    category: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "Category"
    }
});

module.exports = mongoose.model('Product', productSchema)