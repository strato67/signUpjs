import React, { useEffect, useState } from "react";
import ErrorPopup from "./ErrorPopup";

const SignUp = () => {

  const [formVals, setformVals] = useState({
    email:'',
    firstName:'',
    lastName:'',
    password:'',
    confirmPass:''
  });

  const [passMismatch, showpassMismatch] = useState(false);
  const [passLength, showpassLength] = useState(false);
  const [emailVal, showEmailVal] = useState(false);

  useEffect(()=>{

    formVals.email.length>0 && (formVals.email.indexOf('@')==-1||formVals.email.indexOf('.')==-1) ? showEmailVal(true) : showEmailVal(false)
    formVals.password !== formVals.confirmPass ? showpassMismatch(true) : showpassMismatch(false);
    formVals.password.length<8&&formVals.password.length>0 ? showpassLength(true) : showpassLength(false)


  });

  const formHandler = (e) =>{

    const nextState = {
      ...formVals,
      [e.target.name]: e.target.value,
      
    };
    setformVals(nextState);

  }

  const formSubmit = (e) =>{
    e.preventDefault();
    alert(Object.values(formVals));
  }

    return(
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={formSubmit}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Email" name="email" className="input input-bordered" value={formVals.email} onChange={formHandler} autoComplete="off" required/>
                {emailVal && <ErrorPopup message={"Invalid email format"}/>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input type="text" placeholder="First Name" name="firstName" className="input input-bordered" value={formVals.firstName} onChange={formHandler} autoComplete="off" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input type="text" placeholder="Last Name" name="lastName" className="input input-bordered" value={formVals.lastName} onChange={formHandler} autoComplete="off" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="Password" name="password" className="input input-bordered" value={formVals.password} onChange={formHandler} autoComplete="off" required/>
                {passLength && <ErrorPopup message={"Password should be at least 8 characters"}/>}

              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Reenter Password</span>
                </label>
                <input type="password" placeholder="Reenter Password" name="confirmPass" className="input input-bordered" value={formVals.confirmPass} onChange={formHandler} autoComplete="off" required/>
                {passMismatch && <ErrorPopup message={"Passwords don't match"}/>}

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