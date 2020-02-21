import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import FlexDiv from './FlexDiv';

const useStyles = makeStyles(theme => ({
  root: {
    width: 280,
    height: 160,
    backgroundColor: theme.palette.grey[500],
    position: 'relative',
    borderRadius: 8,
    transform: 'translateX(-88px)',
    [theme.breakpoints.down('md')]: {
      transform: 'translateX(-68px)',
    },
    [theme.breakpoints.down('md')]: {
      transform: 'translateX(-54px)',
    }
  },
  content: {
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(2.25),
    paddingRight: theme.spacing(2.25),
    height: '100%',
    width: '100%',
  },
  waterMark: {
    position: 'absolute',
    fontWeight: 'bold',
    fontStyle: 'italic',
    top: 0,
    right: 8,
    opacity: 0.05,
  },
  visa: {
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  cardNumber: {
    paddingTop: theme.spacing(1.5),
    paddingLeft: theme.spacing(0.5),
    display: 'flex',
    justifyContent: 'flex-start',
    textAlign: 'center',
  },
  spaceSpan: {
    marginRight: theme.spacing(3),
    '&:last-child': {
      margin: 0,
    }
  },
  pwd: {
    margin: `0 ${theme.spacing(0.25)}`,
  },
}));

const CardNumber = (props) => {
  const { numbers = '', isTyping } = props;
  const classes = useStyles();
  const renderNumber = (number, index) => {
    if ((index + 1) % 4 === 0) {
      return (
        <React.Fragment key={index}>
          <span className={clsx({[classes.pwd]: !isTyping })}>{isTyping ? number : '*' }</span>
          <span className={classes.spaceSpan} />
        </React.Fragment>
      )
    }
    return (<span key={index} className={clsx({[classes.pwd]: !isTyping })}>{isTyping ? number : '*' }</span>);
  }
  return Array.from(numbers).map(renderNumber);
};

const FloatCard = (props) => {
  const classes = useStyles();
  const { expiredMonth = '', expiredYear = '', cardName, cardNumber, isTyping } = props;
  
  return (
    <Card className={classes.root}>
      <FlexDiv column className={classes.content}>
        <Typography className={classes.visa} color="secondary" variant="h5">
          VISA
        </Typography>
        <FlexDiv grow />
        <Typography variant="body2" color="secondary" className={classes.cardNumber}>
          <CardNumber numbers={cardNumber} isTyping={isTyping} />
        </Typography>
        <FlexDiv grow />
        <FlexDiv row>
          <Typography color="secondary">
            {cardName}
          </Typography>
          <FlexDiv grow />
          <Typography color="secondary">
            {(expiredMonth || expiredYear) && `${expiredMonth}/${expiredYear.slice(-2)}`}
          </Typography>
        </FlexDiv>
      </FlexDiv>
      <Typography className={classes.waterMark} color="secondary" variant="h2">
        VISA
      </Typography>
    </Card>
  );
}

export default FloatCard;