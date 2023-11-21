import divide from "../images/divide.png";
import { Link } from 'react-router-dom';
import twitter from "../images/twitter.png";
import Instagram from "../images/instagram.png";
import Mail from "../images/mail.png";
import Telegram from "../images/telegram.png";

export default function Footer() {

    const handleLinkClick = (url) => {
        window.open(url, '_blank');
      };

  return (
    <div className="justify-center flex flex-col w-full items-center py-8 pb-24 mx-4 bg-black sm:mx-auto">
      <div className="flex flex-row items-center mx-4 w-full">
        <div className="flex flex-row w-full items-center justify-center pt-16 space-x-4">
          {/* <Image src={divide} alt="" /> */}
          <div>
            <div className="flex flex-col items-start pb-2 space-y-12">
              <Link to="/">
                <h2 className="text-2xl space-x-1">
                  <span className="font-bold bg-amber-500 py-1 px-3 rounded-lg text-[#4C205B]">
                    EOSI
                  </span>
                  <span className="text-3xl text-violet-900 font-semibold">
                    Finance
                  </span>
                </h2>
              </Link>
              <div>
                <p className="text-xs font-semibold pb-6 text-white">
                  Copyright EOSI Finance © 2023
                </p>
                <p className="text-xs font-semibold text-white">Follow us</p>
                <div className="flex flex-row space-x-5 pt-4 items-center cursor-pointer">

                <img onClick={() => handleLinkClick('mailto:eosi@tutanota.com')}
                      className="hover:opacity-70 "
                      src={Mail}
                      alt=""
                    />


                  <img onClick={() => handleLinkClick('https://www.instagram.com/eosi_finance')}
                      className="hover:opacity-70 "
                      src={Instagram}
                      alt=""
                    />
                  
                  
                    <img onClick={() => handleLinkClick('https://t.me/eosifinance')}
                      className="hover:opacity-70 "
                      src={Telegram}
                      alt=""
                    />

                    <img onClick={() => handleLinkClick('https://twitter.com/eosi__finance')}
                      className="hover:opacity-70 "
                      src={twitter}
                      alt=""
                    />
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row w-full items-center justify-center pt-16 space-x-4">
          {/* <Image src={divide} alt="" /> */}
          <div>

         


            <div onClick={() => handleLinkClick('https://t.me/eosifinance')} className="flex flex-col items-start pb-2 space-y-12 cursor-pointer">
              <p className="text-lg font-medium text-gray-300">Products</p>
              <div>
                <p className="text-xs font-semibold pb-3 text-white">
                  Crypto Copy-Trading
                </p>
                <p className="text-xs font-semibold pb-3 text-white">
                  Connect Wallet
                </p>
                <p className="text-xs font-semibold pb-3 text-white">
                  Litepaper
                </p>
                <p className="text-xs font-semibold text-white">
                  Funded Account
                </p>
              </div>
            </div>
          </div>
        </div>
    
        <div className=" flex flex-row w-full items-center justify-center pt-16 space-x-4">

{/* <Image src={divide} alt="" /> */}

<div>

<div className="flex flex-col items-start  pb-2 space-y-12  ">

<p className="text-lg font-medium text-gray-300 ">
        Resources
    </p>
    

    <div>

        <p className="text-xs font-semibold pb-3 text-white ">Documentation</p>

        <p className="text-xs font-semibold text-white pb-3">Team Blog</p>

        <p className="text-xs font-semibold pb-3 text-white">Hackathon & Bounty</p>

        <p className="text-xs font-semibold text-white ">Roadmap</p>

        

        
    </div>
    
</div>

</div>

</div>





<div className=" flex flex-row w-full items-center justify-center pt-16 space-x-4">

{/* <Image src={divide} alt="" /> */}

<div>

<div className="flex flex-col items-start  pb-2 space-y-12  ">

<p className="text-lg font-medium text-gray-300 ">
        About
    </p>


    <div>

        <p className="text-xs font-semibold pb-3 text-white ">Team</p>

        <p className="text-xs font-semibold text-white pb-3">Jobs</p>

        <p className="text-xs font-semibold pb-3 text-white">Media Inquiries</p>

        <p className="text-xs font-semibold text-white ">Privacy Policy</p>

        

        
    </div>
    


</div>

</div>

</div>

</div>



</div>
)
}
