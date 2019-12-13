import React from 'react';
import { Redirect } from 'react-router-dom';

class PostFormPage extends React.Component {
  state = {
    error: false,
    success: false,
    title: '',
    content: '',
  }

  fieldChanged = (name) => {
    return (event) => {
      let { value } = event.target;
      this.setState({ [name]: value });
    }
  }

  savePost = (event) => {
    fetch("/api/posts/", {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.title,
        content: this.state.content
      }),
    })
      .then(res => {
        if(res.ok) {
          return res.json()
        }

        throw new Error('Content validation');
      })
      .then(post => {
        this.setState({
          success: true,
        });
      })
      .catch(err => {
        this.setState({
          error: true,
        });
      });
  }

  render() {
    if(this.state.success) return <Redirect to="/view_posts" />;

    let errorMessage = null;
    if(this.state.error) {
      errorMessage = (
        <div className="alert alert-danger">
          "There was an error saving this post."
        </div>
      );
    }

    return (
      <div className="col-10 col-md-8 col-lg-7">
        { errorMessage }
        <div className="input-group">
          <input
            type="text"
            placeholder="Movie Title"
            value={this.state.title}
            className="form-control mr-3 rounded"
            onChange={this.fieldChanged('title')}
          />
          </div>
          <div className="input-group">
          <textarea rows="5" cols="80"
            type="text"
            placeholder="Discuss or Review!"
            value={this.state.content}
            className="form-control mr-3 rounded"
            onChange={this.fieldChanged('content')}
          />
        </div>
        <button className="btn btn-primary" onClick={this.savePost}>Save Post</button>
      </div>
    );
  }
}

export default PostFormPage;
