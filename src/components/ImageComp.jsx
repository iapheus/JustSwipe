import React from 'react'
import ImageListItem from '@mui/material/ImageListItem';

function ImageComp(props) {
  return (
    <ImageListItem key={Math.random() * 100}>
    <img
    //   srcSet={`${props.item.data.url_overridden_by_dest}`}
      src={`${props.item}`}
      loading="lazy"
    />
  </ImageListItem>
  )
}

export default ImageComp