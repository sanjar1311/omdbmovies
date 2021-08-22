import { Component } from 'react'

import Movie from './Movie'

export default class Movies extends Component {
  constructor(props) {
    super()
  }

  render() {

    const { movies = [] } = this.props

    return(
      <div className='movies'>
        {
          movies.length ? (movies.map(movie => (
            <Movie key={movie.imdbID} {...movie}/>
          ))) : (<h1>Nothing found</h1>)
        }
      </div>
    )
  }
}