import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { doLogin } from "../actions/authActions";
import { homePath } from "../routes/routes";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth.userInfo);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const onChangeHandler = ({ target }) => {
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    if(userInfo?.token){
        navigate(homePath)
    }
  }, [userInfo])
  

  const validate = () => {
    if (!formData.username || !formData.password) {
      return true;
    }
    return false;
  };
  const submit = () => {
    dispatch(doLogin(formData));
  };
  return (
    <section className="vh-100" style={{ backgroundColor: "#508bfc" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong">
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Welcome to SimpleCart</h3>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="typeEmailX-2"
                    className="form-control form-control-lg"
                    onChange={onChangeHandler}
                    placeholder="Enter your Email"
                    value={formData.username}
                    name="username"
                  />
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="typePasswordX-2"
                    className="form-control form-control-lg"
                    onChange={onChangeHandler}
                    placeholder="Enter your Password"
                    value={formData.password}
                    name={"password"}
                  />
                </div>

                <button
                  className="btn btn-primary btn-lg btn-block"
                  disabled={validate()}
                  type="submit"
                  onClick={submit}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
