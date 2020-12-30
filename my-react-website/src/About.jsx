import React from 'react';
import web from '../src/images/about.jpg';
import Common from './Common';


const About = () =>{
  return(
    <div>
      <Common 
      name="Welcome to About page" 
      imgsrc={web}
      btname="Contact Us"
      visit="/contact"/>
    </div>
  );
};

export default About;
