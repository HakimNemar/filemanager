import { useEffect, useState } from "react";
import Icons from "../../../Components/Icon";

export default function Preferences() {
    const [modeColor, setModeColor] = useState("light-mode");

    const toogleMode = () => {
        if (modeColor === "light-mode") {
            setModeColor("dark-mode");
        } else {
            setModeColor("light-mode");
        }
    }

    useEffect(() => {
        document.body.className = modeColor;
    }, [modeColor]);

    return (
        <div className="preferences">
            <h6>Preferences</h6>
            <div>
                <p>{Icons.setting}Settings</p>

                <p>
                    {Icons.themeMode}
                    <span className="theme-text">
                        {modeColor === "light-mode" ? "Dark mode" : "Light mode"}
                    </span>
                    <button onClick={toogleMode} className={modeColor === "light-mode" ? "purple" : "purple-right"}>
                        {Icons.soleil}
                        {Icons.lune}
                    </button>
                </p>
            </div>
        </div>
    )
}
