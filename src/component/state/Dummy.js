import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { actionCreators } from './index'

const Dummy = () => {
    const state = useSelector(state => state.redu)
    const dispatch = useDispatch();

    // const setdata = (data) => {
    //     dispatch(actionCreators.setName(data));
    // }

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={()=>{dispatch(actionCreators.setName("vignesh"));}}>click here</button>
        </div>
    )
}

export default Dummy
