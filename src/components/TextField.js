import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiTextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(0.5),
      marginBottom: theme.spacing(0.5),
    },
  },
  inputLabel: {
    color: theme.palette.grey.A200,
  },
  inputClass: {
    color: theme.palette.secondary.main,
  },
}));

const TextField = (props) => {
  const classes = useStyles();
  return (
    <MuiTextField
      InputLabelProps={{
        className: classes.inputLabel,
      }}
      inputProps={{
        className: classes.inputClass,
      }}
      className={classes.root}
      color="secondary"
      {...props}
    />
  );
};

export default TextField;
