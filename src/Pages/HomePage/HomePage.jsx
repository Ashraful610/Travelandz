import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Features from '../../Components/Features/Features';
import Destination from '../../Components/Destination/Destination';
import ContactForm from '../../Components/ContactForm/ContactForm';

const HomePage = () => {
 return (
    <div>
        <Banner/>
        <Features/>
        <Destination/>
        <ContactForm/>    
    </div>
 );
};

export default HomePage;