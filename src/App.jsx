import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <div className='w-[393px] md:w-[1440px] mx-auto bg-[#FBFBFB]'>
      <Navbar/>
      <div className='w-[393px] md:w-[1284px] mx-auto'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
