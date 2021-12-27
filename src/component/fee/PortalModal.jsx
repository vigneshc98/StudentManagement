import React from 'react'
import ReactDom from 'react-dom'
import css from './portal.module.css'

const PortalModal = ({isOpen,setIsOpen,children}) => {

    if(!isOpen){
        return null;
    }

    return ReactDom.createPortal(
      <>
        <div className={css.background} onClick={()=>{setIsOpen(false)}}></div>
        <div className={css.subContainer}> 
            {children}
        </div>
      </>,
        document.getElementById('portal')
      )
}

export default PortalModal
