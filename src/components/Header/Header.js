import React from 'react';
import LogotypeComponent from '../LogotypeComponent/LogotypeComponent';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div>
          <LogotypeComponent name="lassodesigns" tagline="frontend artist" icon="img/lassodesigns.png" />
        </div>
      </header>
    );
  }
}

export default Header;
