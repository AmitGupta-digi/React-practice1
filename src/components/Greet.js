import React from "react";

function Greet(props) {
    return <div> <h1>Hello By Component </h1>
        <h2>Welcome {props.Name}</h2>
    </div>
}
export default Greet;