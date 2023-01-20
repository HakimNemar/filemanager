import Icons from "../../../Components/Icon";
import ImgProfile from "../../../Assets/Image/Profil-picture/Profile-picture.jpg";

export default function Panel() {
    return (
        <div className="panel">
            <div className="notification">
                {Icons.cloche}
            </div>
            <div className="informations">
                <img src={ImgProfile} alt="Profile" />
                <h4>Alexis Audouin</h4>
            </div>
        </div>
    )
}
