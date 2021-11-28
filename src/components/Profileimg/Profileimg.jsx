import React from 'react';
import upic from '../../Assets/img/reza.jpg';
import style from './Pimg.module.css'
const Profileimg = () => {
    return (
        <div>
            <div className={style.pic}><img src={upic} /></div>
            <div className={style.uname}>reeza mh</div>
        </div>
    );
}

export default Profileimg;