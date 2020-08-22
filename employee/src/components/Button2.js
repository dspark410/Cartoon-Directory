import React from "react";

function Button2(props) {
    return (
        <div className="container">

            <button onClick={props.handleButtonClickDSC} type="button" className="btn btn-info">{props.children}</button>
            

        </div>
    )
}

export default Button2;