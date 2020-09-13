import React, { Component } from 'react'
import Login from './Login'
import Register from './Register'

class App_Register extends Component {
	render() {
		return (
			<div className="App_Register">
      <div className="jumbotron">
          <div className="container">
              <div className="col-sm-8 col-sm-offset-2">
                  <Register />
              </div>
          </div>
      </div>

				{/* <PostList /> */}
			</div>
		)
	}
}

export default App_Register