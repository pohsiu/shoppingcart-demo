import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Icon from '@material-ui/core/Icon';
import FlexDiv from '../components/shared/FlexDiv';
import List from '../components/List';
import * as Selectors from '../selectors';
import * as Constants from '../constants';

const useStyles = makeStyles(theme => ({
  cart: {
    padding: theme.spacing(6),
    paddingBottom: theme.spacing(1.5),
    flex: 5,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1.5),
    },
  },
  btnFlex: {
    padding: theme.spacing(2),
    paddingLeft: 0,
    alignItems: 'center',
  },
  subTotalFlex: {
    padding: theme.spacing(2),
    paddingRight: 0,
    alignItems: 'flex-end',
  },
  btnIcon: {
    padding: theme.spacing(0.5),
  },
  btnTitle: {
    padding: theme.spacing(0.5),
    fontWeight: 'bold',
  },
  subtitle: {
    fontWeight: 'bold',
    color: 'rgb(134, 135, 131)',
    marginRight: theme.spacing(1),
  },
  h6: {
    fontWeight: 'bold',
  },
}));

const ShoppingCart = () => {
  const classes = useStyles();
  const subtotal = useSelector(Selectors.selectSubTotal);
  const listItems = useSelector(Selectors.selectCartCollection);
  const dispatch = useDispatch();
  const setItemNumber = (id) => (num) => dispatch({ type: Constants.SET_ITEM_COUNT, data: { id, num }});
  const onClearItem = (id) => () => dispatch({ type: Constants.REMOVE_ITEM, data: { id }});
  const onClickBtn = () => {
    // Reset Shopping Cart
    dispatch({ type: Constants.RESET_SHOPPING_CART });
    // Empty Credit Card Info
    dispatch({ type: Constants.EMPTY_CREDIT_CARD });
  }
  return (
    <FlexDiv column className={classes.cart}>
      <Typography variant="h5">Shopping Cart</Typography>
      <List
        items={listItems}
        setItemNumber={setItemNumber}
        onClearItem={onClearItem} 
      />
      <FlexDiv grow />
      <FlexDiv row>
        <FlexDiv row className={classes.btnFlex}>
          <ButtonBase onClick={onClickBtn}>
            <Icon className={classes.btnIcon}>
              <ArrowBack />
            </Icon>
            <Typography className={classes.btnTitle} color="primary">
              Countine Shopping
            </Typography>
          </ButtonBase>
        </FlexDiv>
        <FlexDiv grow />
        <FlexDiv row className={classes.subTotalFlex}>
          <Typography variant="subtitle1" className={classes.subtitle}>Subtotal:</Typography>
          <Typography variant="h6" className={classes.h6}>${subtotal}</Typography>
        </FlexDiv>
      </FlexDiv>
    </FlexDiv>
  )
}

export default ShoppingCart;

