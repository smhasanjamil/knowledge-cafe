import React, { useEffect, useState } from 'react';
import './Main.css';
import Blog from '../Blog/Blog';
import TotalSpentTime from '../TotalSpentTime/TotalSpentTime';
import BookmarkedBlog from '../BookmarkedBlog/BookmarkedBlog';

const Main = () => {
    const [blogs, setBlog] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])
    return (
        <div className='grid grid-cols-12 md:gap-10 gap-y-10'>
            <div className='col-span-12 md:col-span-8'>
                {
                    blogs.map(blog => <Blog blog={blog} key={blog.id}></Blog>)
                }
            </div>
            <div className='col-span-12 md:col-span-4'>
                <TotalSpentTime></TotalSpentTime>
                <BookmarkedBlog></BookmarkedBlog>
            </div>


        </div>
    );
};

export default Main;