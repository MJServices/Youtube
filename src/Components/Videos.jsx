import React, { useState } from 'react'

const Videos = () => {
    const [videos, setvideos] = useState(["https://i.ytimg.com/vi/qG9EvNQbPio/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA9lS3Y5QroarVTT8-lSlmfJigFDg","https://i.ytimg.com/vi/TXg5lyu_jCk/mqdefault.jpg?sqp=-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLDe09nz4cLMaHHyWnpZ0F32vk_EtA", "https://i.ytimg.com/vi/Z4BTGjJRDB4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC26bUbYVyh3NeD_wuFxNo3j0asbA"])
  return (
    <div className='absolute top-[12vh] z-10 lg:left-[6vw]'>
        {videos.map((e, i)=>{
            return(
                <div className="video-container text-white float-right mr-4 flex flex-col flex-wrap gap-1 mb-4 lg:float-left" key={i}>
                    <img src={e} className="video-image w-[85vw] rounded-[6px] lg:w-[30vw]"/>
                    <p className="video-title">This is a nice video bro.</p>
                </div>
            )
        })}
         {videos.map((e, i)=>{
            return(
                <div className="video-container text-white float-right mr-4 flex flex-col flex-wrap gap-1 mb-4 lg:float-left" key={i}>
                    <img src={e} className="video-image w-[85vw] rounded-[6px] lg:w-[30vw]"/>
                    <p className="video-title">This is a nice video bro.</p>
                </div>
            )
        })}
         {videos.map((e, i)=>{
            return(
                <div className="video-container text-white float-right mr-4 flex flex-col flex-wrap gap-1 mb-4 lg:float-left" key={i}>
                    <img src={e} className="video-image w-[85vw] rounded-[6px] lg:w-[30vw]"/>
                    <p className="video-title">This is a nice video bro.</p>
                </div>
            )
        })}
    </div>
  )
}

export default Videos