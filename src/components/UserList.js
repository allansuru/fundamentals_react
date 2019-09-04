import React, { Component } from "react";

class UserList extends Component {
  render() {
    if (!this.props.user) {
      return <div>Loading...</div>;
    }
    const { user } = this.props;
    return (
      <div className="ui list">
        <div className="item">
          <i className="users icon"></i>
          <div className="content">{user.name}</div>
        </div>
        <div className="item">
          <i className="marker icon"></i>
          <div className="content">
            {user.address.city} - {user.address.street}
          </div>
        </div>
        <div className="item">
          <i className="mail icon"></i>
          <div className="content">
            <a href={"mailto:" + user.email}>{user.email}</a>
          </div>
        </div>
        <div className="item">
          <i className="linkify icon"></i>
          <div className="content">
            <a href={"http://" + user.website}>{user.website}</a>
          </div>
        </div>
      </div>
    );
  }
}

export default UserList;
