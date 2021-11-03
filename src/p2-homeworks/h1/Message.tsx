import React from 'react';
import classes from "./Message.module.css";


type MessagePropsType = {
    avatar: string,
    message: string,
    name: string,
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div>
            <div className={classes.wrap}>

                <img src={props.avatar}/>

                <div className={classes.tail}/>
                <div className={classes.message}>
                    <div className={classes.name}>{props.name}</div>
                    <div className={classes.msg}>{props.message}</div>
                    <div className={classes.time}>{props.time}</div>
                </div>

            </div>

        </div>
    )
};

export default Message;
