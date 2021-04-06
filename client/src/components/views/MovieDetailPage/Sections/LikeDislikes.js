import React, { useEffect, useState }from 'react'
import { Tooltip, Icon } from 'antd';
import Axios from 'axios';


function LikeDislikes(props) {

const [Likes, setLikes] = useState(0)
const [likeAction, setLikeAction] = useState(null)
const [Dislikes, setDislikes] = useState(0)
const [DislikeAction, setDislikeAction] = useState(null)

let variable = {};

if(props.movie) {
    variable = { movieId: props.movieId, userId: props.userId}
}

useEffect (() => {

    Axios.post('/api/like/getlikes', variable)
    .then(response => {
    if(response.data.success) {
        //how many likes movie has
        setLikes(response.data.likes.length)


//if i clicked like or not
response.data.likes.map(like => {
    if(like.userId === props.userId) {
        setLikeAction('liked')
    }
})

    } else {
        alert('Failed to get likes')
    }
}) 
Axios.post('/api/like/getDislikes', variable)
.then(response => {
if(response.data.success) {
    //how many likes movie has
    setDislikes(response.data.likes.length)


//if i clicked like or not
response.data.Dislikes.map(Dislike => {
if(Dislike.userId === props.userId) {
    setDislikeAction('Disliked')
}
})

} else {
    alert('Failed to get Dislikes')
}
}) 
}, [])

    return(
        <React.Fragment>
            <Tooltip title="Like">
                <Icon type="like"
                theme={likeAction === 'liked' ? 'filled' : 'outlined'}

                onClick />
                 <span style={{ paddingLeft: '8px', cursor: 'auto'}}>{Likes}</span>
            </Tooltip>

        <Tooltip title="Dislike">
        <Icon 
            type="dislike"
            theme={DislikeAction == 'disliked' ? 'filled' : 'outlined'}
            onClick />

        </Tooltip>
    <span style={{ paddingLeft: '8px', cursor: 'auto'}}>{Dislikes}</span>
        </React.Fragment>
    )
}

export default LikeDislikes