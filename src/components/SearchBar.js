import React, { Component } from 'react';

class SearchBar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { term: "search here" };
  // }

  render() {
    return (
      <div className="search-bar">
        <input />
        <button>Search</button>
      </div>
    );
  }

  // onInputChange(term) {
  //   this.setState({term});
  //   this.props.onSearchTermChange(term);
  // };
}

export default SearchBar;
