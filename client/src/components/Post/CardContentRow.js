import React from 'react';
import { Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const CardContentRow = ({icon, contentLeft, contentRight }) => {
  const classes = useStyles();

  return (
    <Typography variant="body2" color="textSecondary" component="p">
      <div className={classes.row}>
        <span><span className={classes.icon}>{icon}</span>{contentLeft}</span>
        <span>{contentRight}</span>
      </div>
    </Typography>
  );
};

const useStyles = makeStyles({
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 10px',
  },
  icon: {
    display: 'inline-block',
width: '30px'
  },
});

export default CardContentRow;
