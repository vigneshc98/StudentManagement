import React from 'react';
import loader from './loader.gif';
import css from './spinner.module.css';

const  Spinner =()=> {
        return (
            <div className="text-center">
                <img className={css.spinner} src={loader} alt="loading..." />
                {/* <p>loading...</p> */}
            </div>
        )
    
}
export default Spinner;