import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const login = async () => {
    console.log("Someone Loged in", formData);
    let responseData;
    await fetch('http://localhost:4000/Login',{
      method:"POST",
      headers:{
        Accept: 'application/formData',
        "content-Type":'application/formData',
      },
      body : JSON.stringify(fromData)
    }).then((response) => response.json()).then((data) => responseData)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace('/');
    }
    else{
      alert(responseData.errors)
    }
  };
  const signup = async () => {
    console.log("new user i guess", formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:"POST",
      headers:{
        Accept: 'application/formData',
        "content-Type":'application/formData',
      },
      body : JSON.stringify(fromData)
    }).then((response) => response.json()).then((data) => responseData)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace('/');
    }
    else{
      alert(responseData.errors)
    }
  };

  return (
    <section className="max_padd_container flexcenter flex-col pt-32">
      <div className="max-w-[555px] h-[600px] bg-white m-auto px-14 py-10 rounded-md">
        <h3 className="h3">{state}</h3>
        <div className="flex flex-col gap-4 mt-7">
          {state === "Sign Up" ? (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Enter your name"
              className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
            />
          ) : (
            ""
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="Email"
            placeholder="Enter your email id"
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Enter your password"
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
          className="btn_secondary_rounded my-4 w-full !rounded-md"
        >
          Continue
        </button>

        {/* Toggle between "Login" and "Sign Up" */}
        {state === "Login" ? (
          <p className="text-black font-bold">
            Don't have an account?
            <span
              className="text-secondary underline cursor-pointer"
              onClick={() => setState("Sign Up")}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="text-black font-bold">
            Already have an account?
            <span
              className="text-secondary underline cursor-pointer"
              onClick={() => setState("Login")}
            >
              Login
            </span>
          </p>
        )}

        <div className="flexcenter mt-6 gap-3">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </section>
  );
};

export default Login;
