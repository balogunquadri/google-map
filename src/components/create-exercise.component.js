import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.onChangename = this.onChangename.bind(this);
    this.onChangeLog = this.onChangeLog.bind(this);
    this.onChangeLat = this.onChangeLat.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      Log: "",
      Lat: "",
      Address: ""
    };
  }

  onChangename(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeLog(e) {
    this.setState({
      log: e.target.value
    });
  }

  onChangeLat(e) {
    this.setState({
      lat: e.target.value
    });
  }

  onChangeAddress(e) {
    this.setState({
      Address: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const user = {
      name: this.state.name,
      log: this.state.log,
      lat: this.state.lat,
      Address: this.state.Address
    };

    axios
      .post("http://localhost:5000/users/add", user)
      .then(res => console.log(res.data));

    this.setState({
      name: "",
      log: "",
      lat: "",
      Address: ""
    });
  }

  render() {
    return (
      <div>
        <h3>Create New Restaurant</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangename}
            >
              {this.state.users.map(function(user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Log: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.log}
              onChange={this.onChangelog}
            />
          </div>
          <div className="form-group">
            <label>Lat: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.lat}
              onChange={this.onChangelat}
            />
          </div>
          <div className="form-group">
            <label>Address: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.Address}
              onChange={this.onChangeAddress}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Restaurant Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
