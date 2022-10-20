import React from 'react';
import './Albums.scss';


const Albums = () => {
  return (
    <div className='albums'>
      <h1>Albums</h1>

      <a href='https://open.spotify.com/album/2OGWGEkVeDkNK6ZGMO7d0V?si=TKdIcRMSRx-ZJzJpJ04ngQ' target='_blank'>
        <img
          src='https://i.scdn.co/image/ab67616d0000b27376eafa0fc8297dd85cca65ce'
          width='25%'
          alt='nest-logo'
        />
      </a>
    </div>
  );
};

export default Albums;
