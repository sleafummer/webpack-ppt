import React from 'react';
import ReactDOM from 'react-dom';
import './search.css';
import kbImg from './images/kb.jpg';

class Search extends React.Component {
  render() {
    return <div>
              <div>Search Text</div>
              <div>小</div>
              <img className="image" src={kbImg} />
           </div>;
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
);
