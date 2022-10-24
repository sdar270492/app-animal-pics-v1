import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, getUserLogin } from "../service/data-service";

function Login({ setToken, setProfile }) {
  const [error, setError] = useState();
  const navigate = useNavigate();

  // id resulto del JWT del token
  const id = '6136944fcd79ba24707e2f82';

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    login(form.username.value, form.password.value)
      .then((data) => {
        localStorage.setItem("token", data.token);
        setToken(data.token);

        getUserLogin(id)
          .then((data) => {
            setProfile(data);
          })
          .catch((err) => {
            setError(err.response.data.message);
          });

        navigate("/posts");
      })
      .catch((err) => {
        setError(err.response.data.message);
      });

  }

  return (
    <div>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          className="form-control mb-3"
          placeholder="username"
        />
        <input
          type="password"
          name="password"
          className="form-control mb-3"
          placeholder="password"
        />
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
