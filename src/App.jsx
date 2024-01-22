import './App.css'
import Banner from './Components/Banner/Banner'
import ContactForm from './Components/ContactForm/ContactForm'
import Destination from './Components/Destination/Destination'
import Features from './Components/Features/Features'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <div className='w-[1440px] mx-auto bg-[#FBFBFB]'>
      <div className='w-[1284px] mx-auto'>
         <Navbar/>
         <Banner/>
         <Features/>
         <Destination/>
         <ContactForm/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
