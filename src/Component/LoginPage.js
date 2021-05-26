import React from "react";
import axios from "axios";
import PassData from "../Data/PassData";
import passdata_strings from "../DataStore/Strings/PassData";

export default class LoginPage extends React.Component {
 
  constructor() {
    super();
    this.state = {
      passdata: new PassData()
    };
  }
 
  handleChange = (name) => (e) => {
    const { passdata } = this.state;

    passdata[name] = e.target.value;
    this.setState({ passdata });
  };
  
  handleSubmit = (e) => {
    e.preventDefault();

    const passdata = this.state.passdata;
    if (passdata.validate()) {
      axios.post('http://localhost:5000/login', this.state.passdata)
      .then(res => {
        if (res.data.verification === true) {
          console.log("Login Success");
        }
      });
    }
    else {
      this.setState({ passdata });
    }
  }

  render() {
    const { passdata } = this.state;
    const { errors } = passdata;

    return (
      <div>
        <form>
          {passdata_strings.email.name}:
          <input
            type="email"
            onChange={this.handleChange("email")}
            value={passdata.email}
            />
          <div style={{ color: "red", fontSize: "14px" }}>
            {errors.items.email}
          </div>
          <br />
          <br />
          {passdata_strings.password.name}:
          <input
            type="password"
            onChange={this.handleChange("password")}
            value={passdata.password}
            />
          <div style={{ color: "red", fontSize: "14px" }}>
            {errors.items.password}
          </div>
          <br />
          <br />
          <button onClick={this.handleSubmit}>Login</button>
        </form>
      </div>
    );
  }
}
