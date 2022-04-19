import React from 'react';

const Home = (loggedIn,logout) => {
    return (
        <div>
            <>{loggedIn}</>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Home;
