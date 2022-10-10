import moment from 'moment';

// var fecha = new Date("2022-10-02 19:00:00").getTime();
// var time =  moment(fecha).fromNow();

function Post({ img, fecha, description, user, comments, likes }) {

    let kLikes = '';
    if (likes >= 1000) {
        kLikes = (likes / 1000).toFixed(1) + 'k';
    } else {
        kLikes = likes;
    }

    fecha = Math.floor(new Date(fecha).getTime());
    let countComments = comments.length;

    return (
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 mt-3">
            <div className="card card-size">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="d-flex">
                        <p className="me-auto timePost">{moment(fecha).fromNow()}</p>
                        <p className="like">
                            <i className="bi bi-heart-fill"></i>
                            &nbsp;{kLikes}
                        </p>
                    </div>
                    <p className="d-flex user">{user}</p>
                    <p className="d-flex">{description}</p>
                    <p className="d-flex none_a">
                        <i className="bi bi-chat-right"></i>&nbsp;Comments ({countComments})
                    </p>
                </div>
            </div>
        </div>
    );
}



export default Post;