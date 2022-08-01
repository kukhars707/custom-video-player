import React from 'react';

import Navbar from './components/Navbar.jsx';
import VideoPlayer from './components/VideoPlayer';

const App = () => {
    return (
        <div>
            <div>
                <Navbar />
                <div className="px-4">
                    <VideoPlayer />
                </div>
            </div>
        </div>
    );
};

export default App;
