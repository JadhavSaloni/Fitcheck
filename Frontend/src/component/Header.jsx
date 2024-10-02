import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import FITCHECK from "../assets/FITCHECK.svg";
import logoutIcon from "../assets/logout.svg"; // changed to avoid confusion with 'logout'
import userIcon from "../assets/user.svg"; // changed to avoid confusion with 'user'
import Navbar from "./navbar";
import { MdMenu, MdClose } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { ShopContext } from "../Context/ShopContext";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);
  const { getTotalCartItems } = useContext(ShopContext);
  const navigate = useNavigate(); // React Router's useNavigate hook

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    navigate("/"); // navigate instead of window.location.replace
  };

  return (
    <header className="fixed top-0 left-0 m-auto max_padd_container w-full bg-white ring-1 ring-slate-900/5 z-10 ">
      <div className="px-4 flexBetween items-center py-3 max-xs:px-2 ">
        {/*logo*/}
        <div>
          <Link to="/">
            <img src={FITCHECK} alt="FITCHECK_logo" height={66} width={88} />
          </Link>
        </div>

        {/* Navbar Desktop*/}
        <div>
          <Navbar
            containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"}
          />
        </div>

        {/* Navbar Mobile*/}
        <div className="md:hidden">
          <Navbar
            containerStyles={`${
              menuOpened
                ? "flex item-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
                : "hidden"
            }`}
          />
        </div>

        {/* dropdown (mobile)*/}
        <div className="flexBetween gap-x-1 sm:gap-x-6 bold-16">
          {!menuOpened ? (
            <MdMenu
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full"
              onClick={toggleMenu}
            />
          ) : (
            <MdClose
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full"
              onClick={toggleMenu}
            />
          )}
          <div className="flexBetween sm:gap-x-6">
            {/* Header-cart */}
            <NavLink to={"Cart"} className={"flex"}>
              <FaCartShopping className="p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full" />
              <span className="relative flex items-center justify-center w-5 h-5 rounded-full bg-secondary text-white medium-14 -top-2">
                {getTotalCartItems()}
              </span>
            </NavLink>
          </div>

          {/* Logout/Login button */}
          {localStorage.getItem("auth-token") ? (
            <button
              onClick={handleLogout}
              className="btn_secondary_rounded flex items-center justify-center gap-x-2 medium-16"
            >
              <img src={logoutIcon} alt="logout_icon" height={19} width={19} />
              Logout
            </button>
          ) : (
            <NavLink
              to={"login"}
              className="btn_secondary_rounded flex items-center justify-center gap-x-2 medium-16"
            >
              <img src={userIcon} alt="user_icon" height={19} width={19} />
              Login
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
