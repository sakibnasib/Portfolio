import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm rounded-2xl ">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-semibold" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-semibold" : ""
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-semibold" : ""
                }
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-semibold" : ""
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/education"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-semibold" : ""
                }
              >
                Education
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-semibold" : ""
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to='' className="  text-xl rounded-full"> 
         <img src="https://i.ibb.co/3525vR0T/images-2.png" className="w-15 h-12 rounded-full" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : ""
              }
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : ""
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/education"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : ""
              }
            >
              Education
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : ""
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
       {/*  */}
       
    <Link 
      to="" 
      download 
      class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
    >
      Resume
    </Link>
  
      </div>
    </div>
  );
};

export default Navbar;
