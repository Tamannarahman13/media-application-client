import React, { useEffect, useState } from "react";
import PostCard from "../../Components/PostCard";

const Popular = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://media-app-server.vercel.app/posts?limit=3")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="my-6 container  mx-auto py-2">
      <h2 className="text-center text-3xl font-medium py-5">Popular posts</h2>

      <div className="postCards grid grid-cols-3 shadow gap-10">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
     <div className="flex">
     <button className="btn btn-primary my-6 mx-auto ">Load more</button>
     </div>
    </div>
  );
};

export default Popular;
