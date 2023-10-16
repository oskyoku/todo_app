import { getTodos } from "../api/todo"
import TodoCard from "../components/TodoCard"
import { useState, useEffect } from "react";
import "../style/todolist.css";

export default function ToDoList() {

    const [todolist, setTodolist] = useState([]);
    const [updated,setUpdated] = useState(false);

    useEffect(()=>{
        const fetchTodoList = async () => {
            const [status, data] = await getTodos();
            
            setTodolist(data);
        };
        fetchTodoList();
    },[updated]);

    return (
        <div className="ToDoList">
            {todolist.map((item) => {
                return (
                    <TodoCard key={item.id} todo={item} setUpdated={setUpdated}/>
                )
            })}
        </div>
    )
}