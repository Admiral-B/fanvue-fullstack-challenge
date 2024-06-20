import type { NextPage } from "next";
import { getPosts, Post } from "../server/posts";
import { useEffect, useState } from "react";
import { Box, CircularProgress, Grid } from "@mui/material";
import CommentCard from "../components/CommentCard";

const Feed: NextPage = () => {
  const [posts, setPosts] = useState<Post[]>([])
  // At the start of the component load the posts are fetched
  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts)
    })
  }, [])

  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "50%", mx: "auto", my: 5 }}>
      <Box component={'div'} alignItems="center" maxWidth={"100%"}>
        {/* If there are posts, render them, else show a loading indicator */}
        {posts && posts.length > 0 ? (
          posts.map((post) => (<CommentCard key={post.id} post={post} />))
        ) : (
          <Grid item xs={12}>
            <CircularProgress />
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default Feed;
