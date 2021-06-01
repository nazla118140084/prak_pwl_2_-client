/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';

export default function state() {

    const [jam, setJam] = useState(1);
    const [menit, setMenit] = useState(0);

    return (
        <div>
            
            <h2> Membuat useState </h2>
            
            <p> Atur Waktu Sekarang : { (jam > 24) ? setJam(1) : jam }.{ (menit > 60) ? setMenit(0) : (menit < 10) ? "0" + menit : menit }</p>

            <button style={{marginRight: 20}} onClick={() => setJam(jam + 1)} > Rubah Waktu Jam </button> 
            <button onClick={() => setMenit(menit + 1)} > Rubah Waktu Menit </button> 

        </div>
    )
}
