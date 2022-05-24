import * as React from 'react';
import HomeButton from '../components/HomeButton';


export default class Raiding extends React.Component {
  render() {
    return(
      <div>
        <h1 className="header">Raiding</h1>
        <p className="header-under">Attack a guild or account</p>
        <hr className="header-divider" />
        <HomeButton />
      </div>
    )
  }
};
