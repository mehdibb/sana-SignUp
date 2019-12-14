import React, { Component } from "react";
import "./SignUp.css";
// import logo from "../../images/LOGO@2x.png";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { signUp, setDimensions, addMarker, setButton } from "../../actions";

class SignUp extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  renderRadioInput = ({ input, label, meta, name }) => {
    return (
      <div className="field">
        <div className="ui radio checkbox">
          <input {...input} type="radio" name={name} checked={input.checked} />
          <label>{label}</label>
          {this.renderError(meta)}
        </div>
      </div>
    );
  };

  setWindowDimensions = () => {
    console.log("width " + window.innerWidth, "height " + window.innerHeight);
    if (window.innerWidth < 550 && window.innerHeight < 550) {
      this.props.setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    } else {
      this.props.setDimensions({
        width: 550,
        height: 550
      });
    }
  };

  componentDidMount() {
    this.setWindowDimensions();
    window.addEventListener("resize", this.setWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setWindowDimensions);
  }

  // *** I WANTED TO PLACE THE GOOGLE MAP COMPONENT INSIDE A MODAL AND I IMPLEMENTED IT BUT IN ORDER TO MAKE IT RESPONSIVE I NEED A BIT MORE TIME
  // renderModal = () => {
  //   return (
  //     <Modal trigger={<Button>Pick a Location</Button>}>
  //       <Modal.Header>Select your location on map:</Modal.Header>
  //       <Modal.Content>
  //
  //       </Modal.Content>
  //     </Modal>
  //   );
  // };

  onSubmit = formValues => {
    this.props.signUp(formValues, this.props.marker);
    console.log(this.props.form);
  };

  addMarker = (lat, lng) => {
    this.props.addMarker(lat, lng);
    this.props.setButton("primary");
  };

  onMapClicked = (t, map, c) => {
    this.addMarker(c.latLng.lat(), c.latLng.lng());
  };

  renderMarker = () => {
    return this.props.marker ? (
      <Marker
        position={{ lat: this.props.marker.lat, lng: this.props.marker.lng }}
      />
    ) : null;
  };

  render() {
    return (
      <div className="ui container">
        <div className="ui segment">
          <div className="stackable ui aligned centered divided grid">
            <div className="ui row">
              <div className="eight wide column">
                <div className="ui text container">
                  <h1>Please fill in the form</h1>
                  {/* <div className="ui image">
                    <img src={logo} />
                  </div> */}
                </div>
              </div>
              <div className="eight wide column">
                <form
                  onSubmit={this.props.handleSubmit(this.onSubmit)}
                  className="ui form error"
                >
                  <Field
                    name="firstName"
                    component={this.renderInput}
                    label="First Name"
                  />
                  <Field
                    name="lastName"
                    component={this.renderInput}
                    label="Last Name"
                  />
                  <Field
                    name="address"
                    component={this.renderInput}
                    label="Address"
                  />
                  <Field
                    name="mobile"
                    component={this.renderInput}
                    label="Mobile Number"
                  />
                  <Field
                    name="phoneNumber"
                    component={this.renderInput}
                    label="Phone Number"
                  />
                  <div className="inline fields">
                    <label htmlFor="gender">Select your gender: </label>
                    <Field
                      name="gender"
                      component={this.renderRadioInput}
                      type="radio"
                      value="Male"
                      label="Male"
                    />
                    <Field
                      name="gender"
                      component={this.renderRadioInput}
                      type="radio"
                      value="Female"
                      label="Female"
                    />
                  </div>
                  <div className="header">
                    <h1 className="header">Pick a location</h1>
                  </div>
                  <div className="ui divider" />
                  <div
                    className="ui container"
                    style={{
                      width: this.props.winDimensions.width * 0.7,
                      height: this.props.winDimensions.width * 0.7,
                      zIndex: 90
                    }}
                  >
                    <Map
                      google={this.props.google}
                      streetViewControl={false}
                      zoom={14}
                      style={{
                        width: this.props.winDimensions.width * 0.7,
                        height: this.props.winDimensions.width * 0.7,
                        zIndex: 90
                      }}
                      initialCenter={{
                        lat: 35.7717503,
                        lng: 51.3365315
                      }}
                      onClick={this.onMapClicked}
                    >
                      {this.renderMarker()}
                    </Map>
                  </div>
                  <div className="ui divider" />
                  <button
                    className={`fluid big ui ${this.props.status} button`}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      // <div className="stackable ui grid">
      //   <div className="ui row">
      //     <div className="eight wide column large screen only">
      //       <div className="ui container">
      //         <img className="ui centered small image" src={logo} />
      //         <h1 className="ui centered header">WE ARE SANA</h1>
      //         {/* <div className="ui divider" /> */}
      //       </div>
      //     </div>

      //     <div className="eight wide column">
      //       <div className="ui segment">
      //         <div className="ui container">
      //           <div className="form_wrapper ui container">
      //             <h1 className="header">ثبت نام</h1>
      //             <div className="ui divider" />
      //
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.firstName) {
    errors.firstName = "You must enter your first name";
  }

  if (formValues.firstName) {
    if (formValues.firstName.length < 3) {
      errors.firstName = "Name should be at least 3 character";
    }
  }

  if (!formValues.lastName) {
    errors.lastName = "You must enter your last name";
  }

  if (!formValues.address) {
    errors.address = "You must enter your address";
  }

  if (!formValues.mobile) {
    errors.mobile = "You must enter your mobile number";
  }

  if (formValues.mobile) {
    if (formValues.mobile.length !== 11) {
      errors.mobile = "The entered mobile number should be exactly 11 digits";
    }
  }

  if (!formValues.phoneNumber) {
    errors.phoneNumber = "You must enter a phone number";
  }

  if (formValues.phoneNumber) {
    if (formValues.phoneNumber.length !== 11) {
      errors.phoneNumber =
        "The entered phone number should be exactly 11 digits";
    }
  }

  return errors;
};

const mapStateToProps = state => {
  return {
    winDimensions: state.auth.winDimensions,
    marker: state.auth.marker,
    status: state.auth.status
  };
};

const formWrapped = reduxForm({
  form: "signUp",
  validate
})(SignUp);

export default GoogleApiWrapper({
  apiKey: "AIzaSyB2HA_VE_B6ucukhJWca-ZQ9bFID_XyEsc"
})(
  connect(mapStateToProps, { signUp, setDimensions, addMarker, setButton })(
    formWrapped
  )
);
