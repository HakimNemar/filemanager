import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icons from "../../../Components/Icon";

export default function MainMenu() {
    const location = useLocation();
    const [toogleActive, setToogleActive] = useState(location.pathname.slice(1));

    return (
        <div className="main-menu">
            <h6>Main Menu</h6>
            <div>
                <Link to="/file" className={toogleActive === "file" ? "active" : ""} onClick={() => { setToogleActive("file") }}>
                    {Icons.document}
                    <span>File manager</span>
                </Link>
                <Link to="/project" className={toogleActive === "project" ? "active" : ""} onClick={() => { setToogleActive("project") }}>
                    {Icons.grid}
                    <span>Project</span>
                </Link>
            </div>
        </div>
    )
}
