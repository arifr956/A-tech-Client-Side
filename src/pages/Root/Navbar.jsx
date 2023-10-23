import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBlogger, FaHome, FaShoppingCart, FaUserSecret } from "react-icons/fa";
import { BiBookAdd, BiSolidContact } from "react-icons/bi";
import { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
    const navigation = useNavigate();
    const { user, logOut } = useContext(AuthContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleSignOut = () => {
        logOut()
            .then(result => {
                toast.success(`LogOut Successfully !`, {
                    position: "top-center",
                    autoClose: 3000,
                });
                navigation("/login");
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const navlink = [
        <li key="item1"><NavLink to="/" onClick={closeDropdown}><FaHome/>Home</NavLink></li>,
        <li key="item2"><NavLink to="/addproduct" onClick={closeDropdown}><BiBookAdd/>Add Product</NavLink></li>,
        <li key="item4"><NavLink to="/cart" onClick={closeDropdown}><FaShoppingCart/>My Cart</NavLink></li>,
        <li key="item5"><NavLink to="/blog" onClick={closeDropdown}><FaBlogger/>Tech Blog</NavLink></li>,
        <li key="item6"><NavLink to="/contact" onClick={closeDropdown}><BiSolidContact/>Contact Us</NavLink></li>,
        // <li key="items6">
        //     <NavLink to="/cart" onClick={closeDropdown} className=" btn btn-ghost text-red-500 active:bg-white hover:text-white">
        //         <FaShoppingCart className="p-0" />
        //     </NavLink>
        // </li>
    ]
        ;

    return (
        <div className="sticky top-0 z-50 px-3 md:px-12 navbar bg-orange-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={toggleDropdown}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    {isDropdownOpen && (
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlink}
                        </ul>
                    )}
                </div>
                <img className="w-10" src="https://i.ibb.co/HFWB3Tt/letter-a-tech-logo-alphabet-a-technology-icon-free-vector.jpg" alt="" />
                <a className="btn btn-ghost hidden md:block text-center normal-case text-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">aTech</a>
            </div>
            <div className="navbar-center hidden lg:flex gap-3">
                <ul className="menu menu-horizontal px-1">
                    {navlink}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown" onClick={toggleDropdown}>
                    <label tabIndex={0} className="btn btn-ghost">
                        User Menu
                        {
                            user ? <img className="h-5 w-5 ml-2 inline" src={user.photoURL} alt="User Photo" />
                                : <FaUserSecret />
                        }
                    </label>
                    {isDropdownOpen && (
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {user ? (
                                <>

                                    {/* Show user name and photo */}
                                    <li>
                                        <Link to='/profile'>
                                        <div className="flex gap-3 items-center">
                                            <p>{user.displayName}</p>
                                            <img className="w-12 h-12" src={user.photoURL} alt="User Photo" />
                                        </div>
                                        </Link>
                                    </li>

                                    <li>
                                        <NavLink className={'my-3 flex justify-center font-semibold text-md text-center text-red-400'} to="/cart" onClick={closeDropdown}>
                                            Your Cart
                                        </NavLink>
                                    </li>

                                    <li>
                                        <button className="btn bg-amber-400" onClick={handleSignOut}>
                                            Sign Out
                                        </button>
                                    </li>

                                </>
                            ) : (
                                <>
                                    <li>
                                        <Link className={`btn bg-amber-400`} to='/login' onClick={closeDropdown}>
                                            Log In
                                        </Link>
                                    </li>
                                    <li>
                                        <Link  className={`btn bg-amber-400`} to='/registration' onClick={closeDropdown}>
                                            Register
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    )}
                </div>
            </div>
           <ToastContainer/>
        </div>
    );
};

export default Navbar;
