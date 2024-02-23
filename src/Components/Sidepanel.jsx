import React from 'react'
import { IoHome } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubestudio } from "react-icons/si";

const Sidepanel = () => {
  return (
    <>
        <div className="panel h-screen w-[10vw] fixed flex flex-col items-center text-xl text-white gap-7 mt-16 lg:w-[5vw] ">
            <IoHome className='mt-5'/>
            <SiYoutubeshorts />
            <MdSubscriptions />
            <SiYoutubestudio />
        </div>
    </>
  )
}

export default Sidepanel