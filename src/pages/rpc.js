import * as React from 'react';
import HomeButton from '../components/HomeButton';
import ToggleContainer from '../components/togglecontainer';



export default class RichPresence extends React.Component {
  render() {
    return(
      <div>
        <h1 className="header">Rich Presence</h1>
        <p className="header-under">Display a cool status on your profile</p>
        <hr className="header-divider" />
        <ToggleContainer text="Toggle RPC"/>

        <HomeButton />
      </div>
    )
  }
};
