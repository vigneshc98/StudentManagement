import { SETDATA } from "../action/actionTypes";

const initialState = {"id":"" ,"name":"" ,"usn":"" ,"dept":"" ,"sem":"","collgefees":0,"busfees":0, "activityfee":0, "ESDPfee":0, "alumnifee":0}

export  const reducer = (state=initialState, action)=>{

    switch(action.type){
        case SETDATA: state = { ...action.payload }
                        console.log(state);
                        return state;
        default: return "ALMOST THERE...NQ"

    }
}