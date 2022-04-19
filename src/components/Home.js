import React, {useEffect, useState} from 'react';

import facade from "../apiFacade";

const Home = () => {

    function LoggedIn() {
        const [dataFromServer, setDataFromServer] = useState("Loading...")

        useEffect(() => {
            facade.fetchData().then(data => setDataFromServer(data.msg));
        }, [])

        return (
            <div>
                <h2>Data Received from server</h2>
                <h3>{dataFromServer}</h3>
            </div>
        )

    }

    return (
        <div>
            <LoggedIn />
        </div>
    );
};

export default Home;
