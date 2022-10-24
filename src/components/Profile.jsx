function Profile({profile}) {

    return (
        <div className="mt-5">
            <div className="d-flex justify-content-center">
                <div>
                    <img className="rounded-circle" src={profile.avatar} width="100" height="100" alt="logo" />
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <div className="user">
                    <p>@{profile.username}</p>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <div className="cajaTexto">
                    <p className="text-center">
                        {profile.bio}
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Profile;