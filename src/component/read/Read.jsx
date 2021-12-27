import React,{useState,useEffect, Fragment} from 'react';
import axios from 'axios';
import PostData from '../hoc/PostDataHOC';
import { Link } from 'react-router-dom';
import css from './read.module.css'
import Spinner from '../spinner/Spinner';
import { toast } from 'react-toastify';

const Read = () => {

    const apiKey = process.env.REACT_APP_API_KEY;

    const [studList, setstudList] = useState([]);
    const [searchUSN, setSearchUSN] = useState("")

    const [hide, setHide] = useState(true);

    const [loading, setLoading] = useState(false)

    const getData = () =>{
        setLoading(true);
        axios.get(`${apiKey}?search=${searchUSN}`)
        .then((response)=>{
            setLoading(false)
            setstudList(response.data);
        })
        .catch((error)=>{
            console.log(error);
        });
    }
  

    useEffect(() => {
        getData();
        localStorage.removeItem("ID");
    }, [])

    const sendData = (id) => {
        localStorage.setItem("ID",id);
    } 
    let i=1;

    const Show = (props) => {
        let {data} = props;
        return(
            <>
                <div className={css.for3Btn}>
                    <div>
                        <Link to="/update" >
                            <button onClick={()=> sendData(data.id)} className={css.UpBtn}><i className="fas fa-user-edit"></i>&ensp;Update</button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/delete" >
                            <button onClick={()=> sendData(data.id)} className={css.DeleteBtn}><i className="fas fa-user-times"></i>&ensp;Delete</button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/feedetail" >
                            <button onClick={()=> sendData(data.id)} className={css.FeeDetBtn}><i className="fas fa-rupee-sign"></i>&ensp;Fee Detail</button>
                        </Link>
                    </div>
                </div>
            </>
        )
    }

    let Hidden = () => {
        return (
            <Fragment>
                <div>
                    <i className="fas fa-edit" onClick={()=>{setHide(false)}} style={{cursor:'pointer'}}></i>
                </div>
            </Fragment>
        )
    }

    return (
        <div className={css.container}>
            <div className={css.subContainer}>
               <div className={css.searchDiv} >
                    <div className={css.inputMain}>
                         <label htmlFor="search" className={css.label}>Search Sudent</label>
                         <input type="search" id="search" placeholder="Enter name/usn" onChange={(e)=>{setSearchUSN(e.target.value)}} className={css.input} />
                    </div>
                    <div>
                        <button onClick={getData} className={css.searchBtn}>Search</button>
                    </div>
               </div>
                <div className={css.addStudDiv}>
                    <Link to="/create">
                            <button className={css.addBtn}><i className="fas fa-user-plus" style={{color:'white'}}></i>&ensp;Add Student</button>
                    </Link>
                </div>

           </div>
           <div className={css.subContainer2}>
                <table className={css.table} >
                    <thead className={css.thead}>
                        <tr>
                            <th>SI</th>
                            <th>Name</th>
                            <th>Usn</th>
                            <th>Department</th>
                            <th>Semester</th>
                            {hide ? <th className={css.thAction}>Actions</th> : <th className={css.thAction2}>Actions&ensp;<i className="fas fa-edit" onClick={()=>{setHide(true)}} style={{cursor:'pointer'}}></i></th>}
                        </tr>
                    </thead>
                    {loading && <Spinner/>}
                    {
                        studList.map(data => {return (
                                <tbody key={data.id} className={css.tbody}>
                                    <tr className={css.tr}>
                                        <td>{i++}</td>
                                        <td>{data.name}</td>
                                        <td>{data.usn}</td>
                                        <td>{data.dept}</td>
                                        <td>{data.sem}</td>
                                        <td>{hide ? <Hidden/> : <Show data={data} /> }</td>
                                    </tr>
                                </tbody>
                        )})
                    }
                </table>
         </div>  
       
        </div>
    )
}

export default PostData(Read)
