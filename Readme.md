#Projet A Simple Server


## Installation
1. Clonez le dépôt :
    ```sh
    git clone <URL_DU_DEPOT>
    ```
2. Naviguez dans le répertoire du projet :
    ```sh
    cd dockerized-project
    ```
3. Installez les dépendances :
    ```sh
    npm install
    ```

## Utilisation
1. Démarrez le serveur :
    ```sh
    node index.js
    ```
2. Ouvrez votre navigateur et accédez à [`http://localhost:3000`].

## Routes
- [`/`] qui explique ce qu'est Express.
- [`/posts`] : Effectue une requête à l'API [`https://www.affirmations.dev/`] et rend la vue [`posts.pug`] avec les données récupérées.

## Fichiers Importants
- [`index.js`] : Point d'entrée principal de l'application.
- [`routes/index.js`] : Définit la route principale [`/`]
- [`routes/posts.js`] : Définit la route [`/posts`] et utilise Axios pour récupérer des données externes.
- [`views/layout.pug`] : Layout de base pour les vues.
- [`views/index.pug`] : Vue pour la route principale [`/`].
- [`views/posts.pug`] : Vue pour la route [`/posts`].
- [`public/main.css`] : Fichier CSS principal pour le style.

## Dépendances
- [`express`](https://www.npmjs.com/package/express) : Framework web pour Node.js.
- [`pug`](https://www.npmjs.com/package/pug) : Moteur de template pour Node.js.
- [`axios`](https://www.npmjs.com/package/axios) : Client HTTP pour effectuer des requêtes externes.

## Auteur
Boris Valero
