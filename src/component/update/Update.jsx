import React,{useState, useEffect} from 'react'
import { useDispatch} from 'react-redux'
import { actionCreators } from '../state/index'
import PostDataHOC from '../hoc/PostDataHOC'
import axios from 'axios'
import css from './update.module.css'
let url='./images/updateUserIcon.ico'

const Update = (props) => {

    const apiKey = process.env.REACT_APP_API_KEY;

    const dispatch = useDispatch();

    let { crudMethod} = props;

    const [studList, setstudList] = useState({
        id:"",
        name:"",
        usn:"",
        dept:"",
        sem:"",
        collgefees:"",
        busfees:"",
        activityfee:"",
        ESDPfee:"",
        alumnifee:""
    });
    const [nameHold, setNameHold] = useState("")

    let {id,name, usn , dept, sem,collgefees,busfees,activityfee,ESDPfee,alumnifee} = studList;

    let hname, hvalue;
    
    const getData = (e) => {
        e.preventDefault();
        hname=e.target.name;
        hvalue=e.target.value;
        setstudList({...studList, [hname]: hvalue})
    }

    useEffect(() => {
        let id = localStorage.getItem("ID");
        axios.get(`${apiKey}/${id}`)
        .then((response)=>{
             setstudList(response.data);
             let nameHold = response.data.name;
             setNameHold(nameHold)
        })
        .catch((error)=>{
            console.log(error);
        });
    }, [])

    const saveInRedux = (e) =>{
        dispatch(actionCreators.setName(id,name,usn,dept,sem,collgefees,busfees,activityfee,ESDPfee,alumnifee));
    }

    const  reset = () => {
        setstudList({...studList, name:"",usn:"",dept:"",sem:""})
    }
    return (
        <>
            <div className={css.container}>
                <div className={css.subContainer1}>
                    <div>
                        <h1 className={css.h1}>Update {nameHold}</h1>
                    </div>
                    <div className={css.subContainer2}>
                        <div>
                            <img src={url} alt="" />
                        </div>
                        <div>
                            <form onSubmit={crudMethod}>
                                <div className={css.mainInput}>
                                    <div className={css.subInput}>
                                        <label htmlFor="name" className={css.label}>Name</label>
                                        <input type="text" id="name" name="name" value={name} onChange={getData} placeholder="enter student name" required className={css.input} />
                                    </div>
                                    <div  className={css.subInput}>
                                        <label htmlFor="usn" className={css.label}>Usn</label>
                                        <input type="text" id="usn" name="usn" value={usn} onChange={getData} placeholder="enter student usn" required className={css.input} />
                                    </div>
                                </div>
                                <div className={css.mainInput}>
                                    <div className={css.subInput}>
                                         <label htmlFor="dept" className={css.label}>Department</label>
                                         <input type="text" id="dept" name="dept" value={dept} onChange={getData} placeholder="enter student department" required className={css.input} />
                                    </div>
                                    <div className={css.subInput}>
                                         <label htmlFor="sem" className={css.label}>Sem</label>
                                         <input type="text" id="sem" name="sem" value={sem} onChange={getData} placeholder="enter student sem" required className={css.input} />
                                    </div>
                                </div>
                                <div className={css.btnDiv}>
                                    <input type="reset" onClick={reset} value="clear" className={css.btn1} />
                                    <input type="submit" onClick={saveInRedux} value="update" className={css.btn2} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostDataHOC(Update,"put","update")
