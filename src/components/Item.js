import React from 'react';
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
import { processNumber } from '../utils';

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
    [theme.breakpoints.down('md')]: {
      width: 64,
      height: 64,
      marginRight: theme.spacing(1),
    }
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

const Item = (props) => {
  const { 
    key,
    name,
    price,
    setItemNumber,
    onClearItem,
    hashId,
    count,
    ...others } = props;
  const classes = useStyles();
  const onIncreaseClick = () => setItemNumber(processNumber(count + 1));
  const onDecreaseClick = () => setItemNumber(processNumber(count - 1));
  const onChangeNumber = (e) => setItemNumber(processNumber(e.target.value));
  return (
    <ListItem alignItems="center" disableGutters className={classes.itemRoot} {...others}>
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
          value={count}
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
        <Typography style={{ width: 48 }} variant="subtitle2">{(price * count).toFixed(2)}</Typography>
        <AttachMoney className={classes.moneyIcon} />
      </div>
      <IconButton onClick={onClearItem}>
        <Clear />
      </IconButton>
    </ListItem>
  )
}

export default Item;