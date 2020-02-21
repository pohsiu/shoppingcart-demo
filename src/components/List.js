import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiList from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Item from './Item';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const List = (props) => {
  const classes = useStyles();
  const { items = [], setItemNumber, onClearItem, ...others } = props;
  return (
    <MuiList className={classes.root} {...others}>
      {items.map(item => (
        <React.Fragment key={item.hashId}>
          <Item 
            setItemNumber={setItemNumber(item.hashId)}
            onClearItem={onClearItem(item.hashId)} 
            {...item}
          />
          <Divider />
        </React.Fragment>
      ))}
    </MuiList>
  )
}

export default List;
