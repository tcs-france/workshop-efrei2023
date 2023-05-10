# Lab 3 - Déploiement et passage de l'examen

## 1/ Déploiement de l'Azure Function
A l'aide de la CLI Azure, déployer l'Azure Function créée lors du Lab 1 avec le code source du Lab 2 (se réferer à la documentation [Annexes](Annexes.md) :
- Restaurer les dépendances dotnet
- Publier l'Azure Function
- Mettre à jour les variables d'environnement de l'Azure Function sur le portail Azure :
    - ConnectionStrings (AzureConnStr, Redis)
    - CenterApiUrl

## 2/ Déploiement de l'api auth-api
A l'aide de la CLI Azure et de la CLI Docker, déployer l'api auth-api créée lors du Lab 1 avec le code source du Lab 2 (se réferer à la documentation [Annexes](Annexes.md) :
- Créer une image docker de l'api auth-api
- Se connecter au container registry
- Pousser l'image docker sur le container registry
- Mettre à jour l'Azure Web App qui va héberger l'api auth-api (Deployment Center)
- Mettre à jour les variables d'environnement de l'Azure Web sur le portail Azure :
    - WEBSITES_PORT=3000
    - AZ_BUS_CONNECTION_STRING
    - AZ_BUS_QUEUE_NAME

## 3/ Déploiement de l'api exam-api
A l'aide de la CLI Azure, déployer l'api exam-api créée lors du Lab 1 avec le code source du Lab 2 (se réferer à la documentation [Annexes](Annexes.md) :
- Restaurer les dépendances dotnet pour une cible linux-x64
- Publier l'api exam-api pour une cible linux-x64
- Pousser le package sur l'Azure Web App qui va héberger l'api exam-api
- Mettre à jour les variables d'environnement de l'Azure Web sur le portail Azure :
    - ConnectionStrings (Redis)
    - CenterApiUrl

## 4/ Déploiement du front
A l'aide de la CLI Azure et de la CLI Docker, déployer le front créé lors du Lab 1 avec le code source du Lab 2 (se réferer à la documentation [Annexes](Annexes.md) :
- Créer une image docker du front
- Se connecter au container registry
- Pousser l'image docker sur le container registry
- Mettre à jour l'Azure Web App qui va héberger le front (Deployment Center)
- Mettre à jour les variables d'environnement de l'Azure Web sur le portail Azure :
    - NODE_ENV=production
    - WEBSITES_PORT=3000
    - REACT_APP_EXAM_API_URL
    - REACT_APP_CENTER_API_URL

## 5/ Supprimer le cache Redis
A l'aide de la CLI Azure Redis sur le portail Azure, supprimer les variables :
- USER_IDENTITY
- EXAM_PROGRESS

## 6/ Lancer la solution
Se connecter à l'url du front et passer l'examen.

Bon chance !
