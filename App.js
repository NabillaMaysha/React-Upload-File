import React from 'react';
import {Link} from 'react-router-dom';
import Barang from './page/Barang';

class App extends React.Component {
  render(){
    return (
      <div> <hr />
        <Link to="/barang" className="nav-link">Daftar Barang</Link>
        <Barang />
      </div>
    );
  }
}

export default App;
