import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import FlexDiv from './shared/FlexDiv';
import TextField from './shared/TextField';

const useStyles = makeStyles(theme => ({
  selectRoot: {
    width: 80,
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    color: theme.palette.secondary.main,
  },
  labelRoot: {
    color: theme.palette.grey.A200,
    fontSize: 12,
  },
  focusLabel: {
    color: theme.palette.secondary.main,
  },
  errorLabel: {
    color: theme.palette.error.main,
  },
}));

const ExpiredDate = (props) => {
  const classes = useStyles();
  const {
    setCardInfo,
    month,
    year,
    onFocus,
    error,
  } = props;
  const [isFocus, setIsFocus] = useState(false);
  const setFocus = (key) => () => {
    onFocus();
    setIsFocus(key);
  }
  return (
    <FlexDiv column style={{ width: 240 }}>
      <InputLabel
        className={
          clsx(classes.labelRoot, 
            { 
              [classes.focusLabel]: isFocus,
              [classes.errorLabel]: error,
            },
          )}>
        Expiration Date
      </InputLabel>
      <FlexDiv row>
        <TextField
          error={error}
          select
          className={classes.selectRoot}
          value={month}
          onFocus={setFocus(true)}
          onBlur={setFocus(false)}
          color="secondary"
          onChange={setCardInfo('expiredMonth')}
          {...error ? { helperText: "Incorrect ExpiredDate"} : {}}
          >
          <MenuItem value="01">01</MenuItem>
          <MenuItem value="02">02</MenuItem>
          <MenuItem value="03">03</MenuItem>
          <MenuItem value="04">04</MenuItem>
          <MenuItem value="05">05</MenuItem>
          <MenuItem value="06">06</MenuItem>
          <MenuItem value="07">07</MenuItem>
          <MenuItem value="08">08</MenuItem>
          <MenuItem value="09">09</MenuItem>
          <MenuItem value="10">10</MenuItem>
          <MenuItem value="11">11</MenuItem>
          <MenuItem value="12">12</MenuItem>
        </TextField>
        <TextField
          error={error}
          select
          className={classes.selectRoot}
          value={year}
          onFocus={setFocus(true)}
          onBlur={setFocus(false)}
          onChange={setCardInfo('expiredYear')}
          color="secondary">
          <MenuItem value="2020">2020</MenuItem>
          <MenuItem value="2021">2021</MenuItem>
          <MenuItem value="2022">2022</MenuItem>
          <MenuItem value="2023">2023</MenuItem>
          <MenuItem value="2024">2024</MenuItem>
        </TextField>
      </FlexDiv>
    </FlexDiv>
  );
};

ExpiredDate.propTypes = {
  setCardInfo: PropTypes.func,
  month: PropTypes.string,
  year: PropTypes.string,
  onFocus: PropTypes.func,
  error: PropTypes.bool,
}

export default ExpiredDate;
