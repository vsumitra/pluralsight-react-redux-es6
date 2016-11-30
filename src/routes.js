import React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import CoursesPage from './components/course/CoursesPage';
import AuthorPage from './components/authors/AuthorPage';
import AboutPage from './components/about/AboutPage';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="courses" component={CoursesPage}/>
    <Route path="authors" component={AuthorPage}/>
    <Route path="*" component={NotFoundPage}/>
    <Redirect from="about-us" to="about"/>
  </Route>
);
