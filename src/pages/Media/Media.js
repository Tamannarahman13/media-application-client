import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PostCard from '../../Components/PostCard';

const Media = () => {
    const data = useLoaderData()

    return (
        <div className='container mx-auto'>
            <div className="all grid grid-cols-3 mx-auto my-8 gap-12">
                {
                    data.map(post=><PostCard
                    key={post._id}
                    post={post}
                  

                    />)
                }
                
            </div>
        </div>
    );
};

export default Media;