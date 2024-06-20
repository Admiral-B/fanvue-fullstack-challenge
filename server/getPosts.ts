export type Post = {
  userId: number,
  id: number,
  title: string,
  body: string
}

export default async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return posts;
}