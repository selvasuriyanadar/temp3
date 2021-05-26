import React from "react";
import user_details_strings from "../../DataStore/Strings/UserDetails";

export default class Firststep extends React.Component {

  constructor(props) {
    super(props);
    this.state = { user_data: props.user_data };
  }

  handleChange = (key) => (e) => {
    const { user_data } = this.state;

    user_data[key] = e.target.value;
    this.setState({ user_data });
  }

  render() {
    const { user_data } = this.state;
    const { errors } = user_data;
    const handleChange = this.handleChange;

    return (
      <div>
        <form>
          <div>
            Photo:{" "}
            <input
              type="file"
              name="photo"
            />
          </div>
          <br />
          <br />
          {user_details_strings.firstname.name}:{" "}
          <input
            type="text"
            onChange={handleChange("firstname")}
            value={user_data.firstname}
            />
          <div style={{ color: "red", fontSize: "14px" }}>
            {errors.items.firstname}
          </div>
          <br />
          <br />
          {user_details_strings.lastname.name}:{" "}
          <input
            type="text"
            onChange={handleChange("lastname")}
            value={user_data.lastname}
            />
          <div style={{ color: "red", fontSize: "14px" }}>
            {errors.items.lastname}
          </div>
          <br />
          <br />
          <div>
            {user_details_strings.gender.name}:{" "}
            <input
              type="radio"
              value="male"
              onChange={handleChange("gender")}
              checked={user_data.gender === "male"}
              />
            Male
            <input
              type="radio"
              value="female"
              onChange={handleChange("gender")}
              checked={user_data.gender === "female"}
              />
            Female
          </div>
          <div style={{ color: "red", fontSize: "14px" }}>
            {errors.items.gender}
          </div>
          <br />
          <br />
          {user_details_strings.age.name}:{" "}
          <input
            type="number"
            onChange={handleChange("age")}
            value={user_data.age}
            />
          <div style={{ color: "red", fontSize: "14px" }}>
            {errors.items.age}
          </div>
          <br />
          <br />
        </form>
      </div>
    );
  }
}
