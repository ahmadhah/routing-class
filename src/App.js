import React, { useState } from 'react';
import Header from './components/Header'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'
import About from './components/About'
import Notfound from './components/Notfound'
import Post from './components/Post'

const App = () => {
  const [login, setlogin] = useState(false);

  return (
    <div className="container">
      <BrowserRouter  >

        <Header />
        <button onClick={() => setlogin(!login)}>{login ? 'log out' : 'login'}</button>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/Profile" >
            <Profile login={login} />
          </Route>
          {/* //* Method 1 */}

          {/* <Route path="/Profile" >
            {login ? <Profile /> : <Redirect to="/" />}
          </Route> */}

          {/* using id with our post age */}
          <Route path="/post/:id" component={Post} />
          <Route component={Notfound} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App

