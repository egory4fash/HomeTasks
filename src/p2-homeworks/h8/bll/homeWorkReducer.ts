export const homeWorkReducer = (state: any, action: any): any => { // need to fix any
    switch (action.type) {
        case 'sortup': {
            let newState = [...state].sort(a,b) => {
                a.name>b.name
            }
            return newState
        }
        case 'check': {
            // need to fix
            return state
        }
        default: return state
    }
