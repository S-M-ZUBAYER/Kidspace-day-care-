import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/img/logo.jpg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div className="sticky top-0 z-40">
            <div className="navbar  bg-base-100 text-slate-400 bg-gradient-to-t from-black via-slate-800 to-gray-900">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/home'>Home</Link></li>
                            <li tabIndex={0}>
                                <Link to='/services' className="justify-between">
                                    Services
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </Link>

                            </li>
                            {user ?
                                <>
                                    <li><Link to='addServices'>Add Services</Link></li>
                                    <li><Link to='reviews'>My Reviews</Link></li>
                                </>
                                :
                                ""
                            }
                            <li><Link to='blog'>Blog</Link></li>
                            <li><Link to='contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl"><img className="w-8 h-8 rounded-xl mr-2" src={img} ></img>Kidspace</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/home'>Home</Link></li>
                        <li tabIndex={0}>
                            <Link to='/services'>
                                Services
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            {/* <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul> */}
                        </li>
                        {user ?
                            <>
                                <li><Link to='addServices'>Add Services</Link></li>
                                <li><Link to='reviews'>My Reviews</Link></li>
                            </>
                            :
                            ""
                        }
                        <li><Link to='blog'>Blog</Link></li>
                        <li><Link to='contact'>Contact</Link></li>
                    </ul>
                </div>
                {/* <input type="checkbox" className="toggle toggle-sm ml-10" checked /> */}
                <div className="navbar-end">
                    {user?.uid ?
                        <>
                            <img title={user.displayName} className="w-8 h-8 rounded-xl mr-2" src={user?.photoURL} ></img>
                            <button onClick={() => logOut()} className="btn-small px-3 py-1 rounded-tl-xl rounded-br-xl bg-gradient-to-t from-orange-400 via-amber-300 to-lime-300 text-black lg:mr-3">Log Out</button>
                        </> :
                        <Link to='/login' className="btn-small px-3 py-1 rounded-tl-xl rounded-br-xl bg-gradient-to-t from-lime-400 via-teal-300 to-emerald-600 text-black lg:mr-3">Log In</Link>
                    }


                </div>
            </div>

        </div>
    );
};

export default Navbar;