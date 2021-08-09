import React from 'react';
import style from './Buttons.module.css'

const Buttons = () => {
    return (
        <div className={style.buttons}>
            <button className={'add btn btn-outline-success'}>Add</button>
            <button className={'remove btn btn-outline-danger'}>Remove</button>
            <button className={'async btn btn-outline-warning'}>Async</button>
            <button className={'changeTheme btn btn-outline-dark'}>Change Theme</button>
        </div>
    );
}

export default Buttons;