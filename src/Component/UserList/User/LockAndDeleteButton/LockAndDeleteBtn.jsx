import React from 'react'
import { Lock } from 'react-feather'
import { Trash2 } from 'react-feather';

export const LockAndDeleteBtn = (props) => {

    if(props.user.Access === "Owner"){
        return (
            <Lock/>
        );
    } else {
        return (
       <Trash2 onClick={props.onClick}/>
        )
    }
}
