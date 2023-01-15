import Logo from "../../Assets/Image/Logo/Logo.png";
import MainMenu from "./MainMenu/MainMenu";
import Preferences from "./Preferences/Preferences";

export default function Menu() {
    return (
        <div className='menu'>
            <div className="logo">
                <img src={Logo} alt="Logo" />
                <h2>filerrrr.</h2>
            </div>

            <MainMenu />

            <Preferences />
        </div>
    )
}
