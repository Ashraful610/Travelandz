import './App.css'
import Banner from './Components/Banner/Banner'
import Destination from './Components/Destination/Destination'
import Features from './Components/Features/Features'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <div className='w-[1440px] mx-auto bg-[#FBFBFB]'>
      <div className='w-[1284px] mx-auto pb-[100px]'>
         <Navbar/>
         <Banner/>
         <Features/>
         <Destination/>
      </div>
    </div>
  )
}

export default App
