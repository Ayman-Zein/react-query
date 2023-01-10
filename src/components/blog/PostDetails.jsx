import React from "react";
import { useQuery } from "react-query";
const fetchPostComment = async (postId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  return res.json();
};

const PostDetails = ({ post }) => {
  const { data, isLoading, isError, error } = useQuery(["post", post.id], () =>
    fetchPostComment(post.id)
  );

  if (isLoading) return <h4>loading ...</h4>;

  if (isError) return <h4>{error.message}</h4>;

  return (
    <div>
      <h3>Post Details</h3>
      <h5>{post.title}</h5>
      <p>{post.body}</p>
      {data && (
        <>
          <hr />
          <h3>Comments</h3>
          <div>
            {data?.map((comment) => (
              <div key={comment.id}>
                <h5>{comment.name}</h5>
                <p>{comment.body}</p>
                <h6>{comment.email}</h6>
                <hr />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PostDetails;
