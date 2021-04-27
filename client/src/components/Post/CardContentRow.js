import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const CardContentRow = ({ icon, contentLeft, contentRight }) => {
  const classes = useStyles();

  return (
    <Typography variant="body2" color="textSecondary" component="div">
      <div className={classes.row}>
        <span className={classes.contentLeft}>
          <span className={classes.icon}>{icon}</span>
          {contentLeft}
        </span>
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
    color: 'rgba(0, 0, 0, 0.87)',
  },
  contentLeft: {
    maxWidth: '70%',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  icon: {
    display: 'inline-block',
    width: '30px',
  },
});

export default CardContentRow;
