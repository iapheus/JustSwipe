import React from 'react'
import CardMedia from '@mui/material/CardMedia';

function VideoComp(props) {
  return (
    <CardMedia>
        <video autoPlay controls src={props.item}>
        </video>
        </CardMedia>
  )
}

export default VideoComp