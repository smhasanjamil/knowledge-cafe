import React from 'react';

const TotalSpentTime = (props) => {
    const timeSpent = props.timeSpent;
    let total = 0;
    for (const times of timeSpent) {
        total = total + times.time;
    }
    // console.log('Hello', timeSpent);
    return (
        <div className='md:sticky md:top-0 bg-slate-100 rounded border border-indigo-600 text-center'>
            <h3 className='font-bold md:inline-block p-2 text-indigo-600 text-2xl'>Spent time on read : {total} min</h3>
        </div>
    );
};

export default TotalSpentTime;