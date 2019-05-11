import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.Less}>less</button>
    <button className={classes.More}>more</button>
  </div>
);

export default buildControl;