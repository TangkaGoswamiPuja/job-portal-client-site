import React from 'react';
import Banner from './Banner';
import Popular from './Popular';
import Overview from './Overview';
import Jobtabs from './Jobtabs';

const Home = () => {
    return (
        <div  className=' max-w-7xl mx-auto mt-10 mb-10 '>
           <div className='border-4 border-purple-950 rounded-2xl mt-56 mb-10  lg:mt-10 '>
           <Banner></Banner>
           </div>
           <div className='mt-10 mb-10 '>
<Jobtabs></Jobtabs>
           </div>
           <div className='mt-10 mb-10 '>
           <Popular></Popular>
           </div>
           <div >
           <Overview></Overview>
           </div>
          
           
            
           
           
        </div>
    );
};

export default Home;