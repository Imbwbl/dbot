# dbot
Une tentative de bot discrod hebergée sur heroku.

## Marche à suivre de zéro
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
1. copier le fichier secrets.js.sample dans secrets.js. Attention, ce fichier ne doit pas être partagé et les secrets qu'il contient doivent rester privés !
1. dans un terminal, lancer le bot:
  `node index.js` ou `npm start`
1. aller dans le salon discord, et tapper "ping"; si le bot répond "Pong!" c'est gagné :)


## Pour héberger le bot sur heroku
1. il faut avoir un compte heroku
1. créer une nouvelle [app](https://dashboard.heroku.com/new-app)
1. dans les paramètres de l'app, vous pouvez changer son nom, et il faut surtout définir la "Config Vars" suivante :
  * Nom : `BOT_TOKEN`
  * Valeur : `CECI.EST.UN.TOKEN.TRES.TRES.TRES.TRES.LONG` (Comme dans les secrets)
1. dans l'onglet "Deploy", lier le repository github. Le but est d'avoir un déploiement automatique pour tout nouveaux commits sur ce repo: "Automatically deploys from master"
1. la première fois, il est possible de forcer le déploiement manuellement.
1. sous "Resources", s'assurer que le `worker` est activé. Si c'est `web`, le bot va planter en 60 secondes car heroku s'attend a avoir un "port" ouvert.
1. une fois déployé (vous pouvez suivre les logs du déploiement), on peut voir les logs (e.g. console.log()) de l'app sur https://dashboard.heroku.com/apps/VotreAPP/logs
1. comme pour la partie locale, si le bot est "online" et répond sur le canal, c'est gagné !