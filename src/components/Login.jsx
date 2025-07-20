import React, { useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/Login.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert('Login successful!');
    }, 1500);
  };

  return (
    <div className="container-fluid login-container">
      <div className="row align-items-center justify-content-center min-vh-100">
        <div className="col-md-6 d-none d-md-block">
          <Lottie animationData={animationData} loop={true} />
        </div>

        <div className="col-md-5">
          <div className="login-box p-4 shadow rounded">
            <h2 className="mb-4 text-center">Login</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {error && <div className="text-danger mb-3">{error}</div>}

              <button type="submit" className="btn btn-primary w-100">
                {loading ? (
                  <span className="spinner-border spinner-border-sm"></span>
                ) : (
                  'Login'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;