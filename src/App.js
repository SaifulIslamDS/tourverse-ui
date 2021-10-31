import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Pages/Home/Home';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import AuthProvider from './Context/AuthProvider';

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
              <Route path="/placeorder">
                <PlaceOrder></PlaceOrder>
              </Route>
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
