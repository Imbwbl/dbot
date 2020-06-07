// Le but est de récupérer le flux RSS d'une chaine youtube en JavaScript
// Chaine ciblée: https://www.youtube.com/channel/UCN25q81_zmzVMMRGxMvEf4w/videos
// Trouver le flux RSS de la chaine avec https://lehollandaisvolant.net/?d=2018/06/09/13/55/04-mini-outil-retrouver-le-flux-rss-dune-chaine-youtube
// Ce qui donne https://www.youtube.com/feeds/videos.xml?channel_id=UCN25q81_zmzVMMRGxMvEf4w

// Fichier de démo à lancer avec `node rss.js` (nécessite l'installation du paquer rss-parser)

let Parser = require('rss-parser');
let parser = new Parser();

(async () => {

  let feed = await parser.parseURL('https://www.youtube.com/feeds/videos.xml?channel_id=UCN25q81_zmzVMMRGxMvEf4w');
  console.log(feed);
  console.log(feed.title, feed.feedUrl, feed.link);

  feed.items.forEach(item => {
    console.log(item.title + ':' + item.link)
  });

})();
