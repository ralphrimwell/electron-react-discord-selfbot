import * as React from 'react';
import HomeButton from '../components/HomeButton';



export default class NitroSniper extends React.Component {
  render() {
    return(
      <div>
        <h1 className="header">Nitro Sniper</h1>
        <p className="header-under">Automatically redeem Nitro gifts</p>
        <hr className="header-divider" />
        <HomeButton />
      </div>
    )
  }
};
