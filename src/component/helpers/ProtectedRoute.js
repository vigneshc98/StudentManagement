import React, {useContext} from 'react'
import {BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import { AuthContextApi } from '../contextApi/AuthContextapi'
import { Navigate } from 'react-router'

const ProtectedRoute = ({children, props}) => {
    const context = useContext(AuthContextApi);
    const {user} = context;
    console.log('in protected route:',user); 
    if(user===null){
        return(<Navigate to='/' />) 
    }
    return (
        <> 
         {props,children}
        </>
    )
}

export default ProtectedRoute
