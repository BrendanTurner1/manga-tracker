import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header-container">
            <div className="library-container">
                <Link className="nav-item" to="/library" style={{textDecoration: "none"}}>
                    <h1 className="library-title">Library</h1>
                </Link>
            </div>
            <div className="title-container">
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                    <h1 className="header-title">MangaTracker</h1>
                </Link>
            </div>
            <div className="profile-container">
                <Link to="/profile" style={{ textDecoration: "none", color: "black" }}>
                <h1 className="profile-title">Profile</h1>
                </Link>
            </div>
        </header>
    )
}

export default Header;