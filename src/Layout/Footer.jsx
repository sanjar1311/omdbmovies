import { Component } from 'react'

export default class Footer extends Component {
  constructor(props) {
    super()
  }

  render() {
    return(
      <footer className="page-footer">
        <div className="footer-copyright">
          <div className="container">
          © { new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
          </div>
        </div>
      </footer>
    )
  }
}