import React from "react";
import passdata_strings from "../../DataStore/Strings/PassData";

export default class StepFour extends React.Component {

  constructor(props) {
    super(props);
    this.props.passdata.email = this.props.contact_details.email;
    this.state = {
      passdata: this.props.passdata
    };
  }

  handleChange = (key) => (e) => {
    const { passdata } = this.state;

    passdata[key] = e.target.value;
    this.setState({ passdata });
  }

  render() {
    const { passdata } = this.state;
    const { errors } = passdata;
    const handleChange = this.handleChange;

    return (
      <div>
        <form>
          <div>
            { passdata_strings.email.name }:{" "}
            { passdata.email }
          </div>
          <br />
          <br />
          { passdata_strings.password.name }:{" "}
          <input
            type="password"
            onChange={handleChange("password")}
            value={passdata.password}
            />
          <div style={{ color: "red", fontSize: "14px" }}>
            {errors.items.password}
          </div>
          <br />
          <br />
        </form>
      </div>
    );
  }
}
