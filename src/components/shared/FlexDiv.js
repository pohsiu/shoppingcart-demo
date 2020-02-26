import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    boxSizing: 'border-box',
  },
  flexGrow: {
    flexGrow: 1,
  },
  flexShrink: {
    flexShrink: 1,
  },
  noWrap: {
    flexWrap: 'nowrap',
  },
  wrap: {
    flexWrap: 'wrap',
  },
  wrapReverse: {
    flexWrap: 'wrap-reverse',
  },
  inColumn: {
    flexDirection: 'column',
  },
  inRow: {
    flexDirection: 'row',
  },
})

const FlexDiv = (props) => {
  const { wrap, row, column, children, className, grow, shrink, ...others } = props;
  const classes = useStyles();
  return (
    <div className={clsx(
      classes.root,
      {
        [classes.inColumn]: column,
        [classes.inRow]: row,
        [classes.noWrap]: wrap === 'noWrap',
        [classes.wrap]: wrap === 'wrap',
        [classes.wrapReverse]: wrap === 'wrap-reverse',
        [classes.flexGrow]: grow,
        [classes.flexShrink]: shrink,
      },
      className
    )} {...others}>
      {children}
    </div>
  )
}

export default FlexDiv;