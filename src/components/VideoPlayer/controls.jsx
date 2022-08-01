import React from 'react';
import PropTypes from 'prop-types';

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
                {play ? 'Pause' : 'Play'}
            </button>
            <div className="absolute bottom-0 bg-black p-4 w-full text-white opacity-70">
                Bootom controls
            </div>
        </>
    );
};

Controls.propTypes = {
    onPlay: PropTypes.func.isRequired,
    play: PropTypes.bool.isRequired,
};

export default Controls;
