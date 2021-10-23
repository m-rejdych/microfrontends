import React from 'react';
import { makeStyles, LinearProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  bar: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Progress = () => {
  const classes = useStyles();

  return (
    <div className={classes.bar}>
      <LinearProgress />
    </div>
  );
};

export default Progress;
