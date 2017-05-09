import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import NewsPage from './components/news/NewsPage';
import Fashion from './components/news/Fashion';
import Entertainment from './components/news/Entertainment';
import Lifestyle from './components/news/Lifestyle';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="news" component={NewsPage}/>
    <Route path="fashion" component={Fashion}/>
    <Route path="entertainment" component={Entertainment}/>
    <Route path="lifestyle" component={Lifestyle}/>
  </Route>
);
