import React from 'react';

const SingleBookmark = ({ bookmarkedItem }) => {

    return (
        <div className='my-2'>

            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>{bookmarkedItem.blog_title}</p>
                </div>
            </div>

        </div>
    );
};

export default SingleBookmark;