import { Button, Card, Collapse, List, ListItem, ListItemText, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Comment, Post, getComments } from '../server/posts'

type Props = {
  post: Post
}

function CommentCard({ post }: Props) {
  // using state to show/hide comments
  const [comments, setComments] = useState<Comment[]>([])
  const [showComments, setShowComments] = useState<boolean>(false)

  // upon component load the comments are fetched
  useEffect(() => {
    getComments({ post_id: post.id }).then((comments) => {
      setComments(comments)
    })
  }, [])

  return (
    <Card key={post.id} sx={{ my: 4 }}>
      <Paper sx={{ p: 2, textAlign: "center" }}>
        <Typography variant="h6">{post.title}</Typography>
        <Typography variant="body1">{post.body}</Typography>
        {/* This button sets the show/hide state */}
        <Button
          variant="contained"
          color="primary"
          disabled={comments.length === 0}
          onClick={() => setShowComments(!showComments)}
        >
          {showComments ? "Hide comments" : `Show ${comments.length} comments`}
        </Button>
        {/* Using a collapsible list to show comments */}
        {comments.length > 0 && showComments ? (
          <Collapse in={comments.length > 0} timeout="auto" unmountOnExit>
            <List sx={{ mt: 2 }}>
              {comments.map((comment, index) => (
                <ListItem key={index}>
                  <ListItemText primary={comment.body} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        ) : null}
      </Paper>
    </Card>
  )
}

export default CommentCard