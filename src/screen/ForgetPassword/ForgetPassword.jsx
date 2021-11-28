import React, { Fragment }from 'react';
import style from './ForgetPassword.module.css';
import aroww from '../../Assets/img/aroww.png';
import lock from '../../Assets/img/lock.png';

const ForgetPassword = () => {

    return(   

        <Fragment>
    
            <div className={style.container}>
              <div className={style.background_size}>

                <div className={style.left}>
                <img src={aroww} alt="aroww" />
                    <h3> به ما بپیوندید</h3>
                    <h4> طعم شیرین آموزش</h4>
                    <p> شروع کنید، تمرین کنید، حرفه ای شوید و کسب درآمد کنید</p>
                    <button type="button" class="btn btn-primary"> درباره ما</button>

                </div>

                <div className={style.right}>
                    <div className={style.form}>
                        
                        <div className={style.lockimg}>
                            <img src={lock} alt="lock" />

                            <h5>رمز خود را فراموش کرده اید؟</h5>
                            <h6>شما میتوانید با ارسال آدرس ایمیل، رمز خود را بازیابی کنید</h6>
                        </div>
                        
                       <div className={style.login}> 

                            <div className={style.group}>
                                <input type="email" class="form-control" placeholder="ایمیل  "></input>
                            </div>

                            <button type="button" class="btn btn-primary">کلمه عبور ارسال شود</button>
                        </div> 
                    </div>
                </div>

                
              </div> 
           </div> 

    
     
        </Fragment>
    );
}
export default ForgetPassword;