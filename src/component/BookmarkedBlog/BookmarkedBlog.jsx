import React from 'react';

const BookmarkedBlog = (props) => {
    const bookmarked = props.bookmark;
    // console.log(bookmarked)
    return (
        <div className='my-5 p-5 bg-slate-100 md:sticky md:top-20 rounded-xl'>
            <div className=' mt-10'>
                <h1 className='font-bold text-2xl'>Bookmarked Blogs : {bookmarked.length}</h1>
            </div>

            <div className='my-5'>
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Blog title!</h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookmarkedBlog;