import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {isLoadingAC} from './bll/loadingReducer';
import {AppStoreType} from './bll/store';
import s from './HW10.module.css'

function HW10() {
    // useSelector, useDispatch
    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        // dispatch
        dispatch(isLoadingAC(true))
        // setTimeout
        setTimeout(() => {
            dispatch(isLoadingAC(false))
        }, 2000)
        console.log('loading...')
    };

    return (
        <div className={s.main}>

            homeworks 10


            {/*should work (должно работать)*/}
            {isLoading
                ? (<div className = {s.main}>
                        <div className={s.spinner}></div>

                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }


            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}

        </div>
    )
}

export default HW10
