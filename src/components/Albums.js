import React from 'react';
import Spotify from '../api/Spotify.tsx';

// Shaoneez check for props on the /api/spotify.tsx

const NEST_LURK_ALBUM = 'https://open.spotify.com/album/2OGWGEkVeDkNK6ZGMO7d0V?si=pXSD4jeRTw6-8XV2-Rlwvg';

const Albums = () => {
  return (
    <div className='events__main'>
      <Spotify link={NEST_LURK_ALBUM} />
    </div>
  );
};

export default Albums;
