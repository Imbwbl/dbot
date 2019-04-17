# dbot
Une tentative de bot Discrod hebergée sur heroku.

## Marche à suivre "rapide"
Cette marche à suivre tente de lister les étapes minimum pour pouvoir
  1. Lancer le bot/script localement sur sa machine et le tester dans un serveur Discord ;
  1. Héberger le bot sur heroku.com, afin qu'il soit disponible 24/24.

### Pré-Requis
Afin de mener a bien les opérations suivantes, il est nécessaire d'avoir :
  * Un compte [GitHub](https://github.com)
  * Un compte [Discord](https://discordapp.com)
  * Un compte [Heroku](https://heroku.com)

De plus, afin de pouvoir modifier et tester le script, il est nécessaire
d'installer les programmes suivants sur sa machine :
  * [Node.js](https://nodejs.org)
  * [Git](https://git-scm.com/)

Optionellement, vous pouvez aussi installer l'application [Discord](https://discordapp.com), un client Git, comme [GitKraken](https://www.gitkraken.com), ainsi que le [heroku-cli](https://devcenter.heroku.com/articles/heroku-cli).

## Étape 1. Cloner le dépôt de theophile06
1. Visiter https://github.com/theophile06/dbot et cliquer "Fork", pour "forker" le repository dans votre compte GitHub.
1. Cloner ensuite le fork nouvellement créé sur votre ordinateur, avec `git clone https://github.com/XXXXX/dbot.git`, ou `XXXXXX` est votre nom d'utilisateur.
1. Ouvrir le dossier cloné dans le terminal, et taper `npm install` pour installer les dépendances.
1. Avec un éditeur de texte, dupliquer le fichier `secrets.js.sample` et le renommer `secrets.js`
1. Il s'agit maintenant d'obtenir un secret (appellé BOT_TOKEN) de la part de discord permettant d'authoriser le BOT.
  * Aller sur [Discord Applications](https://discordapp.com/developers/applications)
  * Cliquer sur "New Application" et choisir un nom
  * Sur la page de l'application, copier
    1. CLIENT ID
    1. CLIENT SECRET

    Et remplacer les variables adéquates dans le fichier `secrets.js`  
1. Sur la page de l'application, se rendre dans le menu "Bot" à gauche, puis cliquer sur "Add Bot"
1. Copier le BOT_TOKEN et le remplacer dans le fichier `secrets.js`
1. Cliquer le menu OAuth2:
  * Dans le tableau SCOPES, ajouter "Bot"
  * Dans le tableau "BOT PERMISSION", ajouter les "PERMISSIONS TEXTUELLES" utiles  
1. Copier ensuite l'URL de la forme `https://discodapp.com/api/oauth2/authorize?client_id=11223344556677&permissions=449600&scope=bot` (ou générer ce lien) et l'ouvrir dans un navigateur
1. Ceci permet d'ajouter un bot à un serveur; sélectionner un serveur (plutôt de test pour le moment) et octroyez les permissions nécessaires (normalement déjà définie à l'étape précédente). Si vous n'en n'avez pas il faut en créer un depuis l'application ([Exemple](./Discord_server.png)) et rafraîchir la page pour le voir...
1. Autoriser le bot.
1. Le bot à normalement rejoint un chat sur discord et vous êtes notifié.
1. Maintenant que le bot est présent dans un chat discord, vous pouvez lancer le serveur du bot avec la commande `npm start` depuis un terminal.
1. A ce point la, le bot devrait répondre aux messages dans le channel. Essayaez par exemple d'écrire `^^ping`... le bot devrait répondre pong !

## Étape 2. Héberger le bot sur heroku
1. il faut avoir un compte heroku
1. créer une nouvelle [app](https://dashboard.heroku.com/new-app), en lui donnant un nom et une région (p.ex. Europe)
1. dans la section "deployement methods" (ou depuis l'onglet "Deploy"), choisir GitHub. Autoriser Heroku et continuer.
  1. Dans la section "Connect to GitHub", rechercher le nom du repository (par exemple dbot) et le connecter.
  1. Cliquer sur "Enable Automatic Deploys"
  1. Le but est d'avoir un déploiement automatique pour tout nouveaux commits sur ce repo: "Automatically deploys from master"
  1. Au débuts, il est possible de forcer le déploiement manuellement en cliquant sur "Deploy Branch"
1. Il faut maintenant définir la "Config Vars" du BOT_TOKEN. Se rendre dans l'onglet "Settings" et "Reveal config vars" pour créer la variable suivante :
  * Nom : `BOT_TOKEN`
  * Valeur : `CECI.EST.UN.TOKEN.TRES.TRES.TRES.TRES.LONG` (Comme dans les secrets)
1. sous "Resources", s'assurer que le `worker` est activé. Si c'est `web`, le bot va planter en 60 secondes car heroku s'attend a avoir un "port" ouvert.
1. une fois déployé (vous pouvez suivre les logs du déploiement), on peut voir les logs (e.g. console.log()) de l'app sur https://dashboard.heroku.com/apps/VotreAPP/logs
1. comme pour la partie locale, si le bot est "online" et répond sur le canal, c'est gagné !
1. Note que par défaut, le Bot est déployé dans un "dyno" web. Depuis l'onglet "Overview", cliquer sur configure dyno, désactiver le dyno "web" et activer le dyno "worker" (TODO: comprendre comment le faire par défaut...)

## Marche à suivre en partant de *zéro*
[DEPRECATED]
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
