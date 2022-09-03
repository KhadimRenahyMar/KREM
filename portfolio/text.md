### Table des matières
- A propos

- Le processus
    - MVP
    - User-stories
    - Choix technologique
    - Design
    - UX
    - Déploiement

- Challenges rencontrés
    - SSR vs CSR
    - Chart
    - Base de donnée vs API

- Conclusion
    - Forces
    - Piste de réfléxion : si c'était à refaire

- Remerciements


## A propos
Le 27 Mai 2022, venant tout juste de terminer ma formation de ![Dévellopeur Web Fullstack JS](https://oclock.io/formations/developpeur-web-fullstack-javascript) auprès de l'école O'clock, je décides de construire un site Portfolio afin de me présenter, de présenter mes projets web et de mettre en avant mon savoir-faire nouvellement acquis.
La mission était donc apparement une formalité de fin de formation, une étape "facile" et rapide; mais si j'ai appris une chose dans mon parcours, c'est à ne pas confondre facilité et simplicité. 
Le rapport d'expérience ci-dessous tente donc d'en attester. 

La section ![Processus](#processus) détaille dans un premier temps les considérations préalables aux développement de ce projet web ainsi que les choix de conception. 
La section ![Challenges Rencontrés](#challenges-rencontrés) explore une séléction des meilleurs erreurs qui me soit arrivé lors du développement, ainsi que les solutions qui y ont été apportées. 
Enfin, la ![Conclusion](#conclusion) aborde différentes pistes de réfléxion afin d'offrir une meilleure perspective sur ce projet.

Bonne lecture,

## Processus

### MVP
Le produit minimum viable (MVP) de KREM se résume à un site vitrine présentant son auteur (moi) ainsi que mes projets.

La première contrainte que je me suis fixé concerne la communication. 
Le milieu des technologies de l'information (IT) regroupe de nombreux corps de métiers ne partageant pas forcément les mêmes compétences techniques qu'un Directeur Technique, et il était crucial pour moi que la consultation de mon portfolio reste agréable pour le plus grand nombre. 
Ainsi, malgré la nécéssité de présenter ma personnalité, j'ai choisi de développer des éléments d'interfaces connus et de développer des fonctionnalités sans ambiguité.

### User-stories
En tant que visiteur
|Routes (frontend)|Je veux ... | Afin ...|
|--|--|--|
|Acceuil|être acceuilli sur le site|de situer le contexte dans lequel je me trouves|
|Acceuil|connaître les informations basique sur l'auteur|de savoir qui s'adresse à moi|
|Acceuil|Avoir accès à une navigation|cerner les différentes sections du site|
|Acceuil|avoir un premier aperçu du contenu (projets)|de me faire un premier avis sur la pertinence du contenu par rapport à mon besoin|
|Acceuil|avoir un menu contextuel| faciliter la navigation si je ne suis pas certain de savoir par où débuter la visite|

|Routes (frontend)|Je veux ... | Afin ...|
|--|--|--|
|Projects|voir la liste des derniers projets|de consulter les projets les plus récents|
|Projects|voir la liste des projets|de pouvoir en consulter le détail|
|Projects|Pouvoir filtrer les projets par technologie|de consulter uniquement les projets correspondant à une technologie précise|
|Projects|Pouvoir filtrer les projets par taille|de trier les projets par leur durée de développement/difficulté|
|Projects|avoir un aperçu du contenu des projets (nom, taille, technologie|de consulter les projets les plus pertinents et d'avoir une confirmation visuelle du filtrage des projets|

|Routes (frontend)|Je veux ... | Afin ...|
|--|--|--|
|Project|voir des screenshots/wireframes) du projet réalisé|d'avoir un aperçu visuel du résultat final|
|Project|Retrouver les informations basique du projet (description, taille)|de confirmer la consistance des informations de la page Projects|
|Project|pouvoir accèder au site|profiter d'une expérience utilisateur personnelle avant d'entrer dans les détails|
|Project|Voir la liste des composants, packages et patrons de conception utilisés |d'avoir un résumé des enjeux technique du projet|
|Project|avoir accès à une explication détaillée|de comprendre les enjeux de développement du projet|
|Project|pouvoir remonter directement en haut de la page|retrouver la navigation plus facilement|

|Routes|Je veux ... | Afin ...|
|--|--|--|
|Skills|avoir un récapitulatifs des informations de l'auteur|me concentrer sur les savoirs-être|
|Skills|Avoir accès aux statistiques d'activité Github de l'auteur|de savoir si l'auteur est toujours actif|

|Routes|Je veux ... | Afin ...|
|--|--|--|
|Skills - écran "Compétences"|Pouvoir consulter les compétences techniques (frentend/backend) de l'auteur|de savoir si l'auteur est familier du processus de développement d'un projet web|
|Skills - écran "Compétences"|pouvoir consulter la liste des technologies et composants|de connaitre le niveau de compétence sur les technologies qui m'intéresse|
|Skills - écran "Parcours"|Voir une liste des expériences professionnelle de l'auteur|de me faire une idée de son parcours professionnel|
|Skills - écran "Reviews"|voir recommandation/avis concernant l'auteur|d'avoir un point de vue exterieur sur le profil |
|Skills - écran "Qui suis-je"|connaitre les compétences transverses, traits de personnalités et centres d'intérêt de l'auteur|de mieux comprendre la personne derrière le profil|

|Routes|Je veux ... | Afin ...|
|--|--|--|
|404|avoir un avertissement|de savoir que la requête que j'ai effectuée est erronnée|
|404|Avoir un moyen rapide de retourner à l'acceuil|de faciliter la navigation|

|Routes|Je veux ... | Afin ...|
|--|--|--|
|*|avoir accès à un menu "Contact"|contacter l'auteur rapidement lorsque je suis certain de la pertinence d'une mise en relation|

*: toutes les pages


### Choix technologique
#### Frontend
- React : dans l'optique d'obtenir l'experience utilisateur la plus agréable possible, j'ai choisi d'utiliser React pour son focus sur l'intéractivité des composants d'UI et la fluide qui en découle. L'application en une seule page (SPA) qui en résulte offre de nombreux outils qui m'ont permis de simplifier l'architecture et l'arborescence du projet.

- React-router-dom: bibliothéque de routage React dont le but est de rendre l'interface React synchrone avec l'URL du navigateur
- prop-types : outil de validation de type, permet de contrôler le type de donnée que mes composants se transmettent afin d'assurer le respect de leur intégrité.
- sass : pré-processeur CSS permettant une synthaxe SCSS, notemment l'indentation des classes CSS qui offre une hierarchisation des classes plus intuitive.
- axios : client HTTP pour navigateur et nodeJS, axios m'a servi a récupérer (fetch) mes données depuis les API de Github et Cloudinary.
- lozad : outil permettant un chargement de ressource (images) différé, lozad m'a été utile pour réduire le temps de chargement initial de la page.
- react-markdown : outil permettant d'incorporer du contenu markdown en JSX.  
- semantic UI : bibliothèque d'éléments d'UI dont est tiré le loader visible lors du chargement des données. 
- webpack + babel : webpack est un outil d'empaquetage permettant de rassembler de façon optimale les nombreux fichiers de code et ressources en un paquet optimisé pour le web. Babel est un compilateur Javascript qui m'a été utile pour assurer la plus grande compatibilité possible entre la synthaxe ES6 et les différents navigateur web.

- React Modele : boîte à outil React développé par O'clock. Ce package m'a été particulièrement utile car il offre une trame de configuration webpack propre m'ayant ensuite permis d'assurer une compatibilité maximale entre webpack et les autres technologies que j'utilise.
- eslint : outil de vérification de synthaxe et d'erreur Javascript en temps réél.
#### Backend
- NodeJS + Express : nodeJS est un langage Javascript composé de bibliothèques permettant d'ouvrir et fermer des connections réseau, base sur laquelle Express, framework d'application nodeJS, m'offre une panoplie d'outils simple pour créer le serveur sur lequel tourne mon projet. J'ai choisi d'utiliser nodeJS et Express pour le ratio efficacité/simplicité qu'ils offrent.
- Typescript : langage Javascript fortement typé, le typage Typescript m'a permis de m'assurer de la préservation de l'intégrité des données transitant côté backend.
- bodyparser : middleware nodeJS permettant d'analyser les données transmises dans le corps d'une requête. 
- cookie-session : middleware nodeJS permettant de stocker des informations temporairement
- cors : package nodeJS permettant le partage de ressource à des origines (url) multiples. Me sers principalement en mode "développement" où React opère sur le port 8080 tandis que le backend tourne sur le port 5050.
- dotenv : outil de chargement de variable d'environnement, me sers à contenir et utiliser les données sensibles (secret, clés API...) en toute confidentialité. 
- compression : middleware nodeJS me permettant de compresser les réponses aux requête en Gzip, format de compression offrant de meilleur performance.
- cloudinary (Admin API) : API me permettant de récuperer mes ressources hebergé sur le CDN Cloudinary.
- Github API : API me permettant de récupérer les ressources directement dans mes "repo" github et d'obtenir les statistiques de la page "Compétences".

### Design

La définition d'une charte graphique (losrqu'il n'y en a pas déjà une) est généralement l'une des étapes les plus importante pour structurer mon code, avec la définition d'un modèle de donnée et le choix des routes que ces données emprunteront.

Alors que la tendance web design depuis 2018 est plutôt au minimalisme, j'ai choisi de créer un design plus personnel car le but du projet, de mon portfolio, est de présenter mon univers.

Tout d'abord, parce que c'est l'aspect visuel le plus évident, j'ai décidé de définir les couleurs en m'appuyant du site Coolors qui permet de choisir une palette cohérente.
Pour les composants d'interface classique (Navigation, Footer, Contact) j'ai choisi un Eerie Black (#202020) car c'est un choix éprouvé et robuste, il est notemment utilisé pour le dark mode.
Pour définir l'atmosphère et l'identité de mon projet, j'ai choisi un bleu Oxford (#04192E), couleur profonde et apaisante qui ne fatigue pas le regard. 
Enfin, pour indiquer la possibilité pour l'utilisateur d'intéragir avec l'intérface, je me repose sur du Jaune Chrome (#FFAA00), couleur vive et chaleureuse.
Ce choix de couleur s'appui peu sur le contraste pour établir une hierachie visuelle, mais plutôt sur le rôle que chacune occupe. La relation qu'ont ces couleurs entre-elles met en valeur la donnée et distance ce projet des codes du site vitrine pour le rapprocher du sentiment que peux offrir une application.
En appui, j'utilise contextuellement du blanc (#f5f5f5) et du noir (#000) à mi-opacité afin de créer des nuances des couleurs principales sans rompre leur cohésion.
Après avoir effectué le premier jet de mes wireframes, il m'est apparu que cela manquait encore de présence, c'est pourquoi j'ai habillé le background d'un motif léger de nuage contouré positionnés en damier. 

Ensuite, j'ai eu à choisir mes polices d'écriture. Puisque ce projet repose principalement sur des données écrites, la hierarchie importe énormement afin de ne pas saturer le visiteur d'information. C'est pourquoi j'ai utilisé Fontjoy afin de choisir 3 polices d'écriture cohérentes : Oswald pour l'interface du portfolio, Inconsolata pour les titres et sous-titre en rapport avec le contenu et Roboto Slab pour les textes. J'ai également ajusté la hauteur de ligne et l'espacement des caractères, toujours dans le but de permettre une plus grande lisibilité.

Pour certain éléments d'UI intéractifs, j'ai décidé d'opter un motif hexagonale plus original et élégant qu'un cercle classique ou qu'un jeu d'arrondis.
### UX
### Déploiement

### 3 Challenges Rencontrés

#### SSR vs CSR
##### Problème
##### Enquête
##### Solution

#### Chart
##### Problème
##### Enquête
##### Solution

#### Base de donnée vs API
##### Problème
##### Enquête
##### Solution


## Conclusion
### Piste de réfléxion : Forces du projet
### Piste de réfléxion : Si c'était à refaire