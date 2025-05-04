import React, { useEffect } from 'react';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import profile from '../assets/no-profile-picture-15257.png'
import useAuth from '../hooks/useAuth';

const Nav = () => {
    const { user, logOut } = useAuth()
    const navigate = useNavigate()
    const {category}=useParams()
    useEffect(()=>{
        const theme = document.querySelector('.theme-controller')
        if (localStorage.getItem('theme') === 'dark') {
            theme.checked = true
            document.documentElement.setAttribute('data-theme', 'dark')
            localStorage.setItem('theme', 'dark')
        } else {
            theme.checked = false
            document.documentElement.setAttribute('data-theme', 'light')
            localStorage.setItem('theme', 'light')
        }
    },[])
    const handleTheme = () => {

        const theme = document.querySelector('.theme-controller')

        if (theme.checked) {
            document.documentElement.setAttribute('data-theme', 'dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.setAttribute('data-theme', 'light')
            localStorage.setItem('theme', 'light')
        }
    }

    return (
        <div>
            <div className="navbar  px-4 relative z-10  shadow-sm dark:bg-black dark:text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden mr-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to='/' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-red-600 px-2 rounded py-1" : ""}>Home</NavLink></li>
                            <li><NavLink to='/find-tutors' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive && !category ? "bg-red-600 px-2 rounded py-1" : ""}>Find Tutors</NavLink></li>
                            <li><NavLink to='/add-tutor' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-red-600 px-2 rounded py-1" : ""}>Add Tutor</NavLink></li>
                            <li><NavLink to={`/my-tutors`} className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-red-600 px-2 rounded py-1" : ""}>My Tutors</NavLink></li>
                            <li><NavLink to={`/my-booked-tutors`} className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-red-600 px-2 rounded py-1" : ""}>My Booked Tutors</NavLink></li>

                        </ul>
                    </div>
                    <div className=''>
                        <NavLink to='/'><span className="text-xl px-0 font-bold">Hi Tutors</span></NavLink>
                    </div>

                </div>
                <div className='navbar-center'>
                    <div className=" hidden lg:flex font-bold">
                        <ul className="menu menu-horizontal px-1 gap-4 items-center">
                            <li><NavLink to='/' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-red-600 px-2 rounded py-1" : ""}>Home</NavLink></li>
                            <li><NavLink to='/find-tutors' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive && !category ? "bg-red-600 px-2 rounded py-1" : ""}>Find Tutors</NavLink></li>
                            <li><NavLink to='/add-tutor' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-red-600 px-2 rounded py-1" : ""}>Add Tutor</NavLink></li>
                            <li><NavLink to={`/my-tutors`} className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-red-600 px-2 rounded py-1" : ""}>My Tutors</NavLink></li>
                            <li><NavLink to={`/my-booked-tutors`} className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-red-600 px-2 rounded py-1" : ""}>My Booked Tutors</NavLink></li>
                        </ul>
                    </div>
                </div>

                <div className="navbar-end gap-2   ">
                    <div>
                        <input type="checkbox"  className="toggle theme-controller" onClick={handleTheme} />
                    </div>
                    <div>
                        {
                            user ?
                                <div className='flex gap-3 items-center justify-center'>
                                    <div className="dropdown dropdown-end">
                                        {/* Trigger: Avatar button */}
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img referrerPolicy="no-referrer" src={user ? user.photoURL : profile} alt="User Avatar" />
                                            </div>
                                        </label>

                                        {/* Dropdown Menu */}
                                        <ul
                                            tabIndex={0}
                                            className="-left-7 menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40 "
                                        >
                                            <li>
                                                <p className="text-center font-semibold pointer-events-none">{user?.displayName}</p>
                                            </li>
                                           
                                        </ul>
                                    </div>

                                    <div>
                                        <button className="btn btn-error btn-sm w-full mt-2" onClick={() => {
                                            logOut()
                                                .then(() => {
                                                    navigate('/sign-in')
                                                })
                                        }}>Logout</button>
                                    </div>
                                </div> :
                                <div className='flex gap-2  md:gap-3 items-center'>
                                    {/* <button className="px-1 py-1 md:p-2 btn  bg-transparent border text-black md:font-bold rounded-md dark:text-white"><Link to='/sign-up'>Sign Up</Link></button> */}
                                    <button className="px-1 py-1 btn bg-red-500 text-white md:p-2  md:font-bold rounded-md "><Link to='/sign-in'>Sign In</Link></button>
                                </div>
                        }
                    </div>







                </div>
            </div>
        </div>
    );
};

export default Nav;