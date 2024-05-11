import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="m-24">
            <h1 className='text-6xl'>404</h1>
<div>
<img className='w-96' src="https://i.ibb.co/9Zb3xKv/Animation-1715418124112.gif" alt="" />
</div>            
<Link to={'/'}><a>Go To Home</a></Link>
        </div>
    );
};

export default Error;