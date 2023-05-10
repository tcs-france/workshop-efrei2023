# Annexes
Toutes les commandes utiles à ce workshop se trouvent dans cette annexe.

## Commandes Bash :
```bash
# Créer une variable d'environnement
export NOM_VARIABLE="VALEUR_VARIABLE"
```

## Commandes Git :
```bash
# Cloner un repository
git clone [REPO_URL] .
```

## Commandes Docker :
```bash
# Se connecter au container registry
az acr login --name "[REGISTRY_NAME]"

#OR

docker login [REGISTRY_NAME].azurecr.io
```

```bash
# Créer une image docker
docker build --tag [IMAGE_NAME] .
```

```bash
# Lancer un container docker en local
docker run -it --rm ...... [IMAGE_NAME]
```

```bash
# Tagguer une image docker
docker tag [IMAGE_NAME] [REGISTRY_URL]/[IMAGE_NAME]
```

```bash
# Pousser une image docker sur un container registry
docker push [REGISTRY_URL]/[IMAGE_NAME]
```

## Commandes Python
```bash
# Restaurer les dépendances pip
pip install -r requirements.txt

# OR

pip3 install -r requirements.txt
```

```bash
# Lancer une application python
python [FILE_NAME].py

# OR

python3 [FILE_NAME].py
```

## Commandes NodeJS
```bash
# Restaurer les dépendances npm
npm install
```

```bash
# Lancer une application React
npm start
```

## Commandes .NET Core :

```bash
# Executer en local une application dotnet core
dotnet restore
dotnet build
dotnet run
````

```bash
# Publier une application dotnet core pour Azure
dotnet restore [PROJECT_NAME].csproj --runtime linux-x64

dotnet publish [PROJECT_NAME].csproj -c Release --no-restore --runtime linux-x64 --no-self-contained -o ./output
```

```bash
# Préparer un package zip pour Azure
# Windows
cd output
Compress-Archive . publish.zip

#Linux or Mac
cd output
zip -r publish.zip .
```

## Commandes Azure Function :

```bash
# Compiler et lancer en local une Azure Function
dotnet restore
dotent build
func start
```

## Commandes Azure CLI :

```bash
# Se connecter à Azure
az login
````

```bash
# Changer d'abonnement
az account set -s "[SUBSCRIPTION_ID]"
````

```bash
# Lister les webapps
az webapp list --resource-group "[RESOURCE_GROUP]" --query "[].{appName: repositorySiteName, hostName: defaultHostName, state: state}"
```

```bash
# publier une webapp .net core sur Azure
az webapp deploy --resource-group "[RESOURCE_GROUP]" --name "[APP_NAME]" --src-path "[ZIP_FILE].zip" --type zip
```

```bash
# Lister les Azure Functions
az functionapp list --resource-group "[RESOURCE_GROUP]" --query "[].{appName: repositorySiteName}"
```

```bash
# Publier une Azure Function
az functionapp deployment source config-zip --resource-group "[RESOURCE_GROUP]" --name "[FUNCTION_NAME]" --src "[ZIP_FILE].zip"
```

## Commandes Azure Redis

```bash
# Supprimer une variable
DEL [VARIABLE_NAME]
```
