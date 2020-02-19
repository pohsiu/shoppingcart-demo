import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiList from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Item from './Item';

const initialItems = [{
   name: "Checkien Momo",
   price: "10.05",
   hashId: "#4231648",
  }, {
    name: "Spicy Mexico Potatos",
    price: "8.50",
    hashId: "#4231649",
  }, {
    name: "Breakfast",
    price: "5.90",
    hashId: "#4231650",
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const List = (props) => {
  const classes = useStyles();
  return (
    <MuiList className={classes.root} {...props}>
      {initialItems.map(item => (
        <React.Fragment key={item.hashId}>
          <Item {...item} />
          <Divider />
        </React.Fragment>
      ))}
    </MuiList>
  )
}

export default List;
