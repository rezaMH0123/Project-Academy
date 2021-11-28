import React from 'react';
import style from './UserMassage.css';
import { Fragment } from 'react';


const UserMassage = () => {
    return (
        <Fragment>
            <div className="usermassage container mt-5 mb-5 rounded p-4 ">
                <p className="fs-4">تاکنون هیچ پیامی ارسال نکرده اید ...</p>
            </div>
        </Fragment>
    );
}

export default UserMassage;