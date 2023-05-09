# Lab 1 - Création de l'environnement Cloud

## 1/ Connexion au portail Azure
Se rendre sur https://portal.azure.com et se connecter avec les identifiants de votre compte.

## 2/ Création d'un groupe de ressources
Un groupe de ressources est un conteneur logique dans lequel les ressources Azure sont déployées et gérées. Lorsque vous créez une ressource Azure, vous devez spécifier à quel groupe de ressources elle appartient. 

Vous allez créer un nouveau groupe de ressources qui sera le groupe de toutes vos ressources pour ce workshop.

## 3/ Création d'un container registry
Un container registry est un service Azure qui permet de stocker des images de conteneurs Docker. 

Vous allez créer un container registry qui sera utilisé pour stocker les images de vos conteneurs.

## 4/ Création d'un cache Redis
Redis est un cache en mémoire distribué, utilisé comme base de données, cache et courtier de messages.

Vous allez créer un cache Redis qui sera utilisé pour stocker les données utiles au fonctionnement de votre solution.

## 5/ Création d'un service de bus de message
Un service de bus de message est un service Azure qui permet de stocker des messages dans une file d'attente.

Vous allez créer un service de bus de message qui sera utilisé pour faire communiquer certains services de votre solution.

## 6/ Création d'une Azure Function
Une Azure Function est un service Azure qui permet d'exécuter du code en réponse à un événement.

Vous allez créer une Azure Function qui sera utilisée pour créer les comptes utilisateur.

## 7/ Création des Azure Web Apps
Une Azure Web App est un service Azure qui permet d'héberger des applications Web.

Vous allez créer 3 Azure Web Apps qui seront utilisées pour héberger les 3 applications Web de votre solution (2 images docker et une appication asp.net core).

### a. Création de l'application Web pour l'api d'authentification
Application Python containerisée qui sera en charge de lancer le workflow de création d'un compte utilisateur. Cette application est une API de type REST.

### b. Création de l'application Web pour l'api de gestion de l'examen
Application asp.net core qui sera en charge de gérer l'examen. Cette application est une API de type REST.

### c. Création de l'application Web pour le front étudiant
Application React containerisée qui sera en charge de l'interface utilisateur pour les étudiants. Cette application est une interface web de type SPA.