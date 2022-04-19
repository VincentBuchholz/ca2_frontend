import React from 'react';
import {Link, Outlet} from "react-router-dom";
import {Button, Container, Nav, Navbar} from "react-bootstrap";

const Header = ({logout}) => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <nav
                    style={{
                        borderBottom: "solid 1px",
                        paddingBottom: "1rem",
                    }}
                >
                    <Link exact to="/">Home</Link> |{" "}
                    <Link to="/jokes">Jokes</Link>
                    <Button className="float-end" onClick={logout}>Log out</Button>
                </nav>
            </Navbar>
            <Outlet/>
        </div>
    );
};

export default Header;
