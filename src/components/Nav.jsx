import React, { useState } from "react";
import { Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function Nav() {

    const [toggle, setToggle] = useState(false)

    return (
        <>
            <div className="nav-container">
                <Button
                    variant="contained"
                    sx={{ position: "fixed", left: 10, top: 10 }}
                    onClick={() => setToggle(!toggle)}
                >
                    <MenuIcon />
                </Button>
                <nav
                    className="side-menu"
                    style={{ left: toggle ? "0" : "-100%" }}
                >
                    <header>
                        <h1>We do Business Here</h1>
                    </header >
                    <Button variant="contained">Products</Button>
                    <Button variant="contained">About Us</Button>
                </nav>
            </div >
        </>
    )
}