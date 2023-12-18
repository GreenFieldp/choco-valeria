import './css.css';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userName2, setUserName2] = useState('');
  const [password2, setPassword2] = useState('');
  const [password3, setPassword3] = useState('');
  const [refresh, setRefresh] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/user');
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllUsers();
  }, [refresh]);

  const add = async (dd) => {
    try {
      await axios.post('http://localhost:3000/api/user', dd);
      setRefresh(!refresh);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogin = () => {
    const user = data.find((e) => e.userName === userName && e.userPassword === password);
    if (!user) {
      alert('User not found');
    } else if (user.userType === 'admin') {
      navigate('/ListAdmin');
    } else {
      navigate('/ListUser');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const existingUser = data.find((e) => e.userName === userName2);
    if (!userName2 || !password2 || !password3) {
      alert('Fill in all the inputs');
    } else if (existingUser) {
      alert('The username is already taken');
    } else if (password2 !== password3) {
      alert('Passwords do not match');
    } else {

      add({ userName: userName2, userPassword: password2, userType: 'user' });
	  alert('user created')
	  window.location.reload();
    }
  };

  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div className="login">
        <form className="form">
          <label htmlFor="chk" aria-hidden="true">
            Log in
          </label>
          <input
            className="input"
            type="text"
            name="userName"
            placeholder="User Name"
            required=""
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            className="input"
            type="password"
            name="pswd"
            placeholder="Password"
            required=""
            onChange={(e) => setPassword(e.target.value)}
          />
          <center>
            <button onClick={handleLogin}>Log in</button>
          </center>
        </form>
      </div>

      <div className="register">
        <form className="form" onSubmit={handleRegister}>
          <label htmlFor="chk" aria-hidden="true">
            Register
          </label>
          <input
            className="input"
            type="text"
            name="txt"
            placeholder="Username"
            required=""
            onChange={(e) => setUserName2(e.target.value)}
          />
          <input
            className="input"
            type="password"
            name="pswd"
            placeholder="Password"
            required=""
            onChange={(e) => setPassword2(e.target.value)}
          />
          <input
            className="input"
            type="password"
            name="pswd"
            placeholder="Password"
            required=""
            onChange={(e) => setPassword3(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
