import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import HelloWorld from './HelloWorld'
import PropsValidation from './PropsValidation';


ReactDOM.render(
   //<HelloWorld txt ='Hello World from React.js'/>,
   <PropsValidation name='Bradley' age='25' height='1,82'/>,
   document.getElementById(`root`)
);


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
