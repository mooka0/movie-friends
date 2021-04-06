const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const { Favorite } = require("../models/User");
=======
const { Favorite } = require("../models/Favorite");
>>>>>>> 0cf989f70b9d06ed416623a9f9db15d0f22ca21c

const { auth } = require("../middleware/auth");

//=================================
//             Favorite
//=================================


<<<<<<< HEAD

router.post("/favoriteNumber", auth, (req, res) => {
    // find favorite info inside of favorrite collection by movieid

    Favorite.find({"movieId": req.body.movieId })
    .exec(( err, favorite) => {
        if(err) return res.status(400).send(err)
        res.status(200).json({ success: true, favoriteNumber: favorite.length})
    })
});

router.post("/favorited", auth, (req, res) => {
// find favorite info inside favorite collection by movie id, user from   
Favorite.find({"movieId": req.body.movieId, "userFrom": req.body.userFrom })
    .exec(( err, favorite) => {
        if(err) return res.status(400).send(err)

        //How can we know if i ALREADY favorite this movie

        let result = false;
        if (favorite.length !== 0) {
            result = true
        }

        res.status(200).json({ success: true, favorited: result });
    })


});


module.exports = router;
=======
router.post("/favoriteNumber", auth, (req, res) => {
    //Find Favorite Information inside Favorite Collection by Movie ID

    Favorite.find({"movieId": req.body.movieId})
    .exec((err, favorite ) => {
        if(err) return res.status(400).send(err)
        res.status(200).json({ success: true, favoriteNumber: favorite.length})
    }
    )
 
});

router.post("/favorited", auth, (req, res) => {
    // Find Favorite Information inside Favorite Collection by Movie Id, userFrom 
    Favorite.find({"movieId": req.body.movieId, "userFrom": req.body.userFrom})
    .exec((err, favorite) => {
        if(err) return res.status(400).send(err)
        //Already favorited movie??
        let result = false;
        if(favorite.length !== 0) {
            result = true
        }

        res.status(200).json({ success: true, favorited: result});
    
    })
 
});


router.post("/addToFavorite", auth, (req, res) => {

// Save the information about the movie or user Id inside favorite collection
    
    const favorite = new Favorite(req.body)
    favorite.save((err, doc) => { 
        if(err) return res.json({ success: false, err })
        return res.status(200).json({ success: true })
    })

});

router.post("/removeFromFavorite", auth, (req, res) => {

    Favorite.findOneAndDelete({ movieId: req.body.movieId, userFrom: req.body.userFrom})
    .exec((err, doc) => {
        if(err) return res.status(400).json({ success: false, err})
        res.status(200).json({ success: true, doc})
    })
    
    });


    router.post("/getFavoritedMovie", (req, res) => {

        Favorite.find({ 'userFrom': req.body.userFrom})
        .exec((err, favorites) => {
            if(err) return res.status(400).send(err);
            return res.status(200).json({ success: true, favorites})
        })
        
        });

module.exports = router;
>>>>>>> 0cf989f70b9d06ed416623a9f9db15d0f22ca21c
