import React, { Fragment } from 'react';
import style from './Error.module.css';
import pana404 from '../../Assets/img/pana404.png';

const Error = () =>{
    return(

        <fragment>

            <div className={style.holder}>
                <div className={style.center}>
                    <h3>متاسفانه صفحه مورد نظر یافت نشد</h3> 
                    <img src={pana404} alt="pana404" />
                </div>
            </div>
        </fragment>
    )
}

export default Error;