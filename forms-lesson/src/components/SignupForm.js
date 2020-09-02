import React, { Component } from 'react';


class SignupForm extends Component {
  constructor() {
    super();
    this.state ={
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }
  }

  onFormSubmit = (event) => {
    event.preventDefault(); 

    const newPerson = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    }

    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    })

    this.props.newPersonCallback(newPerson)
  }

  render() {
    return (
      <form className="new-student-form" onSubmit={this.onFormSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input 
          name="firstName"
          value={this.state.firstName}
          onChange={
            (event)=>this.setState({firstName: event.target.value})
          } 
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input 
          name="lastName"
          value={this.state.lastName}
          onChange={
            (event)=>this.setState({lastName: event.target.value})
          } 
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
          name="email" 
          value={this.state.email}
          onChange={
            (event)=>this.setState({email: event.target.value})
          }
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input 
          type="password"
          name="email" 
          value={this.state.password}
          onChange={
            (event)=>this.setState({password: event.target.value})
          }
          />
        </div>
        <input
          type="submit"
          value="Add Student"

        />
      </form>
    );
  }
}

export default SignupForm;