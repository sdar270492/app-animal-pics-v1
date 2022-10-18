function Profile(/*{user}*/) {
    // console.log(user);
    return (
        <div className="">
            <div className="d-flex justify-content-center">
                <div>
                    {/* <img className="rounded-circle" src={user.avatar} width="100" height="100" alt="logo" /> */}
                    <img className="rounded-circle" src="https://p.kindpng.com/picc/s/285-2855863_a-festival-celebrating-tractors-round-profile-picture-placeholder.png" width="100" height="100" alt="logo" />
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <div className="user">
                    {/* <p>@{user.username}</p> */}
                    <p>@Zersh</p>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <div className="cajaTexto">
                    <p className="text-center">
                        {/* {user.bio} */}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda reprehenderit excepturi odio fugit aspernatur.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Profile;