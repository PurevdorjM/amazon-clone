import React,{useEffect} from 'react';
import './App.css';
import Header from './compenents/Header';
import Home from './compenents/Home';
import Checkout from './compenents/Checkout';
import Login from './compenents/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // Программын бүрэлдэхүүн хэсгүүд ажиллах үед зөвхөн нэг удаа ажиллана.
    auth.onAuthStateChanged(authUser => {
      console.log('The USER IS >>>', authUser);

      if (authUser) {
        // Хэрэглэгч дөнгөж нэвтэрсэн / хэрэглэгч нэвтэрсэн байсан

        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      }else{
        // Хэрэглэгч гарсан байсан
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (
    // BEM method
    <Router>
      <div className="app">
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/checkout'>
              <Header />
              <Checkout />
            </Route>
            <Route path='/'>
              <Header />
              <Home />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
