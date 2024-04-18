# Présentation de l'application

## Description

Command Craftor est une application qui permet de créer des commandes minecraft en quelques clics.\
le but de cette application est de simplifier la création de commandes minecraft en proposant une 
interface graphique simple et intuitive pour tous.

## Fonctionnalités

Pour le moment, il n'y a pas de fonctionnalités disponibles.\
le readme sera update au fur et à mesure de l'avancement du projet.

# Utilisation

L'application est en cours de développement, mais elle est acessible à l'adresse suivante:
[command craftor](https://commandcraftor.ebasson.fr)

___

# Développement

## Front

Le Front est fait en React TypeScript

## Back

L'Api est En Node.Js

## Base de Données

La Base de Donnée est une base MongoDB

## Travail Fait

Le travail fait sur GitHub est surtout dans la CI/CD et dans les Branches via les Nommages, les créations de Tags, et les Pull/Merge

![alt text](/.github/imagesRM/image.png)



## Déploiement

Avec github actions, un script est lancé a chaque push, ou pull request validé sur la 
branche main.

Ce script est découpé en 4 étapes:
- Linter
- Test
- Build
- Deploy

## CI/CD

### Linter
```yaml
Linter:
  runs-on: ubuntu-latest

  steps:
    - uses: actions/checkout@v3

    - name: Lint Action
      uses: wearerequired/lint-action@v2.3.0
```

Dans cette partie, un job nommé "Linter" est défini. Ce job s'exécute sur la dernière version d'Ubuntu. 
Il comprend deux étapes :  

`actions/checkout@v3` : Cette action permet de récupérer le code du dépôt GitHub sur le runner.  

`Lint Action` : Cette action utilise `wearerequired/lint-action@v2.3.0` pour exécuter le linter.  
Dans ce contexte, elle exécute un linter pour TypeScript et/ou JavaScript.

Si le linter détecte des erreurs dans le code, cette étape échouera, et par conséquent, le workflow 
d'intégration continue échouera également.

### Test
```yaml
Tests:
  runs-on: ubuntu-latest
  needs: Linter

  steps:
    - uses: actions/checkout@v3

    # install npm dependencies
    - name: Install dependencies
      run: npm install

    # Runs tests
    - name: Run test
      run: npm test
```

Dans cette partie, un job nommé "Tests" est défini. Ce job s'exécute sur la dernière version d'Ubuntu et dépend 
du job "Linter". Il comprend trois étapes :

1. `actions/checkout@v3` : Cette action permet de récupérer le code du dépôt GitHub sur le runner.
2. `Install dependencies` : Cette étape installe les dépendances du projet en utilisant la commande npm install.
3. `Run test` : Cette étape exécute les tests du projet en utilisant la commande npm test.  

Si les tests échouent pour une raison quelconque (par exemple, si un test ne passe pas), 
cette étape échouera, et par conséquent, le workflow d'intégration continue échouera également.

### Build
```yaml
Build:
  runs-on: ubuntu-latest
  needs: Tests

  steps:
    - uses: actions/checkout@v2

    - run: npm ci
    - run: npm run build --if-present
```

Dans cette partie, un job nommé "Build" est défini. Ce job s'exécute sur la dernière version d'Ubuntu et dépend du 
job "Tests". Il comprend trois étapes :  

1. `actions/checkout@v2` : Cette action permet de récupérer le code de votre dépôt GitHub sur le runner.  

2. `npm ci` : Cette commande installe les dépendances du projet en utilisant le fichier package-lock.json. C'est une 
version plus rapide et plus fiable de npm install.  

3. `npm run build --if-present` : Cette commande exécute le script "build" défini dans le fichier package.json, 
si ce script existe. Dans le contexte de votre projet, ce script compile le code TypeScript en JavaScript et crée
un bundle de l'application React.  

Si le processus de build échoue pour une raison quelconque (par exemple, si le code TypeScript ne peut pas 
être compilé), cette étape échouera, et par conséquent, le workflow d'intégration continue échouera également.

### Deploy
```yaml 
Deploy:
  runs-on: ubuntu-latest
  needs: Build

  steps:
    - name: Deploy
      uses: appleboy/ssh-action@v1.0.3
      with:
        host: ${{ secrets.REMOTE_HOST }}
        username: ${{ secrets.REMOTE_USER }}
        password: ${{ secrets.REMOTE_PASSWORD }}
        port: ${{ secrets.REMOTE_PORT }}
        script: /scripts/deployCommandCraftor.sh
```

Dans cette partie, un job nommé "Deploy" est défini. Ce job s'exécute sur la dernière version d'Ubuntu et 
dépend du job "Build". Il comprend une étape :  

`Deploy` : Cette étape utilise `appleboy/ssh-action@v1.0.3` pour se connecter à un serveur distant via SSH et 
exécuter un script de déploiement. Les détails de connexion au serveur (hôte, nom d'utilisateur, mot de passe et port) 
sont stockés en tant que secrets dans le dépôt GitHub. Le script de déploiement /scripts/deployCommandCraftor.sh 
est exécuté sur le serveur distant, c'est un serveur Ubuntu hébergé par Hostinger.

Si le processus de déploiement échoue pour une raison quelconque (par exemple, si le script de déploiement échoue), 
cette étape échouera, et par conséquent, le workflow d'intégration continue échouera également.