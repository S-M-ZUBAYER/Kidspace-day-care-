import React from 'react';

const Loading = () => {
    return (
        <div className="w-full h-96 flex justify-center items-center bg-gradient-to-t from-black via-slate-800 to-black">
            <div className="w-16 h-16  border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        </div>
    );
};

export default Loading;