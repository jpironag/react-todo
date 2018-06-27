//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';

//include bootstrap npm library into the bundle
import 'bootstrap';

//include your index.scss file into the bundle
import '../styles/index.scss';

//import your own components
import Todo from './component/Todo.jsx';
//import File from './component/File.jsx';

//render your react application
ReactDOM.render(
    //<File />,
    <Todo />,
    document.querySelector('#app')
);
