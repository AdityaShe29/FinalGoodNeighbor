import React, { Component } from 'react'
import axios from 'axios'
import Logo from '../../src/logo1.png';
import '../../src/index1.css'
import Register1 from './Register';
import Login from './Login';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


class Register extends Component {
	constructor(props) {
		super(props)

		this.state = {
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
		axios
			.post('http://127.0.0.1:8000/api/auth/login', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
    }
    
    nextPath(path) {
        this.props.history.push(path);
    }

	render() {
        
		const { username, password } = this.state
		return (

            

			<div> 
                <div  class = "butterrandom">
                <ul class = "randombutter">
                    
                    
                    <li id = "link">
                        <Link to = "/login">Login</Link>
                    </li>


                    <li id = "link">
                        <Link to = "/register">Register</Link>
                    </li>
                </ul>
                </div>
      <h2 class = "formclass">Login</h2>
				<form name="form" class = "formclass" onSubmit={this.submitHandler}>

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
          <button onClick={() => this.nextPath('/mapui')} className="btn btn-primary" type="submit">Login</button>
				</form>
			</div>
		)
	}
}
export default Register