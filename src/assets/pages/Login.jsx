import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./style/login.css";

const Login = () => {
  const { handleSubmit, register, reset } = useForm();

  const submit = (data) => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/users/login";
    axios
      .post(URL, data)
      .then((res) => {
        console.log(res.data.data);
        localStorage.setItem("token", res.data.data.token);
      })
      .catch((err) => console.log(err));
    reset({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login-container">
      <div className="login__div-container">
        <h2 className="sign-in">Sign In</h2>
        <div className="login__div-data">
          <h3 className="login__title-data">Test Data</h3>
          <p className="login__gmail-data">gmail</p>
          <p className="login__password-data">password</p>
        </div>
        <form className="login__form" onSubmit={handleSubmit(submit)}>
          <div className="login__div-email">
            <label className="login__label-email">Email</label>
            <input
              placeholder="Your Email"
              className="login__email"
              type="text"
              id="email"
              {...register("email")}
            />
          </div>
          <div className="login__div-password">
            <label className="login__label-password">Password</label>
            <input
              className="login__password"
              type="password"
              id="password"
              {...register("password")}
            />
          </div>
          <button className="login__btn">Sign In</button>
        </form>
        <p className="login__parrafo">Don't have an account?</p>
        <button className="login__btn-create">create your user account </button>
      </div>
    </div>
    // <div>
    //   <form onSubmit={handleSubmit(submit)}>
    //     <div>
    //       <label htmlFor="email">Email</label>
    //       <input type="text" id="email" {...register("email")} />
    //     </div>
    //     <div>
    //       <label htmlFor="password">Password</label>
    //       <input type="password" id="password" {...register("password")} />
    //     </div>
    //     <button>Login</button>
    //   </form>
    // </div>
  );
};

export default Login;
