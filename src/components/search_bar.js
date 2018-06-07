import React, { Component} from 'react';
import Info from './initial_info';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <Info term={this.state.term}/>
        <input
          value={this.state.term}
          placeholder="Type something here..."
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearch(term);
  }
}
