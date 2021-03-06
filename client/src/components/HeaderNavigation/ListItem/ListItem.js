import React , { useState } from 'react';
import { Link } from "react-router-dom";

import style from './ListItem.module.sass';

import { URL } from "../../../api/baseURL";
import { DISPLAY } from "../../../constants";

import { isEqual } from 'lodash';

function ListItem(props){
    const {header, item} = props.list;
    const [drop, setDrop] = useState(DISPLAY.NONE);

    const DropDownList = (items) => {
        return (
            <ul className={style.dropMenu} style={{display: drop}}>
                {items.map( (item, id) => {
                    if(isEqual(item.tag, "hr")){
                        return <hr key={id}/>;
                    }
                    return (
                        <Link to={URL.HOME} key={item}>
                            <li>{item}</li>
                        </Link>
                    )
                })}
            </ul>
        );
    };

    return (
        <div className={style.blockForList}
             onMouseOver={() => setDrop(DISPLAY.BLOCK)}
             onMouseOut={() => setDrop(DISPLAY.NONE)}>
            <li className={style.item}  >
                <Link to={URL.NAME_IDEAS} >
                    {header}
                    <i className="fa fa-angle-down" />
                </Link>
            </li>
            { DropDownList(item) }
        </div>
    )
}
export default ListItem;

