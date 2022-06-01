import React, {ChangeEvent, useState} from 'react'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {API} from "./RequestsAPI";
import s from './Request.module.css'


export const Request = () => {

    const [checked, setChecked] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('Answer will be here soon, just click')
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)


    const buttonHandler = () => {
        API.post(checked).then((res) => {
            setMessage(res.data.errorText)
        })
            .catch((error) => {
                error.response ? setMessage(`${error.response.data.errorText}  ...Имитация,конечно:)`) : setMessage(error.message)
            })
    }


    return (
        <>
            <div className={s.main}>
                <div>
                    <SuperButton onClick={buttonHandler}>Request</SuperButton>
                </div>
                <div>
                    <SuperCheckbox
                        checked={checked}
                        onChange={testOnChange}
                    />
                </div>
            </div>
            <span className={s.span}>{message}</span>
        </>
    )
}