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
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Controls = ({onPlay, play}) => {
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
                        <button className="mr-2">
                            <FontAwesomeIcon icon={faBackward} />
                        </button>
                        <button className="mr-2">
                            <FontAwesomeIcon icon={faForward} />
                        </button>
                        <button className="mr-2">
                            <FontAwesomeIcon icon={faArrowsSpin} />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faHurricane} />
                        </button>
                    </div>
                    <div className="grow px-2">slider</div>
                    <div className="flex-none">
                        <button className="mr-2">
                            <FontAwesomeIcon icon={faVolumeHigh} />
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
};

export default Controls;
