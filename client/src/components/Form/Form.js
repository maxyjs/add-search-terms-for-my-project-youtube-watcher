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
        <Typography className={classes.formTitle} variant="h6">
          {currentId
            ? `Редактирование "${post.term}"`
            : 'Добавление поискового запроса'}
        </Typography>

        <TextField
          name="term"
          variant="outlined"
          label="Поисковый запрос"
          autoComplete="on"
          multiline
          fullWidth
          value={formValue.term}
          onChange={handleChangeInput}
        />

        <TextField
          name="minRating"
          variant="outlined"
          label="Минимальный рейтинг видео"
          type="number"
          fullWidth
          value={formValue.minRating}
          onChange={handleChangeInput}
        />

        <TextField
          name="minViews"
          variant="outlined"
          label="Минимальное количество просмотров видео"
          type="number"
          fullWidth
          value={formValue.minViews}
          onChange={handleChangeInput}
        />

        <TextField
          name="addPlaylistMark"
          variant="outlined"
          label="Добавить в плейлист содержащий фразу"
          fullWidth
          value={formValue.addPlaylistMark}
          onChange={handleChangeInput}
        />

        <TextField
          name="dateTimeUpload"
          variant="outlined"
          label="Минимальное время загрузки видео"
          fullWidth
          value={formValue.dateTimeUpload}
          onChange={handleChangeInput}
        />

        <TextField
          name="videosLength"
          variant="outlined"
          label="Длина видео"
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
          добавить
        </Button>

        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clearForm}
          fullWidth
        >
          дефолтные значения
        </Button>
      </form>
    </Paper>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiTextField-root': {
      margin: 8,
    },
  },
  paper: {
    padding: '5px 8px 15px 8px',
    borderRadius: '2px',
    margin: '0px 20px 20px 0px',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  formTitle: {
    lineHeight: '1.3rem',
    padding: '5px 10px 15px 10px',
  },
  buttonSubmit: {
    marginBottom: 10,
    marginTop: 15,
  },
}));

export default Form;
