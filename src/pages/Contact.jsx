import React from 'react'

function Contact(){
    return <div className="container Contact">
        <div className="row Contact__row">
        <div className="col-5 Contact__row--column-1 d-flex flex-column  align-items-end justify-content-center">
            <p>
            If you want to get in touch with me to ask something, say hi, or share with me whatever related to web technologies you can send me an email.
            </p>
            <p>
            Also you can find me on social media in the following links &#128073;
            </p>
        </div>
        <div className="Contact__row--column-2 col-7  d-flex flex-column  align-items-end justify-content-center"> 
            <h1 className="title">Let's talk!</h1>
            <div className="Container_link d-flex flex-row justify-content-end ">
                <div>
                <a className="m-4 Container_link--a" target="_blank" href="https://www.google.com">LinkedIn</a>
                <div className="div_animation"></div>
                </div>
                <div>
                <a className="m-4 Container_link--a"  href="">GitHub</a>
                <div className="div_animation"></div>
                </div>
                <div>
                <a  className="m-4 Container_link--a" href="">Email</a>
                <div className="div_animation"></div>
                </div>
            </div>
        </div>
        </div>
        
    </div>

}

export default Contact