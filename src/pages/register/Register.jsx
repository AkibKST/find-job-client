import Lottie from "lottie-react";
import React, { useContext } from "react";
import registerLottieData from "../../assets/lottie/register.json";
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogin from "../shared/SocialLogin";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    //password validation
    //show password validation error

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen text-center">
      <div className="hero-content flex-col lg:flex-row-reverse gap-24">
        <div className="text-center lg:text-left w-full ">
          <Lottie animationData={registerLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="ml-8 mt-4 py-4 text-3xl mx-auto font-bold">
            Register
          </h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control space-y-6">
              <label className="fieldset-label">Email</label>
              <input
                type="email"
                className="input"
                name="email"
                placeholder="Email"
              />
              <label className="fieldset-label">Password</label>
              <input
                type="password"
                className="input"
                name="password"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral p-4 w-full">Register</button>
            </div>
          </form>
          <div className="divide">Or</div>
          <div className="mt-4">
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
