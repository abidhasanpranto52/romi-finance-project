import { Link } from "react-router-dom";
import logo from "../../../public/New Logo.png";
import { FaEthereum } from "react-icons/fa";
import { PiWalletBold } from "react-icons/pi";
import { BsThreeDotsVertical } from "react-icons/bs";
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar Navy">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-800 rounded-box w-52"
          >
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
            <li className="dropdown">
              <Link>Parent</Link>
              <ul className="p-2">
                <li>
                  <Link>Submenu 1</Link>
                </li>
                <li>
                  <Link>Submenu 2</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/earn'>Earn</Link>
            </li>
            <li>
              <Link>Buy</Link>
            </li>
            <li>
              <Link>Referrals</Link>
            </li>
            <li>
              <Link>Ecosystem</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
          </ul>
        </div>
        <Link to="#" className="btn btn-ghost normal-case text-xl">
          <div className="flex align-middle justify-center text-2xl mb-2 font-mono">
            <img className="w-8" src={logo} alt="" />
            <span>Romi Finance</span>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
          <li className="dropdown">
            <Link>NFT</Link>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-slate-800 rounded-box w-52">
              <li>
                <Link>Item 1</Link>
              </li>
              <li>
                <Link>Item 2</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to='/earn'>Earn</Link>
          </li>
          <li>
            <Link>Buy</Link>
          </li>
          <li>
            <Link>Referrals</Link>
          </li>
          <li>
            <Link>Ecosystem</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <Link className="btn btn-success btn-sm rounded text-white">Trade</Link>
        <Link className="btn bg-transparent text-white btn-sm">
          <PiWalletBold /> Connect Wallet
        </Link>
        <div className="join">
          <button className="btn join-item btn-sm bg-transparent text-white"><FaEthereum/></button>
          <button className="btn join-item btn-sm bg-transparent text-white"><BsThreeDotsVertical/></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
