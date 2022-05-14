import React from "react";

//props->condistional statement
function Condition(props) {
    const visited = props.visited;
    
    if (visited) {
        return <Greeting1 />;
    }
    return <Greeting2 />;
}

//we can add in another 
function Greeting1() {
   
    return <h2>visited: Welcome to the event:</h2>;
}
function Greeting2() {
    return <h2>not visited: Please come to the event:</h2>;
}
export default Condition