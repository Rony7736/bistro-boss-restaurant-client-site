import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../../Provider/AuthProvider";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {

    const { user, logout } = useContext(authContext)

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }

    const links =
        <div className="flex gap-4 items-center">
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/menu"><li>Menu</li></NavLink>
            <NavLink to="/order/salad"><li>Order Food</li></NavLink>
            <NavLink to="/secret"><li>Secret</li></NavLink>

            {
                user ?
                    <>
                        <button onClick={handleLogout} className="btn btn-ghost">Logout</button>
                    </>
                    :
                    <>
                        <NavLink to="/login"><li>Login</li></NavLink>
                    </>
            }

        </div>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 text-white bg-black max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/">
                        <button className="btn">
                            <IoCartOutline className="mr-2"></IoCartOutline>
                            <div className="badge badge-secondary">+0</div>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;