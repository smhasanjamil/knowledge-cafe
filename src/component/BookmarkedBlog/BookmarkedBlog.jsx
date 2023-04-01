import React from 'react';
import SingleBookmark from '../SingleBookmark/SingleBookmark';

const BookmarkedBlog = (props) => {
    const bookmarked = props.bookmark;
    // console.log(bookmarked)
    return (
        <div className='my-5 p-5 bg-slate-100 md:sticky md:top-20 rounded-xl'>
            <div className=' mt-10'>
                <h1 className='font-bold text-2xl'>Bookmarked Blogs : {bookmarked.length}</h1>
            </div>

            <div className='my-5'>
                {
                    bookmarked.map(bookmarkedItem => <SingleBookmark bookmarkedItem={bookmarkedItem} key={bookmarkedItem.id} bookmark={props.bookmark}></SingleBookmark>)
                }

            </div>

        </div>
    );
};

export default BookmarkedBlog;