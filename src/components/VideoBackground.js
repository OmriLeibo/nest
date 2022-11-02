import React from 'react';
import './VideoBackground.scss';

const VideoBackground = () => {
  return (
    <>
    {/* <div className='curtain'></div> */}
    <div className="video_container">
        <video width="100%" loop autoPlay muted id='video-bg'>
            <source src={require('../POXT insta teaser 3.mp4')} type='video/mp4' />
        </video>
    </div>
    </>
  )
}

export default VideoBackground;