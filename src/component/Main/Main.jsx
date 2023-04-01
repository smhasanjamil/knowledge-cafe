import React, { useEffect, useState } from 'react';
import './Main.css';
import Blog from '../Blog/Blog';
import TotalSpentTime from '../TotalSpentTime/TotalSpentTime';
import BookmarkedBlog from '../BookmarkedBlog/BookmarkedBlog';
import { addToDb, getBlogCart } from '../../utilities/fakedb';

const Main = () => {
    const [blogs, setBlog] = useState([]);
    const [bookmark, setBookmark] = useState([]);
    const [timeSpent, setTimespent] = useState([]);
    const [readTime, setReadTime] = useState("");

    const handleTotalSpent = (times) => {

        const previousTime = JSON.parse(localStorage.getItem("watchtime"));
        if (previousTime) {
            const sum = previousTime + times;
            localStorage.setItem("watchtime", sum);
            setReadTime(sum);
        }
        else {
            localStorage.setItem("watchtime", times);
            setReadTime(times);
        }
        // console.log(previousWatchTime)
        // const newTime = [...timeSpent, times]
        // setTimespent(newTime);


    }


    const handleBookmark = (blogs) => {
        // console.log(blogs)
        const newBookmark = [...bookmark, blogs];
        setBookmark(newBookmark);
        addToDb(blogs.blog_title);
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
                <TotalSpentTime timeSpent={timeSpent} readTime={readTime}></TotalSpentTime>
                {

                }
                <BookmarkedBlog bookmark={bookmark}></BookmarkedBlog>
            </div>


        </div>
    );
};

export default Main;