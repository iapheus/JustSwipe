import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {fetchSearchResults} from '../redux/api/apiSlice';
import { useSelector, useDispatch } from 'react-redux';
import SubredditComp from '../components/SubredditComp'

function Search() {
  const dispatch = useDispatch();
  const[subreddit,setSubreddit] = React.useState('');
  const searchResult = useSelector(state => state.api.searchResult);
  console.log(searchResult)
  React.useEffect(() => {
    dispatch(fetchSearchResults({subreddit:subreddit}));
  },[subreddit]);

  return (
    <div className="flex justify-center items-center flex-col ">
      <Box>
        <div className='text-center'>
          <TextField value={subreddit} onChange={(e) => setSubreddit(e.target.value)} sx={{marginRight:'10px'}} id="standard-basic" label="Subreddit" variant="standard" />
          <Button sx={{ mt: 2 }} variant="outlined">Search it!</Button>
        </div>
        <div className='mx-4 mt-3 lg:mt-5'>
          <h1>If you're confident you've entered the correct subreddit name but aren't seeing any results</h1>
          <h1 className='lg:mx-32'>try clicking the search button to force a search!</h1>
        </div>
      </Box>
      <hr className='mt-5 h-2 w-full bg-white'></hr>
      <div className='flex flex-wrap justify-center mt-5'>
        {
          searchResult !== null && searchResult.map((item) => {
            return <SubredditComp 
                    key={Math.random() * 100}
                    icon={item.data.community_icon.substring(0, item.data.community_icon.lastIndexOf('.png') + 4)}
                    name={item.data.display_name_prefixed}
                    nsfw={item.data.over18} />
          })
        }
      </div>
    </div>
  )
}

export default Search