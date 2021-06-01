/* eslint-disable no-duplicate-case */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
import React, { useReducer } from 'react';

const intialJam = { countJam: 1 } 
const intialMenit = { countMenit: 0 } 

function setupReducer(state, action) {
    switch(action.type) {
        case 'tambahJam':
            return { countJam: state.countJam + 1 };
        case 'tambahMenit':
            return { countMenit: state.countMenit + 1 };
        case 'defaultJam':
            return { countJam: state.countJam = 1 };
        case 'defaultMenit':
            return { countMenit: state.countMenit = 0 };
    }
}   

export default function reducer() {

    const [stateJam, dispatchjam] = useReducer(setupReducer, intialJam);
    const [stateMenit, dispatchMenit] = useReducer(setupReducer, intialMenit);
    
    return (
        <div>
            <h2> Membuat useReducer </h2>

            <p> 
                Waktu yang diubah : 
                { (stateJam.countJam > 24) ? dispatchjam({type: 'defaultJam'}) : stateJam.countJam }.
                { (stateMenit.countMenit > 60) ? dispatchMenit({type: 'defaultMenit'}) : (stateMenit.countMenit < 10) ? "0" + stateMenit.countMenit : stateMenit.countMenit } 
            </p>

            <button style={{marginRight: 20}} onClick={() => dispatchjam({type: 'tambahJam'})} > Ubah Jam </button> 
            <button onClick={() => dispatchMenit({type: 'tambahMenit'})} > Ubah Menit </button> 
        </div>
    )
}
