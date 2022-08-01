import React, {useRef, useCallback, useState} from 'react';
import ReactPlayer from 'react-player';
import Controls from './controls.jsx';
import video from '../../../asset/resource/sky.mov';

const VideoPlayer = () => {
    const videoRef = useRef(null);
    const [play, setPlay] = useState(false);
    const handlePlay = useCallback(() => setPlay((play) => !play), []);
    return (
        <div className="bg-slate-700 p-8">
            <div className="bg-black aspect-video relative overflow-hidden">
                <ReactPlayer
                    playing={play}
                    ref={videoRef}
                    url={video}
                    width="100%"
                    height="100%"
                    fallback={<div>Loading</div>}
                />
                <Controls onPlay={handlePlay} play={play} />
            </div>
        </div>
    );
};

export default VideoPlayer;
