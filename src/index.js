import React from 'react';
import ReactDOM from 'react-dom';
import * as types from './api_key';
import SearchBar from './components/search_bar';

const App = () => {
  return (
    <div>
      {types.YT_KEY}
      <SearchBar />
    </div>
  );
}



ReactDOM.render(<App />, document.querySelector('.container'));