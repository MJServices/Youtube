import React from 'react'
import Navbar from './Components/Navbar'
import Sidepanel from "./Components/Sidepanel"
import Videos from './Components/Videos'

const App = () => {
  return (
    <>
    <div className='main w-screen h-[385vh] lg:h-[150vh] bg-[#0F0F0F]'>
      <Navbar />
      <Sidepanel />
      <Videos />
    </div>
    </>
  )
}

export default App