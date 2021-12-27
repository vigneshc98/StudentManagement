import React,{useState, useEffect} from 'react'
import { useDispatch} from 'react-redux'
import { actionCreators } from '../state/index'
import PostDataHOC from '../hoc/PostDataHOC'
import axios from 'axios'
import css from './delete.module.css'
let url = './images/deleteUserIcon.png'

const Delete = (props) => {

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

    let {name, usn , dept, sem,id,collgefees,busfees,activityfee,ESDPfee,alumnifee} = studList;

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
        })
        .catch((error)=>{
            console.log(error);
        });
    }, [])

    const saveInRedux = () =>{
        dispatch(actionCreators.setName(id,name,usn,dept,sem,collgefees,busfees,activityfee,ESDPfee,alumnifee));
    }

    return (
         <>
            <div className={css.container}>
                <div className={css.subContainer1}>
                    <div>
                        <h1 className={css.h1}>Delete {name} ?</h1>
                    </div>
                    <div className={css.subContainer2}>
                        <div>
                            <img src={url} alt="" className={css.img} />
                        </div>
                        <div>
                            <form onSubmit={crudMethod}>
                                <div className={css.mainInput}>
                                    <div className={css.subInput}>
                                        <label htmlFor="name">Name</label>
                                        <input type="text" id="name" name="name" value={name} onChange={getData} readOnly className={css.input} />
                                    </div>
                                    <div  className={css.subInput}>
                                        <label htmlFor="usn">Usn</label>
                                        <input type="text" id="usn" name="usn" value={usn} onChange={getData} readOnly className={css.input} />
                                    </div>
                                </div>
                                <div className={css.mainInput}>
                                    <div className={css.subInput}>
                                         <label htmlFor="dept">Department</label>
                                         <input type="text" id="dept" name="dept" value={dept} onChange={getData} readOnly className={css.input} />
                                    </div>
                                    <div className={css.subInput}>
                                         <label htmlFor="sem">Sem</label>
                                         <input type="text" id="sem" name="sem" value={sem} onChange={getData} readOnly className={css.input} />
                                    </div>
                                </div>
                                <div className={css.btnDiv}>
                                    <input type="submit" onClick={saveInRedux} value="Delete" className={css.btn1} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
         </>
    )
}

export default PostDataHOC(Delete,"delete")
