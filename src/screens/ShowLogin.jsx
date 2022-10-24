import Login from "../components/Login";

function ShowLogin({setToken, setProfile}) {
    return (
        <div>
            <Login setToken={setToken} setProfile={setProfile}/>
        </div>
    )
}

export default ShowLogin;