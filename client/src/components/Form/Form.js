import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
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

  const clearForm = () => {
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

  const clearCurrentId = () => {
    setCurrentId(0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createPost(postData));
      clearCurrentId();
    } else {
      dispatch(updatePost(currentId, postData));
      clearCurrentId();
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
          type="number"
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
          type="number"
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
          onClick={clearForm}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  buttonSubmit: {
    marginBottom: 10,
    marginTop: 10,
  },
}));

export default Form;
