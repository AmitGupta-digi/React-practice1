import React from "react";

function IsLogin(props) {
    const IsLog = props.IsLog;
    if (IsLog) {
        return <Login />;
    }
    return <Logout />;
}

function Login() {
    return <label>You are logged in</label>
}
function Logout() {
    return <label>You are in guest mode </label>
}

export default IsLogin
