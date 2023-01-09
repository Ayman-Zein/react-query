import React, { useState } from "react";
import { useQuery } from "react-query";
import PostDetails from "./PostDetails";
const fetchPosts = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10&page=0"
  );
  return res.json();
};
const Posts = () => {
  const [post, setPost] = useState(null);

  const { data, isLoading, isError, error } = useQuery("posts", fetchPosts);

  if (isLoading) return <h4>loading ...</h4>;
  if (isError) return <h4>{error.message}</h4>;
  return (
    <div>
      <ul>
        {data?.map((post) => (
          <li key={post.id} onClick={() => setPost(post)}>
            {post.title}
          </li>
        ))}
      </ul>
      <hr />
      <PostDetails />
    </div>
  );
};

export default Posts;
