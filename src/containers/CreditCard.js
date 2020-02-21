import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FlexDiv from '../components/FlexDiv';
import FloatCard from '../components/FloatCard';
import TextField from '../components/TextField';
import ExpiredDate from '../components/ExpiredDate';
import * as Selectors from '../selectors';
import * as Constants from '../constants';
import { numberLimit } from '../utils';

const useStyles = makeStyles(theme => ({
  creditCard: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(6),
    marginRight: theme.spacing(6),
    padding: theme.spacing(5),
    paddingTop: theme.spacing(4),
    flex: 3,
    backgroundColor: theme.palette.background.cardBg,
    borderRadius: 8,
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1.2),
    },
  },
  label: {
    color: theme.palette.grey.A200,
    fontSize: 12,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  masterCard: {
    width: 100,
    height: 80,
  },
  inputCvv: {
    marginTop: theme.spacing(1.5),
    color: theme.palette.secondary.main,
  },
  checkBtn: {
    marginTop: theme.spacing(2),
  },
}));

const CreditCard = (props) => {
  const cardInfo = useSelector(Selectors.selectCreditCard);
  const { cardName, cvv, expiredMonth, expiredYear, cardNumber } = cardInfo;
  const dispatch = useDispatch();
  const setCardInfo = (field) => (event) => event && dispatch({ type: Constants.SET_CARD_INFO, data: { [field]: event.target.value }});
  const setTypingStatus = (isTyping) => dispatch({ type: Constants.SET_TYPING_STATUS, data: { isTyping }});
  const [isCardNumberError, setIsCardNumberError] = useState(false);
  const [isCvvError, setIsCvvError] = useState(false);
  const [isCardNameError, setIsCardNameError] = useState(false);
  const [isExpiredDateError, setIsExpiredDateError] = useState(false);
  const classes = useStyles();
  const onFocusCardNumber = () => { 
    setIsCardNumberError(false);
    setTypingStatus(true);
  }
  const onFocusExpiredDate = () => setIsExpiredDateError(false);
  const onFocusCardCvv = () => setIsCvvError(false);
  const onFocusCardName = () => setIsCardNameError(false);
  const onBlurCardNumber = () => {
    if (!cardNumber) return;
    const reg = /^[4]\d{15}$/;
    setTypingStatus(false);
    setIsCardNumberError(!reg.test(cardNumber));
  };
  const onBlurCardCvv = () => {
    if (!cvv) return;
    const reg = /^\d{3}$/;
    setIsCvvError(!reg.test(cvv));
  }
  const onClickBtn = () => {
    const regCvv = /^\d{3}$/;
    setIsCvvError(!regCvv.test(cvv));
    const regNumber = /^[4]\d{15}$/;
    setIsCardNumberError(!regNumber.test(cardNumber));
    if (!cardNumber) setIsCardNameError(true);
    if (!expiredMonth || !expiredYear) setIsExpiredDateError(true);
  };
  return (
    <FlexDiv column className={classes.creditCard}>
      <Typography variant="h5" color="secondary">Card Details</Typography>
      <InputLabel className={classes.label}>
        Card Type
      </InputLabel>
      <FlexDiv row style={{ alignItems: 'center', paddingBottom: 12 }}>
        <FloatCard {...cardInfo} />
        <img alt="mastercard" className={classes.masterCard} src='./mastercard.png'/>
      </FlexDiv>
      <FlexDiv grow />
      <TextField
        error={isCardNameError}
        onFocus={onFocusCardName}
        label="Name on Card"
        value={cardName}
        onChange={setCardInfo('cardName')}
        {...isCardNameError ? { helperText: "Please enter name"} : {}}
      />
      <FlexDiv grow />
      <TextField
        error={isCardNumberError}
        type="password"
        onBlur={onBlurCardNumber}
        label="Card Number"
        value={cardNumber}
        onFocus={onFocusCardNumber}
        onChange={numberLimit(16)(setCardInfo('cardNumber'))}
        {...isCardNumberError ? { helperText: "Incorrect number plz check. (Start With 4)"} : {}}
      />
      <FlexDiv grow />
      <FlexDiv row style={{ alignItems: 'center' }}>
        <ExpiredDate 
          year={expiredYear}
          month={expiredMonth}
          setCardInfo={setCardInfo}
          onFocus={onFocusExpiredDate}
          error={isExpiredDateError}
        />
        <TextField
          error={isCvvError}
          className={''}
          inputProps={{ className: classes.inputCvv }}
          label="CVV"
          value={cvv}
          onBlur={onBlurCardCvv}
          onFocus={onFocusCardCvv}
          onChange={numberLimit(3)(setCardInfo('cvv'))}
          {...isCvvError ? { helperText: "Incorrect Cvv"} : {}}
        />
      </FlexDiv>
      <FlexDiv grow />
      <Button
        className={classes.checkBtn}
        variant="contained"
        color="primary"
        disableElevation
        onClick={onClickBtn}
      >
        Check Out
      </Button>
    </FlexDiv>
  )
}

export default CreditCard;
