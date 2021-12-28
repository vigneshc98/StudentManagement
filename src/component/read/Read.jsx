import React,{useState,useEffect, Fragment} from 'react';
import axios from 'axios';
// import PostData from '../hoc/PostDataHOC';
import { Link } from 'react-router-dom';
import css from './read.module.css'
import Spinner from '../spinner/Spinner';
import {useDispatch} from 'react-redux'
import { actionCreators } from '../state/index'

const Read = () => {

    const dispatch = useDispatch();

    const apiKey = process.env.REACT_APP_API_KEY;
    const EnvPageSize = Number(process.env.REACT_APP_PAGE_SIZE);

    const [studList, setstudList] = useState([]);
    const [searchUSN, setSearchUSN] = useState("");
    const [pageSize, setPagesize] = useState(EnvPageSize);

    const [totLength, setTotLength] = useState(null);

    const [hide, setHide] = useState(true);

    const [loading, setLoading] = useState(false)

    const getData = () =>{
        searchUSN=='' && setLoading(true);
        axios.get(`${apiKey}?search=${searchUSN}&page=1&limit=${pageSize}`)
        .then((response)=>{
            setLoading(false)
            setstudList(response.data);
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    useEffect(() => {
        getData();
        axios.get(`${apiKey}`)
        .then((response)=>{
            setTotLength((response.data).length);
        })
        .catch((error)=>{
            console.log(error);
        });
        localStorage.removeItem("ID");
        dispatch(actionCreators.setName(undefined));
    }, [])

    useEffect(() => {
        getData();
    }, [pageSize]);

    const sendData = (id) => {
        localStorage.setItem("ID",id);
    }

    const incPageSize = () => {
        setPagesize(pageSize+10, console.log('pageSize:',pageSize));
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
            <div className={css.loadMore}>
                    {loading && <Spinner/>}
                    {totLength > pageSize && <button onClick={incPageSize} className={css.loadMoreBtn}><i class="fas fa-chevron-circle-down" style={{color:'white'}}></i>&ensp;Load more</button>}
             </div>
        </div>
    )
}

export default Read
