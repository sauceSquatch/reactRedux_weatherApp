import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index.js'

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this); //allows onInputChange to see 'this' otherwise it's scoped wrong
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }
  // if there is a callback on a DOM element (form onSubmit) referencing this, such as onFormSubmit, we have to bind the context of this
  onFormSubmit(event) {
    event.preventDefault();

    // this is where we get weather
    this.props.fetchWeather(this.state.term);
    // clear out the search term stored in state
    this.setState({term:''});
  }

  render() {
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="get a five day forcast in your city"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

// bind to redux
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch );
}

// having null means there is no state needed
export default connect(null, mapDispatchToProps)(SearchBar);
