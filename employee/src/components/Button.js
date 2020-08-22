import React from "react";

function Button(props) {
    return (
        <div className="container">

            <button onClick={props.handleButtonClick} type="button" className="btn btn-info">{props.children}</button>
            

        </div>
    )
}

export default Button;






