<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import { Props } from 'antd/lib/transfer/renderListBody';


function Favorite(props) {



const [FavoriteNumber, setFavoriteNumber] = useState(0)

const [Favorited, setFavorited] = useState(false)


    useEffect(() => {
const variable = {
    userFrom: props.userFrom,
    movieId: props.movieId,
    movieTitle: props.movieInfo.original_title,
    movieImage: props.movieInfo.backdrop_path,
    movieRunTime: props.movieInfo.runtime,
}

        axios.post('/api/favorite/favoriteNumber', variable)
        .then(response => {
            if(response.data.success) {
                setFavoriteNumber(response.data.favoriteNumber)
            } else {
                alert('Failed to get favoriteNumber')
=======
import axios from 'axios'
import { set } from 'mongoose'
// import { addListener } from 'nodemon'
import React, { useEffect, useState } from 'react'

function Favorite(props) {
    
    const [FavoriteNumber, setFavoriteNumber] = useState(0)
    const [Favorited, setFavorited] = useState(false)

    const variable = {
        userFrom: props.userFrom,
        movieId: props.movieId,
        movieTitle: props.movieInfo.original_title, 
        movieImage: props.movieInfo.backdrop_path,
        movieRunTime: props.movieInfo.runtime

    }

    useEffect(() => {

    

        axios.post('/api/favorite/favoriteNumber', variable)
        .then(response => {
            if(response.data.succes) {
                setFavoriteNumber(response.data.favoriteNumber)

            } else { 
                // alert('Failed to get favoriteNumber')
>>>>>>> develop
            }
        })

        axios.post('/api/favorite/favorited', variable)
<<<<<<< HEAD
        .then (response => {
            if(response.data.success) {
                    setFavorited(response.data.favorited)
=======
        .then(response => {
            if(response.data.success) {
                setFavorited(response.data.favorited)
>>>>>>> develop
            } else {
                alert('Failed to get Favorite Info')
            }
        })

<<<<<<< HEAD
    }, [])

    return (
        <div>
  <button> {Favorited ? "remove from Favorite" : "Add to Favorite"} {FavoriteNumber} </button>
=======
        
    }, [])



    const onClickFavorite = () => {
        if(Favorited) {
            // When added already
            axios.post('/api/favorite/removeFromFavorite', variable)
            .then(response => {
            if (response.data.success) {
                setFavoriteNumber(FavoriteNumber - 1 )
                setFavorited(!Favorited)
            } else {
                alert('Failed to remove from favorites')
            }
        })

        } else {
            // When not added yet
            axios.post('/api/favorite/addToFavorite', variable)
            .then(response => {
                if (response.data.success) {
                setFavoriteNumber(FavoriteNumber + 1 )
                setFavorited(!Favorited)
            } else {
                alert('Failed to add to Favorites')
            }
        })
    }
}


    return (
        <div>
              <button onClick={onClickFavorite}> {Favorited ? "remove from Favorite" : "Add to Favorite"} {FavoriteNumber}</button>
>>>>>>> develop
        </div>
    )
}

export default Favorite