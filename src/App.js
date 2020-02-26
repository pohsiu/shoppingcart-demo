import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FlexDiv from './components/shared/FlexDiv';
import CreditCard from './containers/CreditCard';
import ShoppingCart from './containers/ShoppingCart';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    padding: '32px 48px',
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(1),
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <FlexDiv row className={classes.root} wrap="wrap">
      <ShoppingCart />
      <CreditCard />
    </FlexDiv>
  );
}

export default App;
