import React from 'react'
import s from './App.module.css'
import HW5 from "../../../p2-homeworks/h5/HW5";
import Collapsible from 'react-collapsible'


function App() {
    return (

        <div className={s.App}>
            <div>react homeworks:</div>
            <Collapsible className={s.Collapse} trigger={'PUSH ME'}>
                <div className={s.Links}>
                    <p> link1  </p>
                    <p> link2  </p>
                    <p> link3  </p>
                </div>
            </Collapsible>
            {/*<HW1/>*/}
            {/*<HW2/>*/}
            {/*<HW3/>*/}
            {/*<HW4/>*/}
            <HW5/>


        </div>

    )
}

export default App
