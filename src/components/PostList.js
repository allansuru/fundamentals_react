import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    if (!this.props.posts) {
      return <div>PostList</div>;
    }
    const { posts } = this.props.posts;
    return posts.map(post => {
      return <div>{post.title}</div>;
    });
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
