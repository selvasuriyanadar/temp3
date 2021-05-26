import React from "react";
import StepOne from "./EditForms/StepOne";
import StepTwo from "./EditForms/StepTwo";
import StepThree from "./EditForms/StepThree";
import StepFour from "./EditForms/StepFour";
import UserDetails from "../Data/UserDetails";
import PassData from "../Data/PassData";
import axios from "axios";

export default class RegistrationPage extends React.Component {

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

  submit = () => {
    const { user_details, passdata } = this.state;

    axios.post('http://localhost:5000/form-data-set', { user_details, passdata });
  };

  render() {
    return (
      <LowFlowForms data={this.data} submit={this.submit} />
    );
  }
}

class LowFlowForms extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      step: this.getNavData(Object.keys(this.props.data)),
    }
  }

  getNavData(data) {
    let step1;
    if (data.length > 0)
      step1 = { value: data[0] };

    let step = step1;
    for (const value of data.splice(1)) {
      const stp = { value };
      step.next = stp;
      stp.prev = step;
      step = step.next;
    }
    step.next = null;
    step1.prev = null;

    return step1;
  }

  nextStep = () => {
    const { step } = this.state;
    const data = this.props.data[step.value];

    if (data.key.validate())
    {
      if (typeof step.next !== "undefined") {
        this.setState({
          step: step.next
        });
      }
    }
    else {
      this.setState(step);
    }
  };

  prevStep = () => {
    const { step } = this.state;

    if (typeof step.prev !== "undefined") {
      this.setState({
        step: step.prev
      });
    }
  };

  submit = () => {
    const { step } = this.state;
    const data = this.props.data[step.value];

    if (data.key.validate())
    {
      this.props.submit();
    }
    else {
      this.setState(step);
    }
  };

  render() {
    const { step } = this.state;
    const data = this.props.data[step.value];

    let buttons = [];
    let value;
    if (step.prev == null) {
      value = (<button onClick={ this.nextStep }>Next</button>);
      buttons.push(value);
    }
    else if (step.next == null) {
      value = (<button onClick={ this.prevStep }>Prev</button>);
      buttons.push(value);
      value = (<button onClick={ this.submit }>Submit</button>);
      buttons.push(value);
    }
    else {
      value = (<button onClick={ this.prevStep }>Prev</button>);
      buttons.push(value);
      value = (<button onClick={ this.nextStep }>Next</button>);
      buttons.push(value);
    }
    return (
      <div>
        <div>{data.value(data.key)}</div>
        <div>{ buttons }</div>
      </div>
    );
  }
}
