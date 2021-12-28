import React from 'react'

const pageStyle = {
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    color: 'red'
}

const Error = () => {

    return (
        <div style={pageStyle}>
            <h1>404</h1>
            <h3>Page Not Found </h3>
        </div>
    )
}

export default Error
