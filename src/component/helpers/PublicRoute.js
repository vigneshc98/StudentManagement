import React, {useContext} from 'react'
import { AuthContextApi } from '../contextApi/AuthContextapi'
import { Navigate } from 'react-router';

const PublicRoute = ({children, props}) => {
    const context = useContext(AuthContextApi);
    const {user} = context;

    if(!user){
        return ( <>{children}</> )
    }

    return (
        <>
           <Navigate replace to="/main"/>
        </>
    )
}

export default PublicRoute
