import { Link, useLocation } from "react-router-dom";


export default function Navbar() {
    const location = useLocation();
    /* Para que aparezca el nombre de la pagina que selecciono */
    const pathName =location.pathname === "/" ? "Funko Pop" :
                    location.pathname === "/about" ? "About" :
                    location.pathname === "/addProduct" ? "Add Product" : "";
    return (
        <nav className="NavBar">
            <div className="navBarTitle">
                <img className="imgNavBar1" src="src\assets\menu-icon.png" alt="Menu Logo" />
                <p>{pathName}</p>
            </div>
            <Link to="/">
                <img className="imgNavBar2" src="src\assets\logo.png" alt="Logo" />
            </Link>
        </nav>
    )
}