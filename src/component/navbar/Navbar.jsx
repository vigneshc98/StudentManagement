import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import './navCss.css'
let url = './images/navIcon.jpg'

const Navbar = () => {
    return (
        <section id="navbarBlock">
            <nav id="nav">
                <article id="article" >
                    <div id="leftNdiv">
                        <div className="logoBlock">
                            <img src={url} alt="img" />
                        </div>
                        <div className="textdiv">
                            <p>Mangalore Institute Of Technology And Engineering - [MITE]</p>
                        </div>
                    </div>
                    <div className="midNdiv">
                        <Link to="/main">
                           <p>Home</p>
                        </Link>
                    </div>
                    <div id="spclDesing">
                        <div className="triangle"></div>
                        <div className="menuBlock"> 
                         <Menu/>
                        </div>
                    </div>
                </article>
            </nav>
    </section>
    )
}

export default Navbar
