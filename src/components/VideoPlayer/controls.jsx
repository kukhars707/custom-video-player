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
}) => {
    return (
        <>
            <div className="absolute top-0 bg-black p-4 w-full text-white opacity-70">
                Header controls
            </div>
            <button
                className="absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%] w-24 h-24 rounded-full bg-black text-white flex justify-center items-center opacity-50"
                onClick={onPlay}
            >
                <FontAwesomeIcon icon={play ? faPause : faPlay} size="3x" />
            </button>
            <div className="absolute bottom-0 bg-black p-4 w-full text-white opacity-70">
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
                        <button onClick={onLoop} className="mr-2">
                            <FontAwesomeIcon icon={faArrowsSpin} />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faHurricane} />
                        </button>
                    </div>
                    <div className="grow px-2">
                        <Slider
                            min={0}
                            max={100}
                            value={progress * 100}
                            trackStyle={{background: '#fff'}}
                        />
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
};

export default Controls;
