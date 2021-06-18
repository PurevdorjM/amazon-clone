import React,{useEffect} from 'react';
import './App.css';
import Header from './compenents/Header';
import Home from './compenents/Home';
import Checkout from './compenents/Checkout';
import Login from './compenents/Login';
import Payment from './compenents/Payment';
import Orders from './compenents/Orders';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51J3aooD3ySN7BxtFmxYReZctayACxTJNAJ2wg3tc524uBcLOoB3hegoQs1agSEKOd1UjPSbgBmTzSzSD5FxeIxpl00irjtIadO'
);

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
            <Route path='/orders'>
              <Header />
              <Orders />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/checkout'>
              <Header />
              <Checkout />
            </Route>
            <Route path='/payment'>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
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
