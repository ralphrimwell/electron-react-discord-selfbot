import * as React from 'react';
import HomeButton from '../components/HomeButton';




export default class Dashboard extends React.Component {
  render() {
    return(
      <div>
        <h1 className="header">Dashboard</h1>
        <p className="header-under">Discord analytics</p>
        <hr className="header-divider" />
        <HomeButton />

      </div>
    )
  }
};
