import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {changeThemeAC} from "./bll/themeReducer";
import s from "./HW12.module.css";

const themes = ['dark', 'red', 'green', 'yellow','white'];

function HW12() {
    // const theme = 'dark'; // useSelector
    const theme = useSelector<AppStoreType, string>(state => state.changeTheme.theme)
    const dispatch = useDispatch()

    const onChangeOption = (theme: string) => {
        dispatch(changeThemeAC(theme))
    }

    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12

            </span>
            <SuperSelect
                options={themes}
                value={theme}
                onChangeOption={onChangeOption}
            />

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
