import { Component } from 'react'

export default class Movie extends Component {
  constructor(props) {
    super()
  }

  render() {

    const { Title, Poster, Year, Type} = this.props

    return(
      <div className='movie'>
        <div>
          <img src={Poster} alt="movie" />
        </div>
        <h5>{Title}</h5>
        <div className='movie__info'>
          <p>{Year}</p>
          <p>{Type}</p>
        </div>
      </div>
    )
  }
}