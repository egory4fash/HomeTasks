const initState = {
isLoading:false
}

type initStateType = {
    isLoading: boolean
}
type loadingACType = ReturnType<typeof isLoadingAC>

export const loadingReducer = (state = initState, action: loadingACType):initStateType  => { // fix any
    switch (action.type) {
        case 'LOADING-SWITCHER': {
            return {...state,isLoading: action.payload.isLoading }
        }
        default: return state
    }
}

export const isLoadingAC = (isLoading:boolean) => {
    return {
        type:'LOADING-SWITCHER',
        payload: {
            isLoading
        }

    } as const
}
// fix any