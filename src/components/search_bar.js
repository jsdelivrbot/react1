import React, { Component } from 'react';
// import ytSearch from 'youtube-api-search';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    }

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <input 
          onChange={this.onInputChange} 
          name="search"
        />
        Value of the input: { this.state.search }
      </div>
    )
  }
};

export default SearchBar;