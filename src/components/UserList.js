import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UserList extends Component {
  render() {
    const { id } = this.props;
    if (!this.props.users) {
      return <div>Loading...</div>;
    }
    const { users } = this.props.users;
    const userFiltered = users.filter(user => id === user.id)[0];

    return (
      <div className="ui list">
        <div className="item">
          <i className="users icon"></i>
          <div className="content">{userFiltered.name}</div>
        </div>
        <div className="item">
          <i className="marker icon"></i>
          <div className="content">
            {userFiltered.address.city} - {userFiltered.address.street}
          </div>
        </div>
        <div className="item">
          <i className="mail icon"></i>
          <div className="content">
            <a href={"mailto:" + userFiltered.email}>{userFiltered.email}</a>
          </div>
        </div>
        <div className="item">
          <i className="linkify icon"></i>
          <div className="content">
            <a href={"http://" + userFiltered.website}>
              {userFiltered.website}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  { fetchUsers }
)(UserList);
