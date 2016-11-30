import React from 'react';
import AuthorApi from '../../api/mockAuthorApi';
import AuthorList from './AuthorList';

class AuthorPage extends React.Component {

  componentWillMount() {
    AuthorApi
      .getAllAuthors()
      .then(() => {
        this.authors = [];
      });
  }

  render() {
    return (
      <div>
        <h1>Authors</h1>
        <AuthorList authors={this.authors}/>
      </div>
    );
  }
}

export default AuthorPage;
