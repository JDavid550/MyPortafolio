import React from 'react'
import {Link} from 'react-router-dom'

class Navbar extends React.Component{
    render(){
        return <div className="Navbar d-flex align-items-center row px-0 py-2 m-0 h-15 ">
                <div className="col-6 px-4">
                    <Link className="Logo" to="/"><h1>JD</h1></Link>
                </div>
                <div className="col-6 d-flex flex-row justify-content-evenly p-0">
                    <Link className="Link" to="/Work">Work</Link>
                    <Link className="Link" to="/About">About</Link>
                    <Link className="Link" to="/Contact">Contact</Link>
                </div>
        </div>
    }
}

export default Navbar