import { Link, useNavigate} from "react-router-dom";

import logo from "../../../../logos/Group 1329.png"
import useAuthContext from "../../../Context/useAuthContext";
import './Navbar.css'


const Navbar = () => {
  const {user,setUser,logOut} = useAuthContext();
  const navigate = useNavigate()
  
  const handleLogOut = () =>{
    logOut()
    .then(() => {
      setUser();
      navigate('/home')

    })
  }
  return (
    <div className="navbar bg-transparent">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link>Donation</Link>
            </li>

            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
          </ul>
        </div>
        <Link to="/home" className="lg:ms-12 md:ms-12">
          <figure className="max-w-36">
            <img src={logo} className="image-full" alt="" />
          </figure>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link>Donation</Link>
          </li>

          <li>
            <Link to='/events'>Events</Link>
          </li>
          <li>
            <Link>Blog</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end lg:pe-12 md:pe-12 pe-2 space-x-2">
        {user?.email ? <>
        
          <h1>{user.displayName}</h1>
          <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full bg-slate-400">
                <i className="fa-solid fa-user mt-3 "></i>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a onClick={handleLogOut}>Logout</a></li>
          </ul>
        </div>
        </> : (
          <>
            <Link
              to="/register"
              className="btn lg:btn-md md:btn-sm btn-xs rounded-md bg-blue-500 hover:bg-blue-600 text-white"
            >
              Register
            </Link>
            <Link to='/admin' className="btn lg:btn-md md:btn-sm btn-xs rounded-md bg-neutral-700 hover:bg-neutral-800 text-white">
              Admin
            </Link>
          </>
        )}
        
        
      </div>
    </div>
  );
};

export default Navbar;


