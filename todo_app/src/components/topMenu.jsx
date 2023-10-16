import { Link,useLocation} from "react-router-dom";
import "../style/topMenu.css"
import { useState,useEffect } from "react";

export default function TopMenu(){
    const location = useLocation();
    const path = location.pathname;
    const [title,setTitle] = useState("Todo list");
    const [route,setRoute] = useState("/");

    useEffect (()=>{
        if (path !== "/"){
            setTitle("Back");
            setRoute("/");
        }else{
            setTitle("Todo list");
            setRoute("todolist");
        }
    },[path]);

    return(
        <div className="topMenu">
            <Link to={route} className="custom-link"><h1>{title}</h1></Link>
            <Link to="checklist" className="custom-link"><h1>Check for done</h1></Link>
        </div>
    );
};