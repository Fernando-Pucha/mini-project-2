import { Link } from "react-router-dom"; 

export default function Navbar() {
    return (
        <nav className="NavBar">
            <img className="imgNavBar1" src="src\assets\menu-icon.png" alt="Menu Logo" />
            <Link to="/">
                <img className="imgNavBar2" src="src\assets\logo.png" alt="Logo" />
            </Link>
        </nav>
    )
}