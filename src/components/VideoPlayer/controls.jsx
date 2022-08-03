import React from 'react';
import PropTypes from 'prop-types';
import {
    faPlay,
    faPause,
    faArrowsSpin,
    faForward,
    faBackward,
    faHurricane,
    faExpand,
    faVolumeHigh,
    faVolumeMute,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {timeFormat} from '../utils/timeFormat';

const Controls = ({
    onPlay,
    play,
    onForward,
    onBackward,
    isMuted,
    isLoop,
    onLoop,
    onMute,
    progress,
    onSliderChange,
    currentTime,
    duration,
    showCongrols,
    isCustomLoop,
    onCustomLoop,
}) => {
    return (
        <>
            <div
                className={`absolute top-0 bg-black p-4 w-full text-white opacity-90 transition-all duration-500 ${
                    showCongrols ? 'translate-y-0' : 'translate-y-[-50px]'
                }`}
            >
                Header controls
            </div>
            <button
                className={`absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%] w-24 h-24 rounded-full bg-black text-white flex justify-center items-center opacity-90 transition-all duration-500 ${
                    showCongrols ? 'block' : 'hidden'
                }`}
                onClick={onPlay}
            >
                <FontAwesomeIcon icon={play ? faPause : faPlay} size="3x" />
            </button>
            <div
                className={`absolute bottom-0 bg-black p-4 w-full text-white opacity-90 transition-all duration-500 ${
                    showCongrols ? 'translate-y-0' : 'translate-y-[50px]'
                }`}
            >
                <div className="flex items-center">
                    <div className="flex-none">
                        <button onClick={onPlay} className="mr-2">
                            <FontAwesomeIcon icon={play ? faPause : faPlay} />
                        </button>
                        <button onClick={onBackward} className="mr-2">
                            <FontAwesomeIcon icon={faBackward} />
                        </button>
                        <button onClick={onForward} className="mr-2">
                            <FontAwesomeIcon icon={faForward} />
                        </button>
                        <button
                            onClick={isCustomLoop ? null : onLoop}
                            className="mr-2"
                        >
                            <FontAwesomeIcon
                                icon={faArrowsSpin}
                                color={isLoop && 'orange'}
                            />
                        </button>
                        <button onClick={onCustomLoop}>
                            <FontAwesomeIcon
                                icon={faHurricane}
                                color={isCustomLoop && 'orange'}
                            />
                        </button>
                    </div>
                    <div className="grow px-2">
                        <div className="flex items-center">
                            <div className="px-2 w-full">
                                <Slider
                                    min={0}
                                    max={100}
                                    value={progress * 100}
                                    trackStyle={{background: '#fff'}}
                                    onChange={onSliderChange}
                                />
                            </div>
                            <div className="flex">
                                <span>{timeFormat(currentTime)}</span> /{' '}
                                <span>{timeFormat(duration)}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-none">
                        <button onClick={onMute} className="mr-2">
                            <FontAwesomeIcon
                                icon={isMuted ? faVolumeMute : faVolumeHigh}
                            />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faExpand} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

Controls.propTypes = {
    onPlay: PropTypes.func.isRequired,
    play: PropTypes.bool.isRequired,
    onForward: PropTypes.func.isRequired,
    onBackward: PropTypes.func.isRequired,
    isMuted: PropTypes.bool.isRequired,
    isLoop: PropTypes.bool.isRequired,
    onLoop: PropTypes.func.isRequired,
    onMute: PropTypes.func.isRequired,
    progress: PropTypes.number.isRequired,
    onSliderChange: PropTypes.func.isRequired,
    currentTime: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    showCongrols: PropTypes.bool.isRequired,
    isCustomLoop: PropTypes.bool.isRequired,
    onCustomLoop: PropTypes.func.isRequired,
};

export default Controls;
