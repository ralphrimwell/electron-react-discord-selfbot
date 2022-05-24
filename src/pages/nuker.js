import * as React from 'react';
import HomeButton from '../components/HomeButton';



export default class Nuker extends React.Component {
  render() {
    return(
      <div>
        <h1 className="header">Nuker</h1>
        <p className="header-under">Destroy a Discord account or guild</p>
        <hr className="header-divider" />
        <HomeButton />
      </div>
    )
  }
};
