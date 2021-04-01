const express = require('express');
const router = express.Router();
const { Favorite } = require("../models/User");

const { auth } = require("../middleware/auth");

//=================================
//             Favorite
//=================================



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