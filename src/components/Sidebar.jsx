import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""} >
                        Product
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/addProduct" className={({ isActive }) => isActive ? "selected" : ""}>
                        Add Product
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "selected" : ""} >
                        About
                    </NavLink>
                </li>
            </ul>
        </aside>
    );
}
