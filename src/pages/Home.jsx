import React from 'react'

function Home(){
    return <div className="container Home">
        <div className="row Home__row">
        <div className="col-4 Home__row--column">
            <img src="" alt=""/>
        </div>
        <div className="Home__row--column col-8  d-flex flex-column  align-items-end justify-content-center"> 
            <h1 className="title">Hello, I'm Juan David   <span className="title_span">&#160;</span><br/> and I'm a Frontend Developer<span className="title_span">&#160;</span></h1>
            {/* <h1 className="title">and I'm a Frontend Developer <span className="title_span">&#160;</span></h1> */}
        </div>
        </div>
        
    </div>

}

export default Home