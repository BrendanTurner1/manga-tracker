import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
    return (

        //create sections for Home, Nav, Profile
        <header className="header-container">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <h1 className="header-title">MangaTracker</h1>
            </Link>
        </header>
    )
}

export default Header;