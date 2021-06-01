/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import SetTime from './redux/setTime'

const initialState = { countJam: 1, countMenit: 0 } 

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'tambahJam':
            return { ...state, countJam: state.countJam + 1 };
        case 'tambahMenit':
            return { ...state, countMenit: state.countMenit + 1 };
        case 'defaultJam':
            return { ...state, countJam: state.countJam = 1 };
        case 'defaultMenit':
            return { ...state, countMenit: state.countMenit = 0 };
    }

    return state;
}

const store = createStore(reducer);

export default function redux() {
    return (
        <div>
            <Provider store={store}>
                <SetTime />
            </Provider>  
        </div>
    )
}
