import React,{useState} from 'react'
import PostData from '../hoc/PostDataHOC';
import { useDispatch} from 'react-redux'
import { actionCreators } from '../state/index'
import css from './create.module.css'
let url = './images/addUserIcon.ico'

const Create = (props) => {

    const dispatch = useDispatch();

    let { crudMethod} = props;

    const [studentData, setStudentData] = useState({ 
        id:"",
        name:"",
        usn:"",
        dept:"",
        sem:""
    })

    let {id,name, usn , dept, sem} = studentData;

    let hname, value;
    const getData = (e) => {
        e.preventDefault();
        hname=e.target.name;
        value=e.target.value;
        setStudentData({...studentData, [hname]: value})
    }

    const saveInRedux = () =>{
        dispatch(actionCreators.setName(id,name,usn,dept,sem));
    }

    const reset = () => {
        setStudentData({...studentData, id:"",name:"",usn:"",dept:"",sem:""})
    }

    return (
        <div className={css.container}>
            <div className={css.subContainer}>
                <div>
                    <h1 className={css.h1}>Enter details to Add Student</h1>
                </div>
                <div className={css.subContainer2}>
                    <div className={css.imgDiv}>
                        <img src={url}></img>
                    </div>
                    <div >
                        <form onSubmit={crudMethod}>
                            
                                <div className={css.mainInput}>
                                    <div className={css.subInput}>
                                        <label htmlFor="name">Name</label>
                                        <input type="text" id="name" name="name" value={name} onChange={getData} placeholder="Enter student name" required className={css.input} />
                                    </div>
                                    <div className={css.subInput}>
                                        <label htmlFor="usn">Usn</label>
                                        <input type="text" id="usn" name="usn" value={usn} onChange={getData} placeholder="Enter student usn" required className={css.input} />
                                    </div>
                                </div>
                                <div className={css.mainInput}>
                                    <div className={css.subInput}>
                                        <label htmlFor="dept">Department</label>
                                        <input type="text" id="dept" name="dept" value={dept} onChange={getData} placeholder="Enter student department" required className={css.input} />
                                    </div>
                                    <div className={css.subInput}>
                                        <label htmlFor="sem">Sem</label>
                                        <input type="text" id="sem" name="sem" value={sem} onChange={getData} placeholder="Enter student sem" required className={css.input} />
                                    </div>
                                </div>
                            
                            <div className={css.btnDiv}>
                                <input type="reset" value="cancel" onClick={reset} className={css.btn1} />
                                <input type="submit" onClick={saveInRedux} value="Create" className={css.btn2} />
                            </div>
                        </form>
                    </div> 
                </div>
            </div>    
        </div>
    )
}

export default PostData(Create,"post")
