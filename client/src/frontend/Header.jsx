import { useEffect, useState } from "react";
import { Link } from "react-scroll";

import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { useNavigate, NavLink } from "react-router-dom";
import MenuItem from "../components/MenuItem";
import Footer from "../frontend/Footer";
import { Loader, Loading2 } from '../components';
import { AiOutlineHome } from 'react-icons/ai';
import {GoThreeBars} from 'react-icons/go';

const Header = () => {

    const handleLinkClick = (url) => {
        window.open(url, '_blank');
      };
  


  return (
    <div className=" bg-[#F5F7FF] flex justify-between mx-5 max-w-6xl  sm:mx-auto items-center  py-6">
        <div>
            <a href="/">
                <h2 className="text-2xl" > <span className="font-bold bg-amber-500 py-1 px-3 rounded-lg text-[#4C205B]">EOSI</span><span className="text-2xl text-violet-900 font-semibold" > Finance</span> </h2>
            </a>
        </div>
        <div className=" flex flex-row  items-center cursor-pointer gap-4 ">
            <MenuItem title="Home" address="/" />

            {/* <MenuItem title="Products" address="https://ogurov5hndz.typeform.com" />
 */}

            <div className="hover:text-amber-500" onClick={() => handleLinkClick('https://ogurov5hndz.typeform.com')} >Products</div>

            <MenuItem title="Roadmap" address="/" />

            <Link to="footer-section" smooth={true} duration={500}>
                <MenuItem title="Roadmap" />
            </Link>




            <MenuItem title="Team" address="/" />

            {/* <div onClick={() => handleLinkClick('https://medium.com/@v.hamann')} title="Blog"  /> ff</div> */}

            <div className="hover:text-amber-500 px-2" onClick={() => handleLinkClick('https://medium.com/@v.hamann')} >Blog</div>

            <div className="hover:text-amber-500 px-3" onClick={() => handleLinkClick('https://eosi-finance.gitbook.io/eosi-finance-litepaper/')} >Litepaper</div>

            {/* <MenuItem title="Litepaper" address="https://eosi-finance.gitbook.io/eosi-finance-litepaper/ " /> */}


            <div className="flex flex-row space-x-3 md:ml-20">
                {/* <a href="/login" className="hover:translate-x-0.5 duration-700 ">
                    <h2 className="text-sm" > <span className="hidden md:inline font-base bg-slate-300 py-3 px-6 rounded-lg hover:bg-gray-800 hover:text-white duration-700">Funded Account</span></h2>
                </a> */}
                <div className=" hidden md:inline  text-gray-100">
                 <ConnectWallet className="!rounded-xl !bg-[#4C205B] !text-sm " />
                </div>
                    
                
            </div>
            <a href="/login">
                <div className="text-3xl sm:hidden mx-4 hover:text-amber-600 text-[#4C205B]">
                    <GoThreeBars />
                </div>
            </a>
        </div>

        
        
    </div>
  )
}

export default Header