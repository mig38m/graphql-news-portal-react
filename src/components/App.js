import React, { Component } from 'react'
import PostList from './PostList'
import Header from './Header'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className='center w85'>
        <Header />
        <div className='ph3 pv1 background-gray'>
          <Switch>
            <Route exact path='/' component={PostList}/>
           </Switch>
        </div>
      </div>
    )
  }
}

export default App
