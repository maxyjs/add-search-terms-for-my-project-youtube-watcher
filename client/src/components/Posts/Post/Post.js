import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const {
    term,
    minViews,
    minRating,
    dateTimeUpload,
    addPlaylistMark,
    videosLength,
    createdAt,
  } = post;

  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {term}
      </Typography>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {minRating}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          {minViews}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          {addPlaylistMark}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          {dateTimeUpload}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          {videosLength}
        </Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize="small" /> Delete
        </Button>

        <EditOutlinedIcon
          fontSize="small"
          onClick={() => setCurrentId(post._id)}
        />
      </CardActions>
    </Card>
  );
};

export default Post;
