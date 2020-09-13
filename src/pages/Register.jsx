import React, { Component } from 'react'
import axios from 'axios'
import Logo from '../../src/logo1.png';
import '../../src/index1.css'
import '../../src/index1.css'
import Login from './Login';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class Register1 extends Component {
	constructor(props) {
		super(props)

		this.state = {
			first_name :  '',
      last_name :   '',
      email :       '',
      username :    '',
      password :    ''
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios.post('http://127.0.0.1:8000/api/auth/register', this.state)

    }
    
    nextPath(path) {
        this.props.history.push(path);
    }

	render() {
		const { first_name, last_name, email, username, password } = this.state
		return (
			<div>
                <div  class = "butterrandom">
                <ul class = "randombutter">
                    <li><Link to = "/login">Login</Link></li>
                    <li><Link to = "/register">Register</Link></li>
                </ul>
                </div>
      <h2 class = "formclass">Register</h2>
				<form name="form" class = "formclass" onSubmit={this.submitHandler}>
					<div className="form-group">
          <label htmlFor="first_name" ><b>First Name</b></label>
						<input
							type="text"
							name="first_name"
							value={first_name}
							onChange={this.changeHandler}
              className="form-control"
						/>
					</div>
					<div className="form-group">
          <label htmlFor="last_name" ><b>Last Name</b></label>
						<input
							type="text"
							name="last_name"
							value={last_name}
							onChange={this.changeHandler}
							className="form-control"
						/>
					</div>
					<div className="form-group">
          <label htmlFor="email" ><b>Email</b></label>
						<input
							type="text"
							name="email"
							value={email}
							onChange={this.changeHandler}
							className="form-control"
						/>
					</div>
					<div className="form-group">
          <label htmlFor="username" ><b>Username</b></label>
						<input
							type="text"
							name="username"
							value={username}
							onChange={this.changeHandler}
							className="form-control"
						/>
					</div>
					<div className="form-group">
          <label htmlFor="password" ><b>Password</b></label>
						<input
							type="password"
							name="password"
							value={password}
							onChange={this.changeHandler}
							className="form-control"
						/>
					</div>
          <button onClick = {() => this.nextPath('/mapui')} className="btn btn-primary" type="submit">Register</button>
				</form>
			</div>
		)
	}
}
export default Register1