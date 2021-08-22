import { Component } from 'react'

import Movies from '../Component/Movies'
import Filter from '../Component/Filter'
import Loader from '../Component/Loader'

export default class Main extends Component {

  state = {
    movies: [],
    loading: true
  }


  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=ea61be94&s=panda`)
    .then(res => res.json())
    .then(data => this.setState({movies: data.Search, loading: false}))
  }

  searchMovies = (str, type='all') => {
    this.setState({loading: true})
    fetch(`http://www.omdbapi.com/?apikey=ea61be94&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
    .then(res => res.json())
    .then(data => this.setState({movies: data.Search, loading: false}))
  }

  render() {
    return(
      <main>
        <Filter searchMovies={this.searchMovies} />
        {
          this.state.loading ? <Loader /> : <Movies movies={this.state.movies}/>
        }
      </main>
    )
  }
}