const initState = {
    theme: 'white'
};

type initStateType = {
    theme:string
}
type actionType = ReturnType<typeof changeThemeAC>

export const themeReducer = (state = initState, action: actionType): initStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state,theme:action.payload.theme};
        }
        default: return state;
    }
};

export const changeThemeAC = (theme:string) => {
    return {
        type:'CHANGE-THEME',
        payload: {
            theme
        }

    } as const
}; // fix any