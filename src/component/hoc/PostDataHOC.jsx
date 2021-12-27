import React from 'react'
import axios from 'axios'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router'
import { toast } from 'react-toastify'

const PostData = (Wrappedcomponent,hold,rout) => {

    const apiKey = process.env.REACT_APP_API_KEY;

    const Wrappedfunction = (props) => {

        const navigate = useNavigate()
        
        const state = useSelector(state =>({id:state.redu.id, name: state.redu.name, usn:state.redu.usn, dept:state.redu.dept, sem:state.redu.sem, collgefees:state.redu.collgefees, busfees:state.redu.busfees, activityfee:state.redu.activityfee, ESDPfee:state.redu.ESDPfee, alumnifee:state.redu.alumnifee}));
        const {id,name, usn, dept, sem, collgefees, busfees, activityfee, ESDPfee, alumnifee} = state;

        const postdata = (e) => {
            e.preventDefault();
            var axiosType;
            let varid;
            let res;

            switch(hold){
                case 'post': axiosType=axios.post; break;
                case 'put': axiosType=axios.put;
                            varid= id; break;
                case 'delete': res= prompt("Please enter student USN to confirm delete");
                               (res===usn) ? axiosType=axios.delete : navigate('/');
                                break;
                default: navigate('/')
            }
            
            if((name&&usn&&dept&&sem&&collgefees&&busfees&&activityfee&&ESDPfee&&alumnifee)!=undefined || hold==='delete'){
                e.preventDefault();
                const toastPromise= new Promise((resolve, reject) => {
                    axiosType(`${apiKey}/${id===''? '': id}`,{name,usn,dept,sem,collgefees,busfees,activityfee,ESDPfee,alumnifee})
                   .then(()=>{
                    if(hold!='put'){
                        setTimeout(() => {
                            navigate('/'); 
                        }, 400);
                    }else{
                        window.location.assign(`/${rout}`)
                    }
                    resolve();
                    })
                    .catch((error)=>{
                        reject();
                        console.log(error);
                        navigate('/')
                    });
                    
                })
                toast.promise(toastPromise, {
                    pending:"processing request",
                    success:"Task Successfull",
                    error:"Task failed"
                })
                toastPromise();
            } 

        }
        return <Wrappedcomponent {...props} crudMethod={postdata} />
    }
    return Wrappedfunction;
}

export default PostData
