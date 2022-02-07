import React from 'react'
import s from './App.module.css'
import HW5 from "../../../p2-homeworks/h5/HW5";
import {NavLink, HashRouter} from 'react-router-dom'
import {PATH} from "../../../p2-homeworks/h5/Routes";


function App() {


    return (
        <HashRouter>
            <div className={s.App}>

                <div> react homeworks:</div>

                <div className={s.links}>
                    <div className={s.inner}><NavLink to={PATH.PRE_JUNIOR}>PreJunior</NavLink></div>
                    <div className={s.inner}><NavLink to={PATH.JUNIOR}>Junior</NavLink></div>
                    <div className={s.inner}><NavLink to={PATH.JUNIOR_PLUS}>Junior+</NavLink></div>
                    <div className={s.inner}>Links</div>
                </div>

                {/*<HW1/>*/}
                {/*<HW2/>*/}
                {/*<HW3/>*/}
                {/*<HW4/>*/}
                <HW5/>


            </div>
        </HashRouter>
    )
}

export default App










