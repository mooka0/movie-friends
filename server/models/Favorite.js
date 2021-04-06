const mongoose = require('mongoose');
const Schema = mongoose.Schema;
<<<<<<< HEAD
const favoriteSchema = mongoose.Schema({

userFrom: {
    type: Schema.Types.objectId,
    ref: 'User'

},
movieId : {
    type:String
},
movieTitle: {
    type:String
},
movieImage: {
    type:String
},
movieRunTime: {
    type:String
}


})

=======


const favoriteSchema = mongoose.Schema({
    userFrom: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    movieId: {
        type: String
    },
    movieTitle: {
        type: String
    },
    movieImage: {
        type: String
    },
    movieRunTime: {
        type: String
    }

})




>>>>>>> 0cf989f70b9d06ed416623a9f9db15d0f22ca21c
const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = { Favorite }