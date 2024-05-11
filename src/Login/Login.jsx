import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onLogin = data => {
        console.log(data);
        console.log(errors);
    }
    return (
        <div>
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <img src="https://i.ibb.co/hW9BgzB/Animation-1715424318574.gif" alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSubmit(onLogin)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required  {...register('email')} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" name='password' required  {...register('password')} />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-outline btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center mb-5">don't have a account? <Link className='link text-purple-500' to="/register">plz register</Link></p>

    </div>
  </div>
</div>
        </div>
    );
};

export default Login;