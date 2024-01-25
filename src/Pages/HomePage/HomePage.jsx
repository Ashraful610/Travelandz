import React from 'react';
import Banner from '../../Components/Banner';
import Features from '../../Components/Features';
import Destination from '../../Components/Destination';
import ContactForm from '../../Components/ContactForm';

const HomePage = () => {
 return (
    <div className='h-fit'>
        <Banner/>
        <Features/>
        <Destination/>
        <ContactForm/>    
    </div>
 );
};

export default HomePage;