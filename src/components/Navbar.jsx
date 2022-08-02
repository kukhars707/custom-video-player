import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

const Navbar = () => (
    <header className="flex justify-between items-center bg-slate-700 p-4 mb-4">
        <div className="text-white text-2xl">Custom video player</div>
        <div className="text-white">
            <a
                href="https://github.com/kukhars707/custom-video-player"
                target="_blank"
                rel="noreferrer"
                className="text-2xl block"
            >
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
        </div>
    </header>
);

export default Navbar;
