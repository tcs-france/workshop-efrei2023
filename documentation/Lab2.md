# Lab 2 - Test de la solution en local

## 1/ Installation des outils
Se réferer à la documentation [Environnement](Environnement.md) pour installer les outils nécessaires au développement de la solution.

## 2/ Récupération du code source
Le code source de la solution se trouve sur un repo Github à l'adresse suivante : https://github.com/tcs-france/workshop-efrei2023. 

Faire un clone de ce repository sur votre machine locale (se réferer à la documentation [Annexes](Annexes.md)).

## 3/ Lancement et test de la solution en local
### a. auth-worker
- Dupliquer le fichier [local.settings.default.json](../auth-worker/local.settings.default.json) et le renommer en `local.settings.json`
- Remplacer les valeurs des variables d'environnement ConnectionStrings par les valeurs correspondantes à votre environnement Azure (se réferer au portail Azure et aux indications de animateurs)
- Remplacer la valeur de la variable d'environnement ExamApiUrl par la valeur indiquée par les animateurs
- Compiler et executer le projet auth-worker (se réferer à la documentation [Annexes](Annexes.md) pour compiler et executer en local une AZure Function).

### b. auth-api
- Créer les variables d'environnement (voir la documentation [Annexes](Annexes.md) pour créer des variables d'environnement) pour les variables suivantes :
    - API_PORT (port d'écoute de l'api, ex: 4000)
    - AZ_BUS_CONNECTION_STRING (connection string du service de bus de message, se réferer au portail Azure et aux indications de animateurs)
    - AZ_BUS_QUEUE_NAME (nom de la file d'attente du service de bus de message, se réferer au portail Azure et aux indications de animateurs)
- Restaurer les dépencances pip (se réferer à la documentation [Annexes](Annexes.md) pour restaurer les dépendances pip)
- Lancer le projet auth-api (se réferer à la documentation [Annexes](Annexes.md) pour lancer une application Python)

### c. exam-api
- Dupliquer le fichier [appsettings.json](../exam-api/appsettings.json) et le renommer en `appsettings.Development.json`
- Remplacer les valeurs des variables d'environnement ConnectionStrings par les valeurs correspondantes à votre environnement Azure (se réferer au portail Azure et aux indications de animateurs)
- Remplacer la valeur de la variable d'environnement CenterApiUrl par la valeur indiquée par les animateurs
- Restaurer les dépencances dotnet (se réferer à la documentation [Annexes](Annexes.md) pour restaurer les dépendances dotnet)
- Lancer le projet exam-api (se réferer à la documentation [Annexes](Annexes.md) pour lancer une application dotnet)
- Accepter la création du certificat de sécurité auto-signé

### d. front
- Dupliquer le fichier [.env.default](../front/.env.default) et le renommer en `.env`
- REmplacer les variables du fichier `.env` pour les adapter à votre environnement local :
    - REACT_APP_AUTH_API_URL (url de l'api auth-api, ex: http://localhost:4000)
    - REACT_APP_EXAM_API_URL (url de l'api exam-api, ex: https://localhost:5000)
- Restaurer les dépendances npm (se réferer à la documentation [Annexes](Annexes.md) pour restaurer les dépendances npm)
- Créer la variable d'environnement NODE_TLS_REJECT_UNAUTHORIZED avec la valeur '0' (se réferer à la documentation [Annexes](Annexes.md) pour créer des variables d'environnement)
- Lancer le projet front (se réferer à la documentation [Annexes](Annexes.md) pour lancer une application React)

### e. Tester la solution
- Ouvrir un navigateur et se rendre à l'adresse de l'interface front (http://localhost:3000 par exemple)
- Créer un compte utilisateur
- Vérifier que vous accédiez bien à la première question de l'examen

### f. En cas de soucis
- Vérifier que les variables d'environnement sont bien renseignées
- Vérifier que les services Azure sont bien démarrés
- Vérifier que les ports utilisés par les applications sont bien disponibles
- Vérifier que les applications sont bien démarrées
- Tester l'api auth-api avec un outil comme Postman
- Tester l'api exam-api avec via l'url swagger (http://localhost:5000/swagger par exemple)
