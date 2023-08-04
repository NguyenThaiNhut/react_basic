import './App.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './Home/Home';
import ListTodo from './Todos/ListTodo';
import MyComponent from '../components/MyComponent'
import ListUser from './User/ListUser'
import DetailUser from './User/DetailUser';

import Nav from './Nav/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
// import { Route } from "react-router";


const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/detail/:id">
              <DetailUser />
            </Route>
          </Switch>

        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />


      </div>
    </Router>
  );
}

export default App;
