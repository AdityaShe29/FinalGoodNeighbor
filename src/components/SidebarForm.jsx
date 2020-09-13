import React, { Component } from 'react'
import axios from 'axios'
import {geolocated} from 'react-geolocation';
import '../../src/newcss.css';



class SidebarForm extends Component {


	constructor(props) {
		super(props)


		this.state = {
			user :  '',
      latitude :   '',
      longitude :       '',
      request :    '',
			due_date :    '',
			phone :    '',
	  email_address :    '',
	  key : ''
		}
	}

	

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)

		axios.post('https://cors-anywhere.herokuapp.com/http://ptsv2.com/t/de0zy-1599963450/post', this.state, {headers: {'Access-Control-Allow-Origin': '*'}})

	}

	componentDidMount() {
		if ("geolocation" in navigator) {
		  console.log("Available");
		} else {
		  console.log("Not Available");
		}
	  }

	  componentDidMount() {
		navigator.geolocation.getCurrentPosition(function(position) {
		});
	  }

	render() {

		const { user, latitude, longitude, request, due_date, phone, email_address } = this.state
		return (
			<div>
      <h2 class = "randomclass">Request Form</h2>
				<form class = "randomclass" name="form" onSubmit={this.submitHandler}>
					<div className="form-group">
          <label htmlFor="user" >Username</label>
						<input
							type="text"
							name="user"
							value={user}
							onChange={this.changeHandler}
              className="form-control"
						/>
					</div>
					<div
							latitude= {"40.525532"}
							onChange={this.changeHandler}>

					</div>
					<div
					longitude= {"-74.388229"}
					onChange={this.changeHandler}>
					</div>
					<div className="form-group">
          <label htmlFor="request" >Request</label>
						<input
							type="text"
							name="request"
							value={request}
							onChange={this.changeHandler}
							className="form-control"
						/>
					</div>
					<div className="form-group">
          <label htmlFor="due_date" >Due Date</label>
						<input
							type="text"
							name="due_date"
							value={due_date}
							onChange={this.changeHandler}
							className="form-control"
						/>
					</div>
					<div className="form-group">
          <label htmlFor="phone" >Phone Number</label>
						<input
							type="number"
							name="phone"
							value={phone}
							onChange={this.changeHandler}
							className="form-control"
						/>
					</div>
					<div className="form-group">
          <label htmlFor="email_address" >Email</label>
						<input
							type="text"
							name="email_address"
							value={email_address}
							onChange={this.changeHandler}
							className="form-control"
						/>
					</div>
          <button className="btn btn-primary" type="submit">Request</button>
				</form>
			</div>
		)
	}
}
export default SidebarForm
