import React, { useEffect, useState } from 'react';

function VideoPlayer() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('/api/videos')
            .then(response => response.json())
            .then(data => setVideos(data));
    }, []);

    return (
        <div>
            <h1>Videos</h1>
            {videos.map(video => (
                <div key={video._id}>
                    <video controls src={video.url}></video>
                    <p>{video.title}</p>
                </div>
            ))}
        </div>
    );
}

export default VideoPlayer;
