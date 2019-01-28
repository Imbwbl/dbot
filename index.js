// Va chercher les secrets dans le fichier secrets.js
var s = require("./secrets");

// Requière la librairie Discord
const Discord = require('discord.js');
// Instancie un nouveau client Discord
const client = new Discord.Client();

// Surveille le status
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Surveille les messages
client.on('message', msg => {
  if (msg.content === 'ping') {  // Si le message dit "ping"
    msg.reply('Pong!');          // Répond "Pong!"
  }
});

// Connect le client. Utise soit le secret, soit une variable d'environneent
client.login(s.BOT_TOKEN || process.env.BOT_TOKEN);