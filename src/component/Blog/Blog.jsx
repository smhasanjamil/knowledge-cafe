import React from 'react';
import './Blog.css';

const Blog = (props) => {
    const { id, auth_name, time, author_picture, blog_picture, blog_title, date, hash_tags } = props.blog;
    const handleBookmark = props.handleBookmark;

    return (
        <div>

            <div className="card w-full bg-base-100 card-compact">
                <figure><img className='w-full' style={{ height: "450px", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }} src={blog_picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='blog-bottom-auth-time flex flex-row justify-between items-center'>
                        <div className='flex flex-row gap-5 items-center'>
                            <img className='h-10 w-10 rounded-full' src={author_picture} alt="" />
                            <div>
                                <h1 className='font-bold text-xl'>{auth_name}</h1>
                                <p>{date}</p>
                            </div>
                        </div>
                        <div className='flex flex-row gap-5 items-center'>
                            <p className='read-time'>{time} min read</p>
                            <section>
                                <button onClick={() => handleBookmark(props.blog)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                    </svg>
                                </button>
                            </section>
                        </div>
                    </div>
                    <h2 className="card-title f-bold text-3xl">{blog_title}</h2>
                    <div className='flex gap-5'>
                        <div><p>#{hash_tags[0]}</p></div>
                        <div><p>#{hash_tags[1]}</p></div>
                    </div>
                    <div className="card-actions mb-10">
                        <button className='text-blue-600/100 underline '>Mark as read</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;