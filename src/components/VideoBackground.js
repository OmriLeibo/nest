import React from 'react';

const VideoBackground = () => {
  return (
    <div>
        <video loop autoPlay muted id='video-bg'>
            <source src={require('../POXT insta teaser 3.mp4')} type='video/mp4' />
        </video>
    </div>
  )
}

export default VideoBackground;