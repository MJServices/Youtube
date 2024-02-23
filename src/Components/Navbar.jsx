import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardVoice } from "react-icons/md";

const Navbar = () => {
  return (
    <>
    <nav className='text-white h-[60px] w-screen flex justify-between items-center pl-2 pr-2 sm:pl-6 sm:pr-6 fixed z-20 bg-[#0F0F0F]'>
        <div className="part1 flex items-center h-full gap-2 sm:gap-7">
            <div className="menu text-xl">
                <AiOutlineMenu />
            </div>
            <div className="logo h-[12vw] w-[12vw] sm:mt-[-40px] lg:h-[2.5vw] lg:w-[6vw]">
                <img src="https://png.pngtree.com/png-clipart/20221019/original/pngtree-youtube-social-media-3d-stereo-png-image_8704808.png"/>
            </div>
        </div>
        <div className="part2 flex items-center gap-3 h-screen">
            <div className='search-icon flex'>
                <input type="text" placeholder='  Search' className='bg-[#141414] py-[3px] sm:border-[1px] border-[gray] rounded-l-[100px] lg:w-[30vw] lg:h-[3vw] lg:border-none'/>
                <div className="search-icon flex items-center justify-center bg-[#3D3D3D] rounded-r-[100px] w-[30px] lg:w-[3vw]">
                    <CiSearch className='lg:text-xl'/>
                </div>
            </div>
            <div className="voice py-2 px-2 mr-1 rounded-full bg-[#3d3d3d] lg:py-3 lg:px-3">
                <MdKeyboardVoice />
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar