import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';

class Posts extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPost() {
    if (!this.props.posts) {
      return <div>hello</div>;
    }
    return this.props.posts.map((post) => {
      return (
        <Col key={post.id} xs={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>
                {post.body}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  }

  render() {
    console.log(this.props.posts);
    return <>{this.renderPost()}</>;
  }
}

const mapStateToProps = (state) => {
  return { posts: Object.values(state.posts) };
};

export default connect(mapStateToProps, { fetchPosts })(Posts);
