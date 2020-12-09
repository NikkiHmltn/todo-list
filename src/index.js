import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList';

let todos = ["cry", "cry", "code"]

ReactDOM.render(
  <React.StrictMode>
    <MyList theList={todos} />
  </React.StrictMode>,
  document.getElementById('root')
);

