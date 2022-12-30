import React from 'react';


const PostCard = ({post}) => {
  console.log(post)
    return (
<div className="card card-compact  bg-base-100 shadow-xl">

<img className='' src={post.images} alt="Shoes" />
 

  <div className="card-body">
    
    <p>{post.post}</p>
    <p className='mt-4' >like 20</p>
    <div className="card-actions justify-between">
      <button className="btn btn-primary">Like</button>
      <button className="btn btn-primary">comment</button>
      <button className="btn btn-primary">share</button>
    </div>
  </div>
</div>
    );
};

export default PostCard;