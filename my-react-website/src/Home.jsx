import React from 'react';
import web from '../src/images/home.jpg';
import Common from './Common';


const Home = () =>{
  return(
    <div>
        <Common 
            name="Grow your beauty better with" 
            imgsrc={web}
            btname="Get Started"
            visit="/service"/>
    </div>
  );
};

export default Home;
