import { Card, Paper, Typography } from '@mui/material'
import React from 'react'
import { Post } from '../server/getPosts'

type Props = {
  post: Post
}

function CommentCard({ post }: Props) {
  return (
    <Card key={post.id}>
      <Paper sx={{ p: 2, textAlign: "center" }}>
        <Typography variant="h6">{post.title}</Typography>
        <Typography variant="body1">{post.body}</Typography>
      </Paper>
    </Card>
  )
}

export default CommentCard