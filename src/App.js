import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Pages/Home/Home';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import Bookings from './Pages/Bookings/Bookings';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ManageResorts from './Pages/ManageResorts/ManageResorts';
import AddResort from './Admin/AddResort';
import UpdateResort from './Admin/UpdateResort';
import Booking from './Admin/Booking';

function App() {
  return (
    <div className="App">
      <AuthProvider> 
          <Router>
            {/* Header section  */}
            <Header></Header>
            <div>
            {/* Routers */}
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <PrivateRoute path="/manageresorts">
                <ManageResorts></ManageResorts>
              </PrivateRoute>
              <PrivateRoute path="/bookings">
                <Bookings></Bookings>
              </PrivateRoute>
              <PrivateRoute path="/booking">
                <Booking></Booking>
              </PrivateRoute>
              {/* <PrivateRoute path="/bookings/:id">
                <Booking></Booking>
              </PrivateRoute> */}
              <PrivateRoute path="/ressorts/add">
                <AddResort></AddResort>
              </PrivateRoute>
              <PrivateRoute path="/ressorts/update/:id">
                <UpdateResort></UpdateResort>
              </PrivateRoute>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route>
                <NotFound></NotFound>
              </Route>
            </Switch>
            {/* Footer section  */}
            <Footer></Footer> 
          </div>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
