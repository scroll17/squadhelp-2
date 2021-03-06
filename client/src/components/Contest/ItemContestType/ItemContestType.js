import React from 'react';
import connect from "react-redux/es/connect/connect";

import style from './ItemContestType.module.sass';

import { addToContestQueue } from "../../../actions/actionCreator";

import { HEX_COLOR } from "../../../constants";

function ItemContestType(props){
    const { contestTo } = props;

    const uploadImage = (img) => ({ backgroundImage: `url(https://www.squadhelp.com/story_images/contest_types/${img}_blue.png)`});

    const showBlockImage = ( images ) => images.map( image => {
        return (
            <div key={image}
                 style={uploadImage(image)}
                 className={style.image}
            />)
    });

    return (
        <span
            style={{background: props.bgColor}}
            className={style.container}
            onClick={() => props.toNewContestQueue(contestTo)}
        >
            <div className={style.images}>
                {showBlockImage(props.src)}
            </div>

            <h5>{props.name}</h5>
            <hr />
            <p>{props.text}</p>

        </span>
    )
}
ItemContestType.defaultProps = {
    bgColor: HEX_COLOR.WHITE_SMOKE,
};
const mapDispatchToProps = dispatch => ({
    toNewContestQueue: stages => dispatch(addToContestQueue(stages)),
});
const mapStateToProps = (state) => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(ItemContestType);

