import React from 'react'
// import './home2.css'
import home2css from './homee2.module.css'
let url = './images/admin.jpg'

const Home2 = () => {
    return (
        <div className={home2css.containerHome2} >
            <div className={home2css.textdiv}>
                <h2 className={home2css.h2}>Why Admin Portal?</h2>
                <div>
                    <p className={home2css.p}>Through the Admin Portal, you can securely store, share, and manage administrative and non-administrative account passwords for target systems, domains, and databases. </p>
                    <p className={home2css.p}> By using Privileged Access Service to manage administrative and shared account passwords, you can securely store encrypted passwords and control how frequently they are reset. By adding accounts with managed passwords and only granting specific privileges, you can share common accounts without members of different work groups knowing administrative account passwords.</p>
                    <p className={home2css.p}> Using the stored account information, administrators with the proper permissions can log on transparently without providing a password and open remote sessions on target servers and network devices to perform everyday tasks, diagnose problems, or fix issues. In addition, by requiring users to check out and check in stored passwords when they are not logging on transparently, you can prevent the reuse of shared account passwords for administrative activity.</p>
                    <p className={home2css.p}> </p>
                </div>
                <div>
                    <img src={url} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home2
