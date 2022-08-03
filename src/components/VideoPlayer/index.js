import React, {useRef, useCallback, useState} from 'react';
import ReactPlayer from 'react-player';
import Controls from './controls.jsx';
import video from '../../../asset/resource/sky.mov';

const VideoPlayer = () => {
    const videoRef = useRef(null);
    const [play, setPlay] = useState(false);
    const [isMuted, setMute] = useState(false);
    const [isLoop, setLoop] = useState(false);
    const [progress, setProgress] = useState(0);
    const handlePlay = useCallback(() => setPlay((play) => !play), []);
    const handleForwardVideo = useCallback(() => {
        videoRef.current.seekTo(videoRef.current.getCurrentTime() + 5);
    }, []);
    const handleBackwardVideo = useCallback(() => {
        videoRef.current.seekTo(videoRef.current.getCurrentTime() - 5);
    }, []);
    const handleMute = useCallback(() => setMute((isMuted) => !isMuted), []);
    const handleLoop = useCallback(() => setLoop((isLoop) => !isLoop), []);
    const handleProgress = useCallback(({played}) => {
        setProgress(played);
    }, []);
    return (
        <div className="bg-slate-700 p-8">
            <div className="bg-black aspect-video relative overflow-hidden">
                <ReactPlayer
                    playing={play}
                    ref={videoRef}
                    url={video}
                    muted={isMuted}
                    loop={isLoop}
                    width="100%"
                    height="100%"
                    fallback={<div>Loading</div>}
                    onProgress={handleProgress}
                />
                <Controls
                    onPlay={handlePlay}
                    play={play}
                    onForward={handleForwardVideo}
                    onBackward={handleBackwardVideo}
                    isMuted={isMuted}
                    isLoop={isLoop}
                    onMute={handleMute}
                    onLoop={handleLoop}
                    progress={progress}
                />
            </div>
        </div>
    );
};

export default VideoPlayer;
