import React from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { deletePost } from '../../actions/posts';

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
        variant="h6"
        // component="h2"
      >
        {term}
      </Typography>

      <CardContent className={classes.cardContent}>
        <Typography variant="body2" color="textSecondary" component="p">
          ❤ minRating: {minRating}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          👀 minViews: {minViews}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          🖌 addPlaylistMark: {addPlaylistMark}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          ⏱ dateTimeUpload: {dateTimeUpload}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          ⏳ videosLength: {videosLength}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="secondary"
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

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '3px',
    height: '100%',
    padding: '5px 5px 0px 10px',
    border: '2px solid',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    marginBottom: '5px',
  },
  cardContent: {
    padding: '0 5px',
  },
  cardActions: {
    padding: '0 10px 8px 5px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default Post;
