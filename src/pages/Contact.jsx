import React from 'react'

function Contact(){
    return <div className="container Contact">
        <div className="row Contact__row">
        <div className="col-4 Home__row--column">
            <img src="" alt=""/>
        </div>
        <div className="Home__row--column col-8  d-flex flex-column  align-items-end justify-content-center"> 
            <h1 className="title">Let's talk!</h1>
            <div className="Container_link d-flex flex-row justify-content-end ">
                <a  target="_blank" href="https://www.google.com">LinkedIn</a>
                <a   href="">GitHub</a>
                <a   href="">Email</a>
            </div>
        </div>
        </div>
        
    </div>

}

export default Contact