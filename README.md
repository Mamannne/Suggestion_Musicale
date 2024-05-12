# Suggestion_Musicale

Ce projet est réalisé dans le cadre du cours INF111 - Programmation web en Typescript

L'objectif est le suivant, en donnant votre titre de musique préféré du moment, l'application vous suggère un artiste de sa base de donnée. Il existe d'autre façon d'obtenir une suggestion musicale, certaines bien plus simples, mais je voulais essayer de développer une application entière seulement en utilisant une seule API servant à récupérer les paroles du titre original (cf. API genius). La base de donnée est pour le moment réduite à seulement 10 artistes mais pourrait être agrandi par la suite.

########Explication du fonctionnement de l'application########
- Sur la page d'accueil il vous est demandé d'entrer le titre et l'artiste
- Lorsque vous appuyez sur 'Envoyer' une requêten serveur (server.ts) qui récupère donc l'artiste et le nom
- Le sevreur fait alors appelle à l'API genius afin de récupérer les paroles de la musique
- Une fois les paroles reçus, ces denière sont envoyés à un dernier seveur (sever.py) qui lui s'occupe de faire le traitement expliqué par la suite
- Server.py reçois les lyrics sous forme de json puis les transforme en une chaine de caractère
- Il calcul la distance NCD (Normalized Compression Distance) avec plusieurs textes de différents Artistes et en fait une moyenne par artiste
- Ensuite la meilleure suggestion est attribué à l'artiste ayant la  moyenne NCD la plus faible
- Cette meilleure suggestion est alors postée au endpoint /BEST
- Enfin elle est accédée par app.ts avec fetch et présentée à l'utilisateur 


########Comment utiliser l'application########
- cloner l'intégralité du dépôt
- lancer la commande $nodemon back/out/sever.js
    - si besoin installer nodemon avec $npm install nodemon
- lancer la commande $python3 back/src/calculs/serve.py
    - si besoin installer les dépendances manquantes (elle seront précisés dans les messages d'erreur dans les pires cas)
- maintenant les deux server sont en fonction
- depuis vscode, dans l'explorer de fichier, clique droit sur index.html, puis lancer avec liveserver
- normalement les urls pour les différentes requêtes ne sont pas à modifier. SI une erreur du type 404 apparait, vérifier que les serveurs sont bien lancés sur les bons ports quitte à changer les urls
- en cas d'erreur de chargement des modules, supprimer node_modules puis package-lock.json. Enfin lancer la commande npm install. Si lors des exécutions des dépendances X manquent, faire $npm install X

########Comment contribuer au développemnt de l'application########
// Il n'y a pas d'environnement particulier à configurer pour développer à partir du moment où l'intégralité du dépôt est cloné. Voici tout de même les grandes lignes ainsi que des idées d'amélioration
- cloner l'intégralité du dépôt
- en cas d'erreur de chargement des modules, supprimer node_modules puis package-lock.json. Enfin lancer la commande npm install. Si lors des exécutions des dépendances X manquent, faire $npm install X
- il est possible de "scraper" genius afin de récupérer plus de textes de plus d'artistes et d'avoir une base de donnée plus grande.
- il est possible d'améliorer la la calcul du NCD en traitant le texte à l'avance (retirer les espaces, la ponctuation etc...)
- il est aussi possible de changer la méthode de compression (plusieurs bibliothèques sont disponibles) pour en tester plusieurs et garder ka plus efficace

// Aparté sur la distance NCD: la distance NCD permet de quantifier si deux objets sont ressemblant ou pas. Cette notion m'a été présentée durant le cours IA101 à Télécom Paris. Elle reste malgré tout imparfaite. Cette application permet malgré tout d'illustrer cette méthode et permet d'obtenir des suggestions relativement cohérente au vu du petit nombre d'artistes présent pour le moment. Pour plus de compéhension je vous invite vivement à lire NCD.md qui explique plus en détail le principe de cette méthode ce qui est primordial pour la compréhension de ce projet.




