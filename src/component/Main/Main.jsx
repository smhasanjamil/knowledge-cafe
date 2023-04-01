import React, { useEffect, useState } from 'react';
import './Main.css';
import Blog from '../Blog/Blog';
import TotalSpentTime from '../TotalSpentTime/TotalSpentTime';
import BookmarkedBlog from '../BookmarkedBlog/BookmarkedBlog';

const Main = () => {
    const [blogs, setBlog] = useState([]);
    const [bookmark, setBookmark] = useState([]);
    const [timeSpent, setTimespent] = useState([]);

    const handleTotalSpent = (times) => {
        const newTime = [...timeSpent, times]
        setTimespent(newTime);
        // console.log(blogs)
        
    }

    const handleBookmark = (blogs) => {
        // console.log(blogs)
        // localStorage.setItem('blog', JSON.stringify(blogs));
        const newBookmark = [...bookmark, blogs];
        setBookmark(newBookmark);
    }

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])
    return (
        <div className='grid grid-cols-12 md:gap-10 gap-y-10'>
            <div className='col-span-12 md:col-span-8'>
                {
                    blogs.map(blog => <Blog blog={blog} key={blog.id} handleBookmark={handleBookmark} handleTotalSpent={handleTotalSpent}></Blog>)
                }
            </div>
            <div className='col-span-12 md:col-span-4'>
                
                {/* <TotalSpentTime bookmark={bookmark}></TotalSpentTime> */}
                <TotalSpentTime timeSpent={timeSpent}></TotalSpentTime>
                <BookmarkedBlog bookmark={bookmark}></BookmarkedBlog>
            </div>


        </div>
    );
};

export default Main;