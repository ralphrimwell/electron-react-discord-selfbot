const config = require('../../config.json');
const Discord = require('discord.js');

const client = new Discord.Client();



var pfpURL;

if (pfpURL == null) {
  pfpURL == "../assets/nullpfp.svg"
}


client.on('ready', function(pfpURl) {
pfpURL = client.user.avatarURL
console.log("bot active")
});

client.login(config.token);


export { pfpURL }
export { client }



