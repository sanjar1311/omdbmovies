import { Component } from "react";

export default class Filter extends Component {

  state = {
    search: 'panda',
    type:'all'
  }

  handleKey = (e) => {
    if(e.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type)
    }
  }

  radioHandler = (e) => {
    this.setState(()=> ({type: e.target.dataset.type}), ()=> {
      this.props.searchMovies(this.state.search, this.state.type)
    })
  }


  render() {
    console.log(this.props);
    return (
      <>
        <div className="row filter">
            <div className="row">
              <div className="col s12">
                <div className="input-field">
                  <input
                    id="email_inline"
                    type="text"
                    className="validate"
                    placeholder="Search"
                    value={this.state.search}
                    onChange={(e)=> this.setState({search: e.target.value})}
                    onKeyDown={this.handleKey}
                  />
                  <button
                    className="btn search__btn"
                    onClick={()=> this.props.searchMovies(this.state.search, this.state.type)}
                  >Search</button>
                </div>

                <label className="filter__radio-btn">
                  <input
                    className="with-gap"
                    name="group3"
                    type="radio"
                    data-type='all'
                    onChange={this.radioHandler}
                    checked={this.state.type === 'all'}
                  />
                  <span>All</span>
                </label>
                <label className="filter__radio-btn">
                  <input
                    className="with-gap"
                    name="group3"
                    type="radio"
                    data-type='movie'
                    onChange={this.radioHandler}
                    checked={this.state.type === 'movie'}
                  />
                  <span>Movies</span>
                </label>
                <label className="filter__radio-btn">
                  <input
                    className="with-gap"
                    name="group3"
                    type="radio"
                    data-type='series'
                    onChange={this.radioHandler}
                    checked={this.state.type === 'series'}
                  />
                  <span>Series</span>
                </label>
              </div>
            </div>
        </div>
      </>
    );
  }
}
