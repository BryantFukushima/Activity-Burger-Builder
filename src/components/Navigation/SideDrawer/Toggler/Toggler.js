import React from 'react';

import classes from './Toggler.module.css';

const toggler = (props) => (
    <div className={classes.Toggler} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default toggler;