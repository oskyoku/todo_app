import { Outlet, useLocation } from "react-router-dom";
import "../style/home.css"
import DataDialog from "./dataDialog";
import { useState } from "react";
import { Button } from "@mui/material";

export default function MainBox() {
    const location = useLocation();
    const path = location.pathname;
    const [open, setOpen] = useState(false);
    const handleDialogOpen = () => setOpen(true);
    const handleDialogClose = () => setOpen(false);

    const buttonStyle = {
        color:"white",
        borderColor: "white",
    };

    if (path === "/") {
        return (
            <div className="home">
                <h1 className="todo-title">Todo Manager</h1>
                <DataDialog open={open} handleClose={handleDialogClose} />
                <Button style={buttonStyle} size="large" onClick={handleDialogOpen} variant="outlined">Add Todo</Button>
            </div>
        )
    } else {
        return (
            <div className="list-home">
                <h1 className="list-title">{path.slice(1)}</h1>
                <Outlet />
            </div>
        )
    }
};