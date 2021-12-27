import React,{Fragment,useContext} from 'react'
import { Link, Navigate } from 'react-router-dom';
import { AuthContextApi } from '../contextApi/AuthContextapi';
import css from './menu.module.css';

const Menu = () => {

    const context = useContext(AuthContextApi);
    const {user, logOut} = context;


    const handleSignOut = async () => {
        try {
            await logOut(); 
            return (<Navigate to="/" />)
        } catch (error) {
            console.log(error);
        }
    }

    let GuestUser = () => { 
        return (
        <Fragment>
        <div className={css.menuContainer}>
            <Link to="/login" className={css.a}>
                <div className={css.subContainer}>
                    <i className="fa fa-sign-out" aria-hidden="true" style={{color:'white'}}></i>
                    <h4 className={css.H4} >SignIn</h4>
                </div>
            </Link>
        </div>
      </Fragment>
        )
    }

    let AuthenticatedUser = () => {
       return (
        <Fragment>
          <div className={css.menuContainer} >
              <Link to="/" className={css.a}>
                  <div className={css.subContainer}>
                    <i className="fa fa-sign-out" aria-hidden="true" style={{color:'white'}}></i>
                    <h4 onClick={handleSignOut} className={css.H4} >SignOut</h4>
                  </div>
              </Link>
          </div>
        </Fragment>
        )
    }
    // console.log('menu:-',ContextUsername,'-',ContextPassword);

    return (
        <nav id="mainNav">
            <ul>
                <li className={css.li}>
                    {user ?  <AuthenticatedUser/> :  <GuestUser/>  }
                </li>
            </ul>
        </nav>
    )
}

export default Menu
