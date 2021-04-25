import React, { useEffect, useState } from 'react';
import { Button, Paper, TextField, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { createPost, updatePost } from '../../actions/postsActions';

const defaultFormValue = {
  term: '',
  minRating: '80',
  minViews: '1000',
  addPlaylistMark: 'auto_WATCHER',
  dateTimeUpload: 'thisYear',
  videosLength: 'anyLength',
};

const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState(defaultFormValue);

  const post = useSelector((state) => {
    return currentId
      ? state.posts.find((message) => message._id === currentId)
      : null;
  });

  useEffect(() => {
    if (post) setFormValue(post);
  }, [post]);

  const clearForm = () => {
    setCurrentId(0);
    setFormValue(defaultFormValue);
  };

  const clearCurrentId = () => {
    setCurrentId(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createPost(formValue));
      clearForm();
    } else {
      dispatch(updatePost(currentId, formValue));
      clearCurrentId();
    }
  };

  const handleChangeInput = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
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
          label="Search Term"
          multiline
          fullWidth
          value={formValue.term}
          onChange={handleChangeInput}
        />

        <TextField
          name="minRating"
          variant="outlined"
          label="Min Rating"
          type="number"
          fullWidth
          value={formValue.minRating}
          onChange={handleChangeInput}
        />

        <TextField
          name="minViews"
          variant="outlined"
          label="Min Views"
          type="number"
          fullWidth
          value={formValue.minViews}
          onChange={handleChangeInput}
        />

        <TextField
          name="addPlaylistMark"
          variant="outlined"
          label="Add to Playlist has Mark"
          fullWidth
          value={formValue.addPlaylistMark}
          onChange={handleChangeInput}
        />

        <TextField
          name="dateTimeUpload"
          variant="outlined"
          label="Date Time Upload Video"
          fullWidth
          value={formValue.dateTimeUpload}
          onChange={handleChangeInput}
        />

        <TextField
          name="videosLength"
          variant="outlined"
          label="Min Video Length"
          fullWidth
          value={formValue.videosLength}
          onChange={handleChangeInput}
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
    padding: '5px 8px 15px 8px',
    borderRadius: '2px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  buttonSubmit: {
    marginBottom: 10,
    marginTop: 15,
  },
}));

export default Form;
