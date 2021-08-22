import { Component } from 'react'

export default class Nav extends Component {
  constructor(props) {
    super()
  }

  render() {
    return(
      <nav className='nav'>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">OMDB</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#!">Movies</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}