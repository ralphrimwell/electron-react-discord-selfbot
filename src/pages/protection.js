import * as React from 'react';
import HomeButton from '../components/HomeButton';


export default class Protection extends React.Component {
  render() {
    return(
      <div>
        <h1 className="header">Protection</h1>
        <p className="header-under">Prevent malicious attacks</p>
        <hr className="header-divider" />
        <HomeButton />
      </div>
    )
  }
};
