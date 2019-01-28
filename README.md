# dbot
Une tentative de bot discrod hebergée sur heroku.

# Marche à suivre
1. créer un dépôt sur github.com
1. le clone sur son ordinateur, avec `git clone https://github.com/theophile06/dbot.git`
1. taper `npm init` pour créer le projet node.js
1. ajouter la librairie [discord.js](https://discord.js.org) en tappant `npm install discord.js --save`
1. créer le fichier index.js
1. se rendre sur [Discord Applications](https://discordapp.com/developers/applications)
  - créer une nouvelle application
    - copier son secret (CLIENT SECRET) et son ID (CLIENT ID)
  - aller sous bot et ajouter un bot
    - copier son token (TOKEN)
  - cliquer sur oAuth
    - cliquer sur "bot"
    - définir les permissions
    - copier le lien et l'ouvrir dans un navigateur
      - ceci devrait permettre d'ajouter le bot à un serveur/room
1. Copier le fichier secrets.js.sample dans secrets.js. Attention, ce fichier ne doit pas être partagé et les secrets qu'il contient doivent rester privés !
1. Dans un terminal, lancer le bot:
  `node index.js` ou `npm start`
1. Aller dans le salon discord, et tapper "ping"; si le bot répond "Pong!" c'est gagné :)