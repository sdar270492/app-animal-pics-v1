import Profile from "../components/Profile";

function ShowProfile({profile, token, setToken}) {
    return (
        <div>
            <Profile profile={profile} token={token} setToken={setToken}/>
        </div>
    )
}

export default ShowProfile;