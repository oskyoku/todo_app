import { useState } from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
} from '@mui/material';
import { addTodo, updateTodo } from "../api/todo";
import { useNavigate } from "react-router-dom";

export default function DataDialog(props) {
    const { open, handleClose, prevFormData, setUpdated } = props;
    const [formData, setFormData] = useState({
        name: prevFormData?.name || "",
        category: prevFormData?.category || "",
        deadline: prevFormData?.deadline || "",
        progress: prevFormData?.progress || 0,
        done: prevFormData?.done || false,
    });

    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            if (prevFormData) {
                await updateTodo(formData, prevFormData.id);
                setUpdated((prev) => !prev);
            } else {
                await addTodo(formData);
            }
            navigate("/todolist")
        } catch (error) {
            throw new Error(error);
        } finally {
            handleClose()
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth={true}>
            <DialogTitle>Add new task</DialogTitle>
            <DialogContent>
                <DialogContentText>Set your new todo task now</DialogContentText>
                <TextField
                    value={formData.name}
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Todo name"
                    fullWidth
                    variant="standard"
                    onChange={handleChange}
                />
                <TextField
                    value={formData.category}
                    autoFocus
                    margin="dense"
                    id="category"
                    label="category"
                    fullWidth
                    variant="standard"
                    onChange={handleChange}
                />
                <TextField
                    value={formData.deadline}
                    autoFocus
                    margin="dense"
                    id="deadline"
                    label="deadline"
                    fullWidth
                    variant="standard"
                    onChange={handleChange}
                />
                {prevFormData && (
                    <TextField
                        value={formData.progress}
                        autoFocus
                        margin="dense"
                        id="progress"
                        label="progress"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                    />
                )}
                {prevFormData && (
                    <TextField
                        value={formData.done}
                        autoFocus
                        margin="dense"
                        id="done"
                        label="done"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                    />
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit} >
                    {prevFormData ? "Update" : "Add"}
                </Button>
            </DialogActions>
        </Dialog>
    )
}