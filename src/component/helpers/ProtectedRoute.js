import React, {useContext} from 'react'
import {BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import { AuthContextApi } from '../contextApi/AuthContextapi'
import { Navigate, useNavigate } from 'react-router'

const ProtectedRoute = ({children, props}) => {
    const context = useContext(AuthContextApi);
    const {user} = context;
    let navigate = useNavigate();
    console.log('in protected route:',user); 
    if(user===null){
        // return(<Navigate replace to='/' />) 
        navigate("/")
    }
    return (
        <> 
         {props,children}
        </>
    )
}

export default ProtectedRoute
