import "../style/card.css";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import DataDialog from "./dataDialog";
import { useState } from "react";
import { deleteTodo } from "../api/todo";
import { Button, LinearProgress } from "@mui/material";

export default function TodoCard({ todo, setUpdated }) {

    const [open, setOpen] = useState(false);
    const handleDialogClose = () => setOpen(false);
    const handleUpdate = () => setOpen(true);


    const prevFormData = {
        id: todo.id,
        name: todo.name,
        category: todo.category,
        deadline: todo.deadline,
        progress: todo.progress,
        done: todo.done,
    };

    const handleDelete = async () => {
        await deleteTodo(prevFormData.id);
        setUpdated((prev) => !prev);
    };
    
    return (
        <div className="card">
            <div className="card-box">
                <h2>{todo.name}</h2>
            </div>
            <div className="card-box">
                <h3>category:</h3>
                {todo.category}
            </div>
            <div className="card-box">
                <h3>progress:</h3>
                <LinearProgress
                    style={{
                        width: "100%",
                        height: "10px",
                        margin: "0 12px",
                    }}
                    color="inherit" variant="determinate" value={Number(todo.progress)}
                />
                {todo.progress}
            </div>
            <div className="card-box">
                <h3>deadline:</h3>
                {todo.deadline}
            </div>
            <div className="card-box">
                <h3>done:</h3>
                {todo.done ? (<CheckIcon />) : (<CloseIcon />)}
            </div>
            <div className="card-box" style={{justifyContent:"flex-end"}}>
                <Button style={{ marginRight: "10px" }} onClick={handleUpdate} variant="contained" color="primary" size="small">update</Button>
                <Button onClick={handleDelete} variant="contained" color="error" size="small">delete</Button>
            </div>
            <DataDialog
                open={open}
                handleClose={handleDialogClose}
                prevFormData={prevFormData}
                setUpdated={setUpdated}
            />
        </div>
    )
}