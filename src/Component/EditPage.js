import React from "react";
import StepOne from "./EditForms/StepOne";
import StepTwo from "./EditForms/StepTwo";
import StepThree from "./EditForms/StepThree";
import StepFour from "./EditForms/StepFour";
import UserDetails from "../Data/UserDetails";
import PassData from "../Data/PassData";
import axios from "axios";

export default class EditPage extends React.Component {

  constructor() {
    super();
    this.state = {
      user_details: new UserDetails(),
      passdata: new PassData()
    };

    const { user_details, passdata } = this.state;
    this.data = {};

    let value = (data) => (<StepOne
      user_data={data}
      />
    );
    this.data.user_data = {
      key: user_details.data,
      value
    };

    value = (data) => (<StepTwo
      contact_details={data}
      />
    );
    this.data.contact_details = {
      key: user_details.contact_details,
      value
    };

    value = (data) => (<StepThree
      education_details={data}
      />
    );
    this.data.education_details = {
      key: user_details.education_details,
      value
    };

    value = (data) => (<StepFour
      passdata={data}
      contact_details={user_details.contact_details}
      />
    );
    this.data.passdata = {
      key: passdata,
      value
    };
  }

  update = () => {
    const { user_details, passdata } = this.state;

    axios.put('http://localhost:5000/form-data-set', { user_details, passdata });
  };

  render() {
    return (
      <TreeViewForms data={this.data} update={this.update} />
    );
  }
}

class TreeViewForms extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      step: Object.keys(this.props.data)[0]
    };
  }

  navigate = (k) => () => {
    this.setState({ step: k });
  }

  render() {
    const { data } = this.props;
    const { step } = this.state;

    const treeNav = (
      <div>
        <nav>{
          Object.keys(data).map( k =>
            (<ul>
              <li>
                <a onClick={ this.navigate(k) }>{ k}</a>
              </li>
            </ul>)
          )
        }</nav>
      </div>
    );
    
    const body = data[step].value(data[step].key);

    return (
      <div style={{ display:"flex" }}>
        { treeNav }
        <div style={{ marginLeft:"234px" }}>
          { body }
        </div>
      </div>
    );
  }
}
