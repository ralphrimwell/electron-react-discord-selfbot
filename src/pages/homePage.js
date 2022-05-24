import * as React from 'react';
import ButtonGrid from '../components/ButtonGrid';
import TitleBar from '../components/TitleBar';
import { pfpURL } from '../discord/bot';
import { client } from '../discord/bot';
const Discord = require('discord.js');
const config = require('../../config.json');

export default class Home extends React.Component {
  render() {
    if(config.token == null) {
        console.log("poopy xdd")
    }

    return(
      <div>
        <img key={Date.now()} className="pfp" src={pfpURL} />
        <h1>hi</h1>
        <ButtonGrid />
      </div>



    )


  }
};

