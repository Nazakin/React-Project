import React from 'react';
import css from './MyButton.module.css'
const MyButton = ({children, ...props}) => {
    return (
        <MyButton {...props} className={css.myBtn}>
            {children}
        </MyButton>
    );
};

export default MyButton;