import React from "react";
import user_details_strings from "../../DataStore/Strings/UserDetails";

function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

export default class StepThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      education_details: this.props.education_details
    };
  }

  handleChange = (key) => (e) => {
    const { education_details } = this.state;

    education_details[key] = e.target.value;
    this.setState({ education_details });
  }

  onLanguageSelected = (e) => {
    const option = e.target.value;
    const { education_details } = this.state;
    const { languages } = education_details;

    if (e.target.checked) languages.push(option);
    else removeItemOnce(languages, option);
    this.setState({ education_details });
  };

  render() {
    const { education_details } = this.state;
    const { errors } = education_details;
    const { languages } = education_details;
    const handleChange = this.handleChange;

    return (
      <div>
        <form>
          <div>
            {user_details_strings.languages.name}:{" "}
            <input
              type="checkbox"
              name="languages"
              value="c"
              checked={languages.includes("c")}
              onChange={this.onLanguageSelected}
              />
            c
            <input
              type="checkbox"
              name="languages"
              value="c++"
              checked={languages.includes("c++")}
              onChange={this.onLanguageSelected}
              />
            c++
            <input
              type="checkbox"
              name="languages"
              value="python"
              checked={languages.includes("python")}
              onChange={this.onLanguageSelected}
              />
            python
          </div>
          <div style={{ color: "red", fontSize: "14px" }}>
            {errors.items.languages}
          </div>
          <br />
          <br />
          <div>
            {user_details_strings.department.name}:{" "}
            <select
              name="department"
              value={education_details.department}
              onChange={handleChange("department")}
              >
              <option name="department" value="">
                SELECT
              </option>
              <option name="department" value="ECE">
                ECE
              </option>
              <option name="department" value="CSE">
                CSE
              </option>
              <option name="department" value="IT">
                IT
              </option>
            </select>
          </div>
          <div style={{ color: "red", fontSize: "14px" }}>
            {errors.items.department}
          </div>
          <br />
          <br />
          <div>
            12TH Certificate:{" "}
            <input
              type="file"
              name="plus2_certificate"
            />
          </div>
          <br />
          <br />
          <div>
            UG or PG Certificate:{" "}
            <input
              type="file"
              name="ug_or_pg_certificate"
            />
          </div>
        </form>
      </div>
    );
  }
}
