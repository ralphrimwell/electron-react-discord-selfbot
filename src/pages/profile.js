import * as React from 'react';
import HomeButton from '../components/HomeButton';




export default class Profile extends React.Component {
  render() {
    return(
      <div>
        <h1 className="header">Profile Settings</h1>
        <hr className="header-divider" />
        <HomeButton />
      </div>
    )
  }
};
