import React, { useEffect, useState } from 'react';
import { AppBar, Container, Grid, Grow, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/postsActions';
import { makeStyles } from '@material-ui/core/styles';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography
          color="primary"
          className={classes.heading}
          variant="h5"
          align="center"
        >
          Поисковые запросы
        </Typography>
      </AppBar>

      <Grow in>
        <Container className={classes.container}>
          <Grid container justify="space-between" alignItems="stretch">
            <Grid item xs={12} sm={5}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    padding: 0,
  },
  appBar: {
    borderRadius: '2px',
    margin: '5px 0px 15px 0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#3f51b5',
  },
}));

export default App;
