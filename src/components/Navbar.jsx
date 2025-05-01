import { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { IoMdHome } from 'react-icons/io';
import logo from '../../src/assets/logo.png'
import { BsCart2 } from 'react-icons/bs';
import useCart from '../hooks/useCart';
import useUser from '../hooks/useUser';

const Navbar = () => {

  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [cart] = useCart();
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [userName, setUserName] = useState("");
  const [userInformation] = useUser();

  useEffect(() => {
    if (user) {
      setProfilePhoto(user.photoURL);
      setUserName(user.displayName);
    }
  }, [user]);

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "Log out done!",
          showConfirmButton: false,
          timer: 1000,
        });
      })
      .catch((error) => console.log("ERROR", error.message));
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-white btn-p" : "text-gray-700"
          }
        >
          <div className="flex justify-center items-center gap-0.5">
            <IoMdHome className="text-lg" />
            <h5>Home</h5>
          </div>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/gift-catalog"
          className={({ isActive }) =>
            isActive ? "text-white btn-p" : "text-gray-700"
          }
        >
          <div className="flex justify-center items-center gap-1">
            <h5>Gift Catalog</h5>
          </div>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/make-gift"
          className={({ isActive }) =>
            isActive ? "text-white btn-p" : "text-gray-700"
          }
        >
          <div className="flex justify-center items-center gap-1">
            <h5>Make Gift</h5>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/gift_gallery"
          className={({ isActive }) =>
            isActive ? "text-white btn-p" : "text-gray-700"
          }
        >
          <div className="flex justify-center items-center gap-1">
            <h5>Gallery</h5>
          </div>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about_us"
          className={({ isActive }) =>
            isActive ? "text-white btn-p" : "text-gray-700"
          }
        >
          <div className="flex justify-center items-center gap-1">
            <h5>About Us</h5>
          </div>
        </NavLink>
      </li>


      {/* cart below */}
      {/* new code */}
      {
        user && <li>
          <NavLink to="/cart"
            className={({ isActive }) =>
              isActive ? "text-white btn-p" : "text-gray-700/80"
            }
          >
            <div className="relative inline-block">
              <BsCart2 className="text-base md:text-lg lg:text-2xl" />
              <span
                className="
          absolute
          -top-0.5
          -right-1
          bg-gray-100
          text-black
          text-[11px]
          w-4
          h-4
          flex
          items-center
          justify-center
          rounded-full
        "
              >
                {cart.length}
              </span>
            </div>
          </NavLink>
        </li>
      }


    </>
  );

  const dropdownLinks = (
    <>
      <li>

        <NavLink
          to="/dashboard/profile"
          className={({ isActive }) =>
            isActive ? "text-white btn-p" : "text-gray-700"
          }
        >
          <div className="flex justify-center gap-3 items-center">
            <h5>
              {userName}
            </h5>
            <p className="badge btn-s">active</p>
          </div>
        </NavLink>
      </li>
      {userInformation.role == 'admin' && (
        <li>
          <NavLink
            to="/dashboard/admin_dashboard"
            className={({ isActive }) =>
              isActive ? "text-white btn-p" : "text-gray-700"
            }
          >
            <h5>Dashboard</h5>
          </NavLink>
        </li>
      )}
      {userInformation.role == 'user' && (
        <li>
          <NavLink
            to="/dashboard/user_dashboard"
            className={({ isActive }) =>
              isActive ? "text-white btn-p" : "text-gray-700"
            }
          >
            <h5>Dashboard</h5>
          </NavLink>
        </li>
      )}


      <li>
        <a onClick={handleLogOut}>Logout</a>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-1.5"
            >
              {links}
            </ul>
          </div>

          <NavLink to="/">
            <div className="flex justify-center items-center gap-0.5 md:gap-1">
              <div>
                <img src={logo} alt="" className="w-5 md:w-7" />
              </div>
              <h3 className="md:text-xl text-p font-bold">Giftify</h3>

            </div>
          </NavLink>
        </div>



        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal pl-1 pr-2.5 space-x-3">{links}</ul>
          </div>
          {user ? (
            <div className="flex justify-center items-center gap-3">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img alt="photo" src={profilePhoto} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 font-semibold  rounded-box z-[1] mt-3 w-52 p-4 shadow space-y-2"
                >
                  <div className="px-2 text-xs  opacity-70">
                    {user?.displayName} <br />
                    {user?.email}
                  </div>
                  {dropdownLinks}
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex gap-1 md:gap-3">
              <NavLink to="/signIn"
                className={({ isActive }) => isActive ? "btn btn-sm md:btn-md btn-p text-white/90 border-0" : "btn btn-sm md:btn-md btn-ghost text-p border-2 border-violet-500/80 hover:bg-white hover:text-p"}
              >
                Log in
              </NavLink>

              <NavLink to="/signUp"
                className={({ isActive }) => isActive ? "btn btn-sm md:btn-md btn-p text-white/90 border-0" : "btn btn-sm md:btn-md btn-ghost text-p border-2 border-violet-500/80 hover:bg-white hover:text-p"}
              >
                Sign up
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;