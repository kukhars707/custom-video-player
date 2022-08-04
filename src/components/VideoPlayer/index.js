import React, {useRef, useCallback, useState, useEffect} from 'react';
import ReactPlayer from 'react-player';
import Controls from './controls.jsx';
import video from '../../../asset/resource/sky.mov';
import screenfull from 'screenfull';

const VideoPlayer = () => {
    const videoRef = useRef(null);
    const timer = useRef(null);
    const container = useRef(null);
    const fullScreen = useRef(null);
    const [play, setPlay] = useState(false);
    const [isMuted, setMute] = useState(false);
    const [isLoop, setLoop] = useState(false);
    const [progress, setProgress] = useState(0);
    const [showCongrols, setShowControls] = useState(true);
    const [isCustomLoop, setCustomLoop] = useState(false);
    const [loopRange, setLoopRange] = useState({
        start: null,
        end: null,
    });
    const [loopRangeChangeValue, setLoopRangeChangeValue] = useState({
        start: null,
        progress: null,
        end: null,
    });
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
    const handleSliderChange = useCallback((progress) => {
        if (typeof progress === 'number') {
            setProgress(progress / 100);
            videoRef.current.seekTo(progress / 100);
        } else {
            setLoopRangeChangeValue({
                start: progress[0],
                progress: progress[1],
                end: progress[2],
            });
        }
    }, []);
    const handleShowControls = useCallback(() => {
        setShowControls(true);
        clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            setShowControls(false);
        }, 3000);
    }, []);
    const handleCustomLoop = useCallback(() => {
        setCustomLoop((isCustomLoop) => !isCustomLoop);
        setLoopRange({
            start: progress * 100,
            end: progress * 100 + 50,
        });
    }, [progress]);
    const handleFullScreen = useCallback(() => {
        if (screenfull.isEnabled) {
            screenfull.toggle(fullScreen.current);
        }
    }, []);
    const currentTime =
        videoRef && videoRef.current
            ? videoRef.current.getCurrentTime()
            : Number('00:00');
    const duration =
        videoRef && videoRef.current
            ? videoRef.current.getDuration()
            : Number('00:00');

    useEffect(() => {
        container.current.addEventListener('mousemove', handleShowControls);
    }, [handleShowControls]);
    useEffect(() => {
        if (isCustomLoop && progress && progress * 100 > loopRange.end) {
            videoRef.current.seekTo(loopRange.start / 100);
            setProgress(loopRange.start / 100);
        }
    }, [isCustomLoop, loopRange, progress]);
    useEffect(() => {
        videoRef.current.seekTo(loopRangeChangeValue.progress / 100);
        setProgress(loopRangeChangeValue.progress / 100);
    }, [loopRangeChangeValue.progress]);
    useEffect(() => {
        setLoopRange({
            start: loopRangeChangeValue.start,
            end: loopRangeChangeValue.end,
        });
        videoRef.current.seekTo(loopRangeChangeValue.start / 100);
        setProgress(loopRangeChangeValue.start / 100);
    }, [loopRangeChangeValue.start, loopRangeChangeValue.end]);
    return (
        <div className="bg-slate-700 p-8">
            <div
                ref={container}
                className="bg-black w-full h-[calc(100vh-200px)] aspect-video relative overflow-hidden"
            >
                <div ref={fullScreen}>
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
                        onSliderChange={handleSliderChange}
                        currentTime={currentTime}
                        duration={duration}
                        showCongrols={showCongrols}
                        onCustomLoop={handleCustomLoop}
                        isCustomLoop={isCustomLoop}
                        onFullScreen={handleFullScreen}
                        loopRange={loopRange}
                    />
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;
