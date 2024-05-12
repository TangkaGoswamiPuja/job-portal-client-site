import React from 'react';
import Banner from './Banner';
import Tab from './Tab';
import Popular from './Popular';
import Overview from './Overview';

const Home = () => {
    return (
        <div  className=' max-w-7xl mx-auto mt-10 mb-10 '>
           <div className='border-4 border-purple-950 rounded-2xl mt-56 mb-10  lg:mt-10 '>
           <Banner></Banner>
           </div>
           <div className='border-2  border-neutral-950 mt-10 mb-10 '>
           <Tab></Tab>
           </div>
           <div className='border-2  border-neutral-950 mt-10 mb-10 '>
           <Popular></Popular>
           </div>
           <div className='border-2  border-neutral-950'>
           <Overview></Overview>
           </div>
          
           
            
           
           
        </div>
    );
};

export default Home;