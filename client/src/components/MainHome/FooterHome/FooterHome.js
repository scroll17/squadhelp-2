import React  from 'react';
import style from './FooterHome.module.sass';

import {Link} from "react-router-dom";

function FooterHome(){

        return (
            <div className={style.footerHome}>
                <div className={style.container}>

                    <div className={style.footerInformation}>
                        <img src={'https://www.squadhelp.com/assets/nimages/compressed/header-logo-white-min.png'} alt={''}/>
                        <span> Copyright © 2018 Squadhelp Inc </span>
                    </div>

                    <div className={style.socialNetworks}>
                        <ul>
                            <li><i className="fab fa-facebook-f" /></li>
                            <li><i className="fab fa-google-plus-g" /></li>
                            <li><i className="fab fa-twitter" /></li>
                        </ul>
                    </div>

                </div>
            </div>
        )

}

export default FooterHome;
