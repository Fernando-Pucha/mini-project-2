import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <ul>
                <li>
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => isActive ? "selected" : ""}
/*                         aria-current={({ isActive }) => isActive ? "page" : undefined} */
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/products" 
                        className={({ isActive }) => isActive ? "selected" : ""}
/*                         aria-current={({ isActive }) => isActive ? "page" : undefined} */
                    >
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/about" 
                        className={({ isActive }) => isActive ? "selected" : ""}
/*                         aria-current={({ isActive }) => isActive ? "page" : undefined} */
                    >
                        About
                    </NavLink>
                </li>
            </ul>
        </aside>
    );
}
