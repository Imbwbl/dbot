// Va chercher les secrets dans le fichier secrets.js, dans le cas ou
// on est en local. Comme Heroku n'aime pas charger un module qui n'existe
// pas, il faut attraper l'erreur pour pas que cela plante...
var BoToken = null;
try {
  var s = require("./secrets");
  BoToken = s.BOT_TOKEN;
} catch (e) {
  console.log("Pas de secrets trouvé, on utilise process.env.BOT_TOKEN");
  console.log(e);
  BoToken = process.env.BOT_TOKEN;
}

// Requière la librairie Discord
const { Client, RichEmbed } = require('discord.js');

// Instancie un nouveau client Discord
const client = new Client();

// Surveille le status
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Surveille les messages
client.on('message', msg => {
  if (msg.content === '^^ping') {     // Si le message dit "ping"
    msg.reply('Pong! :ping_pong:');   // Répond "Pong!"
  }
  if (msg.content === '^^abo2') {     // Si le message dit "ping"
    msg.reply('Hey! Abonnez-vous à la châine de T2006 → https://www.youtube.com/channel/UCWC87vcR72VDYM7AGBzuBDQ :T2006:');   // Répond "Pong!"
  }
  if (msg.content === '^^salut') {     // Si le message dit "ping"
    msg.reply('dis salut');
  }
   if (msg.content === '1234') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('A slick little embed')
      // Set the color of the embed
      .setColor(0xFF0000)
      // Set the main content of the embed
      .setDescription('Hello, this is a slick embed!');
    // Send the embed to the same channel as the message
    msg.channel.send(embed);
  }
     if (msg.content === '^^abo') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle(':arrow_down: Abonne toi à T2006 :arrow_down:')
      // Set the color of the embed
      .setColor(0xff0000)
      // Set the main content of the embed
      .setDescription('https://www.youtube.com/channel/UCWC87vcR72VDYM7AGBzuBDQ');
    // Send the embed to the same channel as the message
    msg.channel.send(embed);
  }
  if (msg.content === 'avatar') {
    // Send the user's avatar URL
    msg.reply(msg.author.avatarURL);
  }
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Bienvenue ${member}!`);
  channel.send(`^^abo`);

});

// Connect le client.
client.login(BoToken);
console.log(BoToken);
