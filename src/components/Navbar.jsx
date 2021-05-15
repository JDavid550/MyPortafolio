import React from 'react'

class Navbar extends React.Component{
    render(){
        return <div className="Navbar d-flex align-items-center row p-5 w-100  h-15">
                <div className="col-6">
                    <h1>JD</h1>
                </div>
                <div className="col-6 d-flex flex-row justify-content-evenly">
                    <span>Work</span>
                    <span>About</span>
                    <span>Contact</span>
                </div>
        </div>
    }
}

export default Navbar