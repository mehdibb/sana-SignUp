import React, { Component } from "react";
import { connect } from "react-redux";
import { getAddresses } from "../../actions";

class Addresses extends Component {
  componentDidMount() {
    this.props.getAddresses();
  }

  renderItems() {
    return this.props.addresses.addresses.data.map(item => {
      return (
        <div className="item">
          <i className="map marker alternate icon" />
          <div className="content">
            <h3 className="right floated header">{item.address}</h3>
            <div className="description">
              {item.first_name + " " + item.last_name}
              <span className="right floated">{item.coordinate_mobile}</span>
            </div>
          </div>
        </div>
      );
    });
  }

  renderContent() {
    if (!this.props.addresses) {
      return (
        <div className="">
          <div className="ui active dimmer">
            <div className="ui large text loader">
              Getting the addresses from server, please wait...(It might take a
              few minutes)
            </div>
          </div>
          <p></p>
        </div>
      );
    } else if (this.props.addresses.addresses.status !== 200) {
      return <h1 className="ui header">No response from server {":("}</h1>;
    } else {
      return (
        // <div className="ui segment">
        //   {this.props.addresses.addresses.data[0].address}
        // </div>
        <div className="ui big divided list">{this.renderItems()}</div>
      );
    }
  }

  render() {
    console.log(this.props.addresses);
    return <div className="ui container">{this.renderContent()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    addresses: state.addresses
  };
};

export default connect(mapStateToProps, { getAddresses })(Addresses);
