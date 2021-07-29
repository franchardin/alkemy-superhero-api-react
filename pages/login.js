import Head from 'next/head'
import styles from '../styles/Login.module.css'
const axios = require('axios').default;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 
function Login() {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
 
  const handleSubmit = () => {
    setLoading(true);
    setIsError(false);
    const data = {
      email: email,
      password: password
    }

    axios.post(`http://challenge-react.alkemy.org/?email=${data.email}&password=${data.password}`).then(res => {
      setEmail('');
      setPassword('');
      setLoading(false);
      setData(res.data.token);
      localStorage.setItem(token, data);
      return
    }).catch(err => {
      setLoading(false);
      setIsError(true);
    });
  }
 
  return (
    <div className="container p-3">
      <h5 className="d-inline-block mb-3">Title</h5>
      <div style={{ maxWidth: 350 }}>
        <div classNames="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)} />
        </div>
        <div classNames="form-group">
          <label htmlFor="password" className="mt-2">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)} />
        </div>

        {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}
        
        <button
          type="submit"
          className="btn btn-primary mt-3"
          onClick={handleSubmit}
          disabled={loading}
        >{loading ? 'Loading...' : 'Submit'}</button>
        {data && <div className="mt-3">
          <strong>Output:</strong><br />
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
        }
      </div>
    </div>
  );
}
 
export default Login;



