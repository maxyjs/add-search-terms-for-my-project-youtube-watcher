import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Post from '../Post/Post';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid container alignItems="stretch">
      {posts.map((post) => (
        <Grid className={classes.post} key={post._id} item xs={12} sm={12}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

const useStyles = makeStyles(() => ({
  actionDiv: {
    textAlign: 'center',
  },
  post: {
    marginBottom: '10px',
  },
}));

export default Posts;
