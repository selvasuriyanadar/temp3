import React from "react";
import MainPage from "./MainPage";
import axios from "axios"
import View from "./view"
class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      Email: "",
      Password: "",
      EmailErr: "",
      passwordErr: "",
      data:""
    };
  }
  handleChange = (e) => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };
 
  
    handleSubmit = (e) => {
      e.preventDefault();
      const { Email, Password } = this.state;
      if (Email === "") {
        this.setState({ EmailErr: "Email id is required." });
      } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)) {
        this.setState({ EmailErr: "Invalid email id." });
      } else {
        this.setState({ EmailErr: "" });
      }
  
      //password
      if (Password === "") {
        this.setState({ passwordErr: "password is required" });
      } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(Password)) {
        this.setState({
          PasswordErr:
            "Check a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter."
        });
      } else this.setState({ PasswordErr: "" });
    
      
      
      axios.post('http://localhost:5000/login',{Email:this.state.Email, Password:this.state.Password})
      .then(res=>{
        this.setState({data :res.data})
        console.log(res.data)
        const { step } = this.state;
        this.setState({step: 3});
      
      })
    
    
    
    
    
    }
     
    
   

    

    
    

  


  

  handleReg = (e) => {
    const { step } = this.state;
    this.setState({
      step: step +1
    });
  };

  render() {
    var step = this.state.step;
    const { data } = this.state

    switch (step) {
      case 1:
        return (
          <div>
            <form>
              Email:
              <input
                type="email"
                placeholder="email address"
                name="Email"
                onChange={this.handleChange}
              />
              <div style={{ color: "red", fontSize: "14px" }}>
                {this.state.EmailErr}
              </div>
              <br />
              <br />
              password:
              <input
                type="password"
                placeholder="password"
                name="Password"
                onChange={this.handleChange}
              />
              <div style={{ color: "red", fontSize: "14px" }}>
                {this.state.passwordErr}
              </div>
              <br />
              <br />
              <button onClick={this.handleSubmit}>login</button>
              <button onClick={this.handleReg}>Registeration</button>
            </form>
          </div>
        );
      case 2:
        return <MainPage />;
      case 3:
        return <View data={data} />
      case 4:
        return <edit />
      default:
        return true;
    }
  }
}

export default LoginForm;
