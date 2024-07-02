import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Provider/AuthProvider';
import { useContext } from 'react';

const Login = () => {

    const {signIn}= useContext(AuthContext)

    const handleLogIn= e=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        signIn(email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
          });
    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className='w-3/4' src={loginImg} alt="" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogIn} className="card-body">
          <h1 className="text-4xl font-bold">Login now</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name='email'
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name='password'
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-warning text-white bg-orange-600">Login</button>
            </div>
            <p>Do not have an Account?please <Link className='text-orange-600 font-bold' to='/signup'> SignUp</Link> </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
