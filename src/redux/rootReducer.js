import {CHANGE_THEME, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT} from "./types";
import {combineReducers} from "redux";

function counterReducer(state = 0, action) {
    if (action.type === INCREMENT) {
        return state + 1
    } else if (action.type === DECREMENT) {
        return state - 1
    }

    return state
}

const initialTheme = {
    value: 'light',
    btnDisabled: false
}


function themeReducer(state = initialTheme, action) {
    switch (action.type) {
        case CHANGE_THEME:
            return {...state, value: action.payload}
        case DISABLE_BUTTONS:
            return {...state, btnDisabled: true}
        case ENABLE_BUTTONS:
            return {...state, btnDisabled: false}

        default: return state
    }

    return state
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer,
})