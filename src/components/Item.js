import React, { useState } from 'react';
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  IconButton,
  TextField,
} from '@material-ui/core';
import {
  Add,
  Remove,
  Clear,
  AttachMoney,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  itemRoot: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  inline: {
    display: 'inline',
  },
  itemImg: {
    width: 86,
    height: 86,
    marginRight: theme.spacing(3),
  },
  empty: {
    flex: 1,
    flexGrow: 1,
  },
  selectClass: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
  outlineRoot: {
    width: 48,
    height: 32,
  },
  outlineInput: {
    textAlign: 'center',
  },
  moneyClass: {
    position: 'relative',
    padding: theme.spacing(3),
  },
  moneyIcon: {
    position: 'absolute',
    fontWeight: 'bold',
    top: theme.spacing(2.5),
    left: theme.spacing(1.5),
    width: theme.spacing(1.5),
    height: theme.spacing(1.5),
  },
}));

const processNumber = (value) => {
  const number = parseInt(value);
  if (number > 99) return 99;
  if (number && number > 0) return number;
  return 0;
}

const Item = (props) => {
  const { key, name = "Checkien Momo", price = "10.05", hashId = "#4231648", ...others } = props;
  const classes = useStyles();
  const [number, setNumber] = useState(1);
  const onIncreaseClick = () => setNumber(processNumber(number + 1));
  const onDecreaseClick = () => setNumber(processNumber(number - 1));
  const onChangeNumber = (e) => {
    setNumber(processNumber(e.target.value));
  }
  const onClickClear = () => {};
  return (
    <ListItem alignItems="center" className={classes.itemRoot} {...others}>
      <ListItemAvatar>
        <Avatar 
          className={classes.itemImg}
          src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={hashId}
      />
      <div className={classes.selectClass}>
        <IconButton onClick={onDecreaseClick}>
          <Remove />
        </IconButton>
        <TextField 
          value={number}
          onChange={onChangeNumber}
          variant="outlined"
          InputProps={{ 
            classes: {
              root: classes.outlineRoot,
              input: classes.outlineInput
          }}}
        />
        <IconButton onClick={onIncreaseClick}>
          <Add />
        </IconButton>
      </div>
      <div className={classes.moneyClass}>
        <Typography style={{ width: 48 }} variant="subtitle2">{(price * number).toFixed(2)}</Typography>
        <AttachMoney className={classes.moneyIcon} />
      </div>
      <IconButton onClick={onClickClear}>
        <Clear />
      </IconButton>
    </ListItem>
  )
}

export default Item;