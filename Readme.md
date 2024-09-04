
# Projet de serveur dockérizé 

Ce projet a pour objectif de démontrer mes compétences en développement et déploiement d'applications web, ainsi que ma capacité à dockeriser des applications pour une gestion efficace des environnements. Je suis enthousiaste à l'idée de rejoindre une équipe DevOps et d'apporter mon expertise en automatisation et en gestion des infrastructures

## Dockerisation

Pour exécuter l'application dans un conteneur Docker :

1. Construisez l'image Docker :
    ```sh
    docker build -t simpleserver .
    ```
2. Exécutez le conteneur :
    ```sh
    docker run -p 3000:3000 simpleserver
    ```
3. Ouvrez votre navigateur et accédez à [`http://localhost:3000`].

## Routes

- [`/`] : Affiche la page d'accueil.
- [`/posts`] : Effectue une requête à l'API [`https://www.affirmations.dev/`] et rend la vue [`posts.pug`] avec les données récupérées.

## Dépendances

- [`express`](https://www.npmjs.com/package/express) : Framework web pour Node.js.
- [`pug`](https://www.npmjs.com/package/pug) : Moteur de template pour Node.js.
- [`axios`](https://www.npmjs.com/package/axios) : Client HTTP pour effectuer des requêtes externes.

---

