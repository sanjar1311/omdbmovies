import { Component } from 'react'

export default class Loader extends Component {
  constructor(props) {
    super()
  }

  render() {
    return(
      <>
        <div className="progress loader">
            <div className="indeterminate"></div>
        </div>
      </>
    )
  }
}