import React from "react";

const page = async () => {
  const postsJson = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await postsJson.json();
  // try {
  //   const timePromise = await new Promise((resolve, reject) => {
  //     setTimeout(() => reject("error"), 3000);
  //   });
  // } catch (error) {
  //   throw new Error(error);
  // }

  return (
    <div>
      {posts.map((post) => (
        <div style={{ marginBottom: "50px" }} key={post.id}>
          {post.title}
        </div>
      ))}
    </div>
  );
};

export default page;
