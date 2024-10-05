import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function BadgeAvatars(props) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/${props.name}`)} className='text-center border-2 border-white rounded-lg p-3 group cursor-pointer hover:bg-mui-grey'>
      <Stack className='flex flex-col' direction="column" alignItems="center" spacing={2}>
          <Avatar alt="Remy Sharp" src={props.icon} />
        <div>
          <h1 className='text-lg'>{props.name}</h1>
          {props.nsfw && <h1 className='text-md text-mui-red'>NSFW</h1>}
        </div>
      </Stack>
    </div>
  );
}
    