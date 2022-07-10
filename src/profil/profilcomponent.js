import React from "react";
import propTypes  from "prop-types";
function Profil(props) {
    
    return ( 
    <div className="text-center">
        
        <p className="fs-1 fw-bold text-danger">{props.fullname}</p>
        <div>{props.children}</div>
        <p className="fs-2">{props.profession}</p>
        <p >{props.bio}</p>
        <button className="btn btn-primary" onClick={()=>{props.handle(props.fullname)}}>The current user</button>
    </div>);
}
Profil.defaultProps ={
    fullname:'You'
}
Profil.propTypes={
    fullname:propTypes.string,
    bio:propTypes.string,
    profession:propTypes.string
}


export default Profil;