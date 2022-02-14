import React, {ChangeEvent,KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    onPressHandler: (e:KeyboardEvent<HTMLInputElement>) => void
    error: boolean // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser,onPressHandler, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)

    return (
        <div className = {s.div}>
            <input value={name} onChange={setNameCallback} onKeyPress={onPressHandler} className={inputClass}/>
            <span className={s.span}> {error && "   name is required   " }  </span>
            <button onClick={addUser}>   add   </button>
            <span className={s.span}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
