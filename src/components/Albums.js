import React from 'react';
import Spotify from '../api/Spotify.tsx';
import './Albums.scss';

const Albums = () => {
  const NEST_LURK_ALBUM =
    'https://open.spotify.com/album/2OGWGEkVeDkNK6ZGMO7d0V?si=pXSD4jeRTw6-8XV2-Rlwvg';
  return (
    <div className='albums'>
      <div className='events__main'>
        <Spotify link={NEST_LURK_ALBUM} />
      </div>
    </div>
  );
};



// Shaoneez check for props on the /api/spotify.tsx

export default Albums;
