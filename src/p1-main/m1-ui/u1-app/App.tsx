import React from 'react'
import s from './App.module.css'
import HW5 from "../../../p2-homeworks/h5/HW5";
import Collapsible from 'react-collapsible'
import {NavLink,HashRouter} from 'react-router-dom'
import {PATH} from "../../../p2-homeworks/h5/Routes";

function App() {
    return (
<HashRouter>
        <div className={s.App}>
            <div >   react homeworks:</div>
            <Collapsible className={s.Collapse} trigger={'   PUSH ME'} >
                <div className={s.Links}>
                    <NavLink to={PATH.PRE_JUNIOR}>PreJunor</NavLink>
                    <NavLink to={PATH.JUNIOR}>  Junior  </NavLink>
                    <NavLink to={PATH.JUNIOR_PLUS}>Junior+</NavLink>

                </div>
            </Collapsible>
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
