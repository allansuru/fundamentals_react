import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts, fetchUsers } from "../actions";
import UserList from "./UserList";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchUsers(1);
  }

  renderList = posts => {
    return posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle  aligned icon user"></i>
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>

            <UserList id={post.userId} />
          </div>
        </div>
      );
    });
  };

  render() {
    if (!this.props.posts) {
      return <div>PostList</div>;
    }
    const { posts } = this.props.posts;

    return (
      <div className="ui relaxed divided list">{this.renderList(posts)}</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts, fetchUsers }
)(PostList);
