import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import loginReducer from './login/loginReducer';// Import your root reducer
import App from './App'; // Import your main application component
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// Create the Redux store
const store = createStore(loginReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//  < >
//     <App />
//     </>
// );
