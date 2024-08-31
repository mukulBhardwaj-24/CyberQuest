import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";

function Header() {
    const navigate = useNavigate();
    const { logout, isAuthenticated } = useAuth();
    const [accountType, setAccountType] = useState(null);

    useEffect(() => {
        // Get accountType from localStorage
        const storedAccountType = localStorage.getItem("accountType");
        setAccountType(storedAccountType);
    }, [isAuthenticated]);

    const handleLogout = () => {
        logout();
        localStorage.removeItem("accountType");
        setAccountType(null);  // Reset account type
        navigate("/");
    };

    return (
        <>
            <div className="header">
                <header className="header-content">
                    <Link to={"/"} className="logo">
                        <img src="./images/StudySyn.svg" alt="logoImage" className="logo-icon" />
                        <span className="logo-text">CyberQuest</span>
                    </Link>

                    <nav className="nav">
                        <NavLink to={"/home"} className={({ isActive }) =>
                            `text-[1.125rem] font-semibold transition-colors duration-100 ${isActive
                                ? 'text-[var(--link-color)]'
                                : 'text-[#718096]'
                            } hover:text-[var(--link-color)]`
                        }>Home</NavLink>

                        {accountType === 'Admin' ? (
                            <NavLink to={"/admin-dashboard"} className={({ isActive }) =>
                                `text-[1.125rem] font-semibold transition-colors duration-100 ${isActive
                                    ? 'text-[var(--link-color)]'
                                    : 'text-[#718096]'
                                } hover:text-[var(--link-color)]`
                            }>Admin-Dashboard</NavLink>
                        ) : (
                            <NavLink to={"/profile"} className={({ isActive }) =>
                                `text-[1.125rem] font-semibold transition-colors duration-100 ${isActive
                                    ? 'text-[var(--link-color)]'
                                    : 'text-[#718096]'
                                } hover:text-[var(--link-color)]`
                            }>Profile</NavLink>
                        )}

                        <NavLink to={"/about"} className={({ isActive }) =>
                            `text-[1.125rem] font-semibold transition-colors duration-100 ${isActive
                                ? 'text-[var(--link-color)]'
                                : 'text-[#718096]'
                            } hover:text-[var(--link-color)]`
                        }>About</NavLink>
                        <NavLink to={"/blog"} className={({ isActive }) =>
                            `text-[1.125rem] font-semibold transition-colors duration-100 ${isActive
                                ? 'text-[var(--link-color)]'
                                : 'text-[#718096]'
                            } hover:text-[var(--link-color)]`
                        }>Blog</NavLink>
                    </nav>

                    {isAuthenticated ? (
                        <button onClick={handleLogout} className="contact-button">
                            Log out
                        </button>
                    ) : location.pathname === "/" ? (
                        <Link to={"/login"} className="contact-button">
                            Sign in
                        </Link>
                    ) : null}

                    <button type="button" className="menu-button">
                        <img src="./images/Hamburger.svg" alt="menuButton" className="menu-icon" />
                    </button>
                </header>
            </div>
        </>
    );
}

export default Header;
