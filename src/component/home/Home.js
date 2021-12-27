import React from 'react'
import homeCss from './home.module.css'
let url = './images/BG.jpg'

const Home = () => {
    return (
        <div className={homeCss.container}>
            <div className={homeCss.subcontainer1}>
                 <div className={homeCss.textDiv}>
                    <h2 className={homeCss.textDivPH}> MITE ADMIN PORTAL</h2>
                    <p className={homeCss.textDivPH}>please SignIn to acess more</p>
                </div>
                <div className={homeCss.imgDiv}>
                    <img src={url} alt="" />
                </div>
           </div>
        </div>
    )
}

export default Home
