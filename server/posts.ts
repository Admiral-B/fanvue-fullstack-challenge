// Created types for the posts API, specifically the post and comment types
export type Post = {
  userId: number,
  id: number,
  title: string,
  body: string
}

export type Comment = {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}

// Created 2 server actions to fetch posts and comments
async function getPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }
    const posts = await res.json();
    return posts;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getComments({ post_id }: { post_id: number }) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post_id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch comments");
    }
    const comments = await res.json();
    return comments;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export {
  getPosts,
  getComments
}