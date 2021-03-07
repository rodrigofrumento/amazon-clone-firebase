import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import Login from './Login'
import { auth } from './firebase'
import React, { dispatch, useEffect } from 'react'

function App() {
  
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User >> ", authUser)
  
      if(authUser){
        dispatch({
          type:"SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })
  }, [])

  return(
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />            
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
