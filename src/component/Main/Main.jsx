import React, { useEffect, useState } from 'react';
import './Main.css';
import Blog from '../Blog/Blog';

const Main = () => {
    const [blog, setBlog] = useState([]);

    useEffect(() => { 
        fetch('data.json')
        .then(res => res.json())
        .then (data => setBlog(data))
    }, [])
    return (
        <div className='grid grid-cols-12 md:gap-10 gap-y-10'>
            <div className='col-span-12 md:col-span-8'>
                <Blog blog={blog}></Blog>
            </div>
            <div>
                <h1 className='col-span-12 md:grid-rows-4 md:sticky md:top-0'>Jamil</h1>
            </div>


        </div>
    );
};

export default Main;