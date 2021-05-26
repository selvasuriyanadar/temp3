import React from "react";
import user_details_strings from "../../DataStore/Strings/UserDetails";

export default class StepTwo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contact_details: this.props.contact_details,
    };
  }

  handleChange = (key) => (e) => {
    const { contact_details } = this.state;

    contact_details[key] = e.target.value;
    this.setState({ contact_details });
  }

  render() {
    const { contact_details } = this.state;
    const errors = contact_details.errors;
    const handleChange = this.handleChange;

    return (
      <div>
        <form>
          {user_details_strings.contact.name}:
          <input
            type="text"
            onChange={handleChange("contact")}
            value={contact_details.contact}
            />
          <div style={{ color: "red", fontSize: "14px" }}>
            {errors.items.contact}
          </div>
          <br />
          <br />
          {user_details_strings.email.name}:
          <input
            type="Email"
            onChange={handleChange("email")}
            value={contact_details.email}
            />
          <div style={{ color: "red", fontSize: "14px" }}>
            {errors.items.email}
          </div>
          <br />
          <br />
          {user_details_strings.country.name}:
          <input
            type="text"
            onChange={handleChange("country")}
            value={contact_details.country}
            />
          <div style={{ color: "red", fontSize: "14px" }}>
            {errors.items.country}
          </div>
          <br />
          <br />
          {user_details_strings.district.name}:
          <input
            type="text"
            onChange={handleChange("district")}
            value={contact_details.district}
            />
          <div style={{ color: "red", fontSize: "14px" }}>
            {errors.items.district}
          </div>
          <br />
          <br />
        </form>
      </div>
    );
  }
}
