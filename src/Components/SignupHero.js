import React, { useState } from "react";

const SignUp = () => {

  const [formVals, setformVals] = useState({
    email:'',
    firstName:'',
    lastName:'',
    password:'',
    confirmPass:''
  });

  const formHandler = (e) =>{

    const nextState = {
      ...formVals,
      [e.target.name]: e.target.value,
      
    };
    setformVals(nextState);
  }

    return(
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Email" name="email" className="input input-bordered" value={formVals.email} onChange={formHandler} autoComplete="on"/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input type="text" placeholder="First Name" name="firstName" className="input input-bordered" value={formVals.firstName} onChange={formHandler} autoComplete="on"/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input type="text" placeholder="Last Name" name="lastName" className="input input-bordered" value={formVals.lastName} onChange={formHandler} autoComplete="on"/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="Password" name="password" className="input input-bordered" value={formVals.password} onChange={formHandler} autoComplete="off"/>
                <label className="label">
                  <span className="label-text-alt text-error hidden">Password should be at least 8 characters</span>
                
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Reenter Password</span>
                </label>
                <input type="password" placeholder="Reenter Password" name="confirmPass" className="input input-bordered" value={formVals.confirmPass} onChange={formHandler} autoComplete="off"/>
                <label className="label">
                  <span className="label-text-alt text-error hidden">Passwords don't match</span>
                
                </label>
              </div>
              
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </div>
            </form>
          </div>
          
        </div>
      </div>
    );
};

export default SignUp;