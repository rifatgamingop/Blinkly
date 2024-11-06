import React, { useEffect, useState } from 'react';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/api/feed')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <div>
            <h1>Feed</h1>
            {posts.map(post => (
                <div key={post._id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
}

export default Feed;
