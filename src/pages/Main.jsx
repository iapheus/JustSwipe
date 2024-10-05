import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAfterApi, fetchApi, selectApiData } from '../redux/api/apiSlice';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageComp from '../components/ImageComp';
import VideoComp from '../components/VideoComp';
import Fab from '@mui/material/Fab';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export function Main() {
  const dispatch = useDispatch();
  const data = useSelector(selectApiData);
  const status = useSelector(state => state.api.status);
  let column = useSelector(state => state.theme.columnCount);
  const afterCode = useSelector(state => state.api.afterCode);

  useEffect(() => {
    dispatch(fetchApi("pics","hot"));
  }, [dispatch]);

  return (
    <div>
      <h1 className='underline text-lg mt-2 ml-2'>r/pics</h1>
      <Box sx={{marginTop:'10px'}}>
        <ImageList variant="masonry" cols={column} gap={8}>
        {status === 'succeeded' && data.children.map((item) => (
            item.type === "image" ? <ImageComp key={Math.random() * 100} item={item.url} /> : <VideoComp  key={Math.random() * 100} item={item.url} />
          ))}
        </ImageList>
      </Box>
      <Box sx={{ position: 'fixed', bottom: '125px', right: '24px'}}>
        <Fab onClick={() => dispatch(fetchAfterApi({ subreddit: "pics", sort: "hot", payload: afterCode }))} color="success">
          <ArrowForwardIcon />
        </Fab>
      </Box>
    </div>
  );
}

export default Main;
