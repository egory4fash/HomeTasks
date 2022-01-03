import React from 'react'

const errorStyle = {
    display: 'flex',


    justifyContent: 'center',
    backgroundColor: 'black',


}

function Error404() {
    return (
        <div style={errorStyle}>
            <img src="https://image.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg"/>
        </div>
    )
}

export default Error404
