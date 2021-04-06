const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = mongoose.Schema({

    userId: {
        type: Schema.Types.ObjectId,
        ref:'User'
    },

    movieId: {
        type: Schema.Types.ObjectId,
        ref: 'Movie'
    }
}, {timestamps: true})

const Like = mongoose.model('Like', likeSchema);

module.exports = { Like }