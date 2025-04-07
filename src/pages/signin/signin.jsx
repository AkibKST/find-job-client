import Lottie from "lottie-react";
import React, { useContext } from "react";
import signinLottieData from "../../assets/lottie/signIn.json";
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogin from "../shared/SocialLogin";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";

  //handle sign in from
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log("sign in", result.user.email);
        const user = { email: result.user.email };
        // axios
        //   .post("http://localhost:5000/api/auth/jwt-access-token", user, {
        //     withCredentials: true,
        //   })
        //   .then((res) => console.log(res.data));
        navigate(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  //----------------------------
  return (
    <div className="hero bg-base-200 min-h-screen text-center">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-2/4">
          <Lottie animationData={signinLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="ml-8 mt-4 py-4 text-3xl mx-auto font-bold">Sign In</h1>
          <form onSubmit={handleSignIn} className="card-body">
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
              <button className="btn btn-neutral mt-4 w-full">Sign In</button>
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

export default SignIn;
