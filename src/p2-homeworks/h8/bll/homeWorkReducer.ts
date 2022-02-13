import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType, action:{type:string}): any => { // need to fix any
    switch (action.type) {
        case 'sortUp': {
            let newState = [...state].sort((a, b) => a.name > b.name ? 1 : -1)
            return newState
        }
        case 'sortDown': {
            let newState = [...state].sort((a, b) => a.name < b.name ? 1 : -1)
            return newState
        }
        case 'check': {
            let newState = [...state].filter(f => f.age > 18)
            return newState
        }
        default:
            return state
    }
}