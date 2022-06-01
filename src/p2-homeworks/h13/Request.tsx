import React, {ChangeEvent, useState} from 'react'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {API} from "./RequestsAPI";


export const Request = () => {

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    const buttonHandler = () => {
        API.post(`${checked}`)
    }



    return (
        <div>
            <span>{`123:${checked}`}</span>
            <SuperButton
            onClick={buttonHandler}
            >CLICK</SuperButton>
            <SuperCheckbox
                checked={checked}
                onChange={testOnChange}
            />
        </div>
    )
}