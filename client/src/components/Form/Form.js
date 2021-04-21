import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    term: '',
    minRating: '',
    minViews: '',
    addPlaylistMark: '',
    dateTimeUpload: '',
    videosLength: '',
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({
      term: '',
      minRating: '',
      minViews: '',
      addPlaylistMark: '',
      dateTimeUpload: '',
      videosLength: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="on"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Editing "${post.term}"` : 'Creating a Term'}
        </Typography>

        <TextField
          name="term"
          variant="outlined"
          label="Term"
          multiline
          fullWidth
          value={postData.term}
          onChange={(e) => setPostData({ ...postData, term: e.target.value })}
        />

        <TextField
          name="minRating"
          variant="outlined"
          label="Min Rating"
          fullWidth
          rows={4}
          value={postData.minRating}
          onChange={(e) =>
            setPostData({ ...postData, minRating: e.target.value })
          }
        />

        <TextField
          name="minViews"
          variant="outlined"
          label="Min Views"
          fullWidth
          value={postData.minViews}
          onChange={(e) =>
            setPostData({ ...postData, minViews: e.target.value })
          }
        />

        <TextField
          name="addPlaylistMark"
          variant="outlined"
          label="Add to Playlist has Mark"
          fullWidth
          value={postData.addPlaylistMark}
          onChange={(e) =>
            setPostData({ ...postData, addPlaylistMark: e.target.value })
          }
        />

        <TextField
          name="dateTimeUpload"
          variant="outlined"
          label="Date Time Upload Video"
          fullWidth
          value={postData.dateTimeUpload}
          onChange={(e) =>
            setPostData({ ...postData, dateTimeUpload: e.target.value })
          }
        />

        <TextField
          name="videosLength"
          variant="outlined"
          label="Min Video Length"
          fullWidth
          value={postData.videosLength}
          onChange={(e) =>
            setPostData({ ...postData, videosLength: e.target.value })
          }
        />

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
