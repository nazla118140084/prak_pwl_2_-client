import React from 'react'
import { connect } from 'react-redux';

function setTime(props) {
    return (
        <div>
            <h2> Membuat Redux </h2> 

            <button style={{marginRight: 20}} onClick={props.tambahJam} > Ubah Jam </button> 
            <button onClick={props.tambahMenit} > Ubah Menit </button> 

            <p> 
                Waktu yang diubah : 
                { (props.countJam > 24) ? props.defaultJams : props.countJam }.
                { (props.countMenit > 60) ? props.defaultMenit : (props.countMenit < 10) ? "0" + props.countMenit : props.countMenit } 
            </p>
        </div>
    )
}

const mapsStateToProps = (state) => {
    return {
        countJam: state.countJam,
        countMenit: state.countMenit,
    }
}

const mapsDispatchtoProps = (dispatch) => {
    return {
        tambahJam:      () => dispatch({type: 'tambahJam'}),
        tambahMenit:    () => dispatch({type: 'tambahMenit'}),
        defaultJams:    () => dispatch({type: 'defaultJam'}),
        defaultMenit:   () => dispatch({type: 'defaultMenit'})
    }
}

export default connect(mapsStateToProps, mapsDispatchtoProps)(setTime); 
