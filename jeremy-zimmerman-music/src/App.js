import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import './styles/style.css'

import withSplashScreen from './components/withSplashScreen'

class App extends Component {
  render() {
    return (

      <Fragment>
        <div className="container-fluid">
          <Route path="/" exact component={Welcome} />
        </div>
      </Fragment>

    );
  }
}

export default withSplashScreen(App)
