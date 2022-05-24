import * as React from 'react';
import CommandsList from '../components/CommandsList';
import HomeButton from '../components/HomeButton';


export default class Commands extends React.Component {
  render() {
    return(
      <div>
          <h1 className="header">Commands</h1>
          <p className="header-under">All discord commands</p>
          <hr className="header-divider" />
          <HomeButton />
          <CommandsList />
      </div>
    )
  }
};
