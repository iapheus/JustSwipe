import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAfterApi, fetchApi, selectApiData } from '../redux/api/apiSlice';
import ImageList from '@mui/material/ImageList';
import ImageComp from '../components/ImageComp';
import VideoComp from '../components/VideoComp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Page() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(selectApiData);
  const status = useSelector(state => state.api.status);
  let column = useSelector(state => state.theme.columnCount);
  const afterCode = useSelector(state => state.api.afterCode);
  const[sort,setSort] = useState('hot');

  const handleSort = () => {
    sort == 'hot' ? setSort('top') : setSort('hot');
    console.log(sort);
  }

  useEffect(() => {
    dispatch(fetchApi({subreddit:name,sort:sort}));
  }, [sort]);

  return (
    <div>
      <div>
        <h1 className='underline text-lg mt-2 ml-2'>r/{name}</h1>
        <Box sx={{marginTop:'10px'}}>
          <ImageList variant="masonry" cols={column} gap={8}>
          {status === 'succeeded' && data.children.map((item) => (
              item.type === "image" ? <ImageComp key={Math.random() * 100} item={item.url} /> : <VideoComp  key={Math.random() * 100} item={item.url} />
            ))}
          </ImageList>
        </Box>
        <Box sx={{ position: 'fixed', bottom: '125px', left: '24px'}}>
          <Fab onClick={() => handleSort()} color="primary">
            <ChangeCircleIcon/>
          </Fab>
        </Box>
        <Box sx={{ position: 'fixed', bottom: '125px', right: '24px'}}>
        <Fab onClick={() => dispatch(fetchAfterApi({ subreddit: name, sort: sort, payload: afterCode }))} color="success">
          <ArrowForwardIcon />
        </Fab>
      </Box>
      </div>
    </div>
  )
}

export default Page