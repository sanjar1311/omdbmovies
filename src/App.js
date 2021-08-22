import { Component } from 'react'

import Header from './Layout/Header'
import Main from './Layout/Main'
import Footer from './Layout/Footer'

import './App.css';


export default class App extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}