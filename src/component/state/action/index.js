// import { ADMIN_DETAIL } from "./actionTypes"
import { SETDATA } from "./actionTypes"

// export const getAdminDetail = (uname='', pass='') =>  {
//     return {
//         type:ADMIN_DETAIL,
//         payload:{"uname":uname, "pass":pass}
//     }
// }
export const setName = (id,sname,usn,dept,sem,collgefees=0,busfees=0,activityfee=0,ESDPfee=0,alumnifee=0) =>  {
    return {
        type:SETDATA,
        payload:{"id":id,"name":sname,"usn":usn,"dept":dept,"sem":sem,"collgefees":collgefees,"busfees":busfees,"activityfee":activityfee,"ESDPfee":ESDPfee,"alumnifee":alumnifee}
    }
}

