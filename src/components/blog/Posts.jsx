import React, { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import PostDetails from "./PostDetails";

const fetchPosts = async (pageNum) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&page=${pageNum}`
  );
  return res.json();
};
const Posts = () => {
  const [post, setPost] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const queryClient = useQueryClient();
  useEffect(() => {
    if (currentPage < 10) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(["posts", nextPage], () =>
        fetchPosts(currentPage)
      );
    }
  }, [currentPage, queryClient]);

  const { data, isLoading, isError, error } = useQuery(
    ["posts", currentPage],
    () => fetchPosts(currentPage),
    {
      keepPreviousData: true,
    }
  );

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
      <div className="d-flex justify-content-between">
        <button
          className="btn btn-primary"
          onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
          disabled={currentPage <= 1}
        >
          prev
        </button>
        <span>{currentPage}</span>
        <button
          className="btn btn-primary"
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          disabled={currentPage >= 10}
        >
          next
        </button>
      </div>
      <hr />
      {post && <PostDetails post={post} />}
    </div>
  );
};

export default Posts;
