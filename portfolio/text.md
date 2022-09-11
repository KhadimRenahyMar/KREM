### Table des matières
- A propos 

- Le processus
    - MVP
    - UX
    - User-stories
    - Choix technologique
    - Design

- Challenges rencontrés
    - SSR vs CSR
    - Chart
    - Base de donnée vs API

- Conclusion


## A propos

Après une formation de Développeur Web Fullstack réalisé au sein de l'école ![O'clock](https://oclock.io/formations/developpeur-web-fullstack-javascript), il est conseillé de présenter ses réalisations, de réaliser un CV et de créer un profil LinkedIn. 
La mise en place de ces outils essentiels est souvent considéré comme une formalité, or le contenu de ces outils est destiné à évoluer, génèrant un besoin d'actualisation récurente et chronophage.

Il m'est donc apparu nécéssaire de réduire cette contrainte en développant un outil plus dynamique afin de centraliser mes réalisations et de permettre de suivre l'évolution de mes compétences.


Ce rapport d'expérience détaille la conception de cet outil :  
La section "Processus" détaille dans un premier temps les considérations préalables aux développement de ce projet web ainsi que les choix de conception. 
La section "Challenges Rencontrés" explore une séléction des difficultés auxquelles j'ai été confronté lors du développement, ainsi que les solutions qui y ont été apportées. 
Enfin, la "Conclusion" aborde différentes pistes de réfléxion afin d'offrir une meilleure perspective sur ce projet.

Bonne lecture,

## Processus

### Produit minimum viable (MVP)
KREM est un site portfolio dont le but est de présenter le curriculum, les compétencess et les projets web de son auteur.

### UX
Un site portfolio classique se classe généralement dans la catégorie des sites vitrines, dont le but est de présenter un produit ou un service. Plus globalement, l'objectif est de délivrer une information aux visiteurs, et chaque élément est conçu pour cette vocation. 
Avec le temps, les visiteurs ont appris à associer les codes et fonctionnements du site vitrine type avec des attentes spécifiques : sachant que le site regorge d'information dont seulement une minorité d'entre-elles le concerne, le visiteur tend à lire l'interface en diagonale, le temps de s'orienter vers l'information qui lui est la plus pertinente, et délaisse le reste. 

Dans le contexte d'une application, le visiteur devient utilisateur et les conséquences de ce changement de statut change son comportement face à l'information. 
Si une application telle que Deliveroo a évidemment moins d'information à communiquer qu'un page Wikipédia, l'utilisateur est désormais au centre du fonctionnement de l'application. L'utilisateur comprend alors que toutes les informations mise à sa disposition le concerne et lui seront pertinente à un moment donné, il ne saute donc plus sur "l'information utile" mais commence par se familiariser avec l'interface, à évaluer ce qui a le plus d'intérêt pour lui immédiatement et ne ferme pas la porte à ce qu'il choisi d'ignorer sur le moment.

KREM est un portfolio de type site vitrine, et s'il ne possède pas d'utilisateur à proprement parler, il a pour mission d'engager fortement l'attention de ses visiteurs. Bien qu'il n'ait pas un profil unique de visiteur, le sujet même de ce site (le développement web) défini sa cible : les professionnels des technologies de l'information (IT). KREM a donc été conçu afin de prendre en compte le contexte et les besoins de cette cible, notemment par son contenu pertinent et sectorisé et son interface directe et minimale où toutes les informations sont à moins d'un clic.

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


### User-stories
En tant que visiteur
|Routes (frontend)|Je veux ... | Afin ...|
|--|--|--|
|accueil|être accueilli sur le site|de situer le contexte dans lequel je me trouves|
|accueil|connaître les informations basique sur l'auteur|de savoir qui s'adresse à moi|
|accueil|Avoir accès à une navigation|cerner les différentes sections du site|
|accueil|avoir un premier aperçu du contenu (projets)|de me faire un premier avis sur la pertinence du contenu par rapport à mon besoin|
|accueil|avoir un menu contextuel| faciliter la navigation si je ne suis pas certain de savoir par où débuter la visite|

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

|Routes (frontend)|Je veux ... | Afin ...|
|--|--|--|
|Skills|avoir un récapitulatifs des informations de l'auteur|me concentrer sur les savoirs-être|
|Skills|Avoir accès aux statistiques d'activité Github de l'auteur|de savoir si l'auteur est toujours actif|

|Routes (frontend)|Je veux ... | Afin ...|
|--|--|--|
|Skills - écran "Compétences"|Pouvoir consulter les compétences techniques (frentend/backend) de l'auteur|de savoir si l'auteur est familier du processus de développement d'un projet web|
|Skills - écran "Compétences"|pouvoir consulter la liste des technologies et composants|de connaitre le niveau de compétence sur les technologies qui m'intéresse|
|Skills - écran "Parcours"|Voir une liste des expériences professionnelle de l'auteur|de me faire une idée de son parcours professionnel|
|Skills - écran "Reviews"|voir recommandation/avis concernant l'auteur|d'avoir un point de vue exterieur sur le profil |
|Skills - écran "Qui suis-je"|connaitre les compétences transverses, traits de personnalités et centres d'intérêt de l'auteur|de mieux comprendre la personne derrière le profil|

|Routes (frontend)|Je veux ... | Afin ...|
|--|--|--|
|404|avoir un avertissement|de savoir que la requête que j'ai effectuée est erronnée|
|404|Avoir un moyen rapide de retourner à l'accueil|de faciliter la navigation|

|Routes (frontend)|Je veux ... | Afin ...|
|--|--|--|
|*|avoir accès à un menu "Contact"|contacter l'auteur rapidement lorsque je suis certain de la pertinence d'une mise en relation|

*: toutes les pages


### Design

La définition d'une charte graphique a été l'une des étapes les plus structurante de ce projet après la définition du modèle de donnée et le choix des routes que ces données empruntent.

En effet, KREM doit composer avec des besoins opposées : le site doit présenter des projets professionnels tout en rendant leur auteur familier.
Afin de résoudre cette ambivalence, KREM propose un contenu professionnel détaillé au travers d'une identité visuelle claire mais plus personnelle. Par cette répartition des rôles, les besoins ne se croisent plus et parviennent même à s'enrichir.

#### Couleurs
Parce que c'est l'aspect visuel le plus évident, il a fallu commencer par choisir une palette de couleur cohérente en s'aidant du site Coolors.
Pour les composants d'interface classique (Navigation, Footer, Contact), KREM utilise du Eerie Black (#202020) car c'est un choix éprouvé et robuste en matière d'interface utilisateur (pensez "Dark Mode").
Pour définir l'atmosphère et l'identité du projet, le choix s'est porté sur un bleu Oxford (#04192E), couleur profonde et apaisante qui ne fatigue pas le regard. 
Enfin, pour indiquer la possibilité pour le visiteur d'intéragir avec l'intérface, KREM se repose sur du Jaune Chrome (#FFAA00), couleur vive évoquant le dynamisme.

Cette palette s'appui peu sur le contraste pour établir une hierachie visuelle entre les éléments puisque cette hierarchie se fonde plutôt sur le rôle que chacune occupe. La relation qu'ont ces couleurs entre-elles met en valeur la donnée et distance encore ce projet des codes du site vitrine pour le rapprocher du sentiment que peux offrir une application.
Contextuellement, du blanc (#f5f5f5) et du noir (#000) à mi-opacité viennent en appui afin de nuancer les couleurs principales sans rompre leur cohésion.

#### Police d'écritures
Puisque ce projet repose principalement sur des données écrites, la hierarchie visuelle importe énormement afin de ne pas saturer le visiteur d'information. 
C'est pourquoi il a fallu utiliser Fontjoy, site permettant de comparer l'harmonie de polices d'écriture entre elles, afin de choisir 3 polices d'écriture cohérentes. 
Finalement, ont été retenu : Oswald pour l'interface du portfolio, Inconsolata pour les titres et sous-titre en rapport avec le contenu et Roboto Slab pour les textes. Hauteur de ligne et espacement des caractères ont également été ajusté, toujours dans le but de favoriser le confort de lecture.

#### Autres éléments d'UI
Après une première série de wireframes, l'identité visuelle semblait encore manquer de présence, c'est pourquoi des éléments personnalisés ont été ajoutés afin de renforcer l'esthetique globale du site. 
Un motif contouré de nuage positionné en damier a d'abord été ajouté à l'arrière plan. Par contraste, ce damier guide l'oeil du visiteur vers le centre de la page où l'information réside.
Certains éléments intéractifs adopte également un motif hexagonale, plus original et élégant qu'un cercle classique ou qu'un jeu d'arrondis, et ce afin d'informer le visiteur des interactions possibles. Enfin, deux images ont été conçues sur-mesure à l'aide de Vault Boy Maker et d'Illustrator pour remplacer les messages d'avertissements (chargement en cours et aperçu manquant) et de les rendre plus personnels.

### 3 Challenges Rencontrés

#### SSR vs CSR
Le SSR (server-side rendering) ou "rendu du site par le serveur" est généralement la méthode de rendu la plus optimisée pour un site centré sur la donnée (Wikipédia, Amazon, Google, GitHub, StackOverflow, etc) car le serveur est le mieux configuré pour maintenir une relation efficace et sécurisée avec une base de donnée.
Le CSR (client-side rendering) ou "rendu du site par le navigateur", de son côté, est la méthode de rendu la plus optimisée pour un site centrée sur les intéractions utilisateur (Youtube, Gmail, Reddit, Twitch, etc) car le navigateur est le premier intermédiaire de tout évenement généré par une interaction.
Enfin, il existe des méthodes hybrides, mélants SSR et CSR, dont le but est de tempérer les angles-morts de chacune des méthodes au moyen d'outils tels que NextJS ou Gatsby par exemple.

Puisque la donnée constitue le coeur de KREM, il aurait été logique d'accorder la méthode de rendu à cette réalité et de choisir un rendu côté serveur. Malheureusement, cela aurait également eu pour effet de faire passer les interactions au second plan, ce qui va à l'encontre de l'une des directives principales de KREM qui est d'engager au maximum l'attention du visiteur. Enfin, les solutions hybrides sont plus lourde à mettre en place, elles auraient donc complexifié inutilement la maintenabilité d'un projet de cette taille, ce qui ne convient pas non plus.

Par ailleurs, les inconvénients principaux du rendu côté clients sont sa faible compatibilité SEO et un temps de chargement initial plus long. Or il n'est pas nécéssaire que le contenu des projets soit indexé par Google et, avec React, le temps de chargement initial cède la place à une expérience plus rapide et fluide que ce dont est capable un rendu côté serveur. KREM ne souffre donc pas de ces angles-morts, c'est pourquoi le choix s'est arrêté sur la solution contre-intuitive qu'est le rendu côté client.

En effet, par le transfert de responsabilité des données - du serveur vers le navigateur - qu'opère cette hybridation faite-maison, la place qu'occupe la donnée ne change pas mais son omniprésence est tempérée puisqu'elle existe désormais dans le cadre d'une interaction. Ce choix rempli alors l'objectif de rapprocher KREM d'une application plutôt que d'un site vitrine en faisant du visiteur le point de départ de la livraison d'information. La sécurité des données est pourtant maintenu car les données sont obtenues et contrôlées côté serveur avant d'être délivré à l'interface côté client.


#### Chart

Souhaitant rendre l'ensemble de donnée de la section "Compétences" intuitive et engageante, c'est tout naturellement que l'idée d'un graphique s'est imposé. 
Et quel meilleur modèle de graphique pour présenter des compétences qu'un modèle reconnu et apprécié issu de l'univers de l'interactivité ?

Fonctionnalité populaire et ingénieuse, l'arbre de compétence ne connait pas de compromis. Il offre à l'utilisateur toutes les perspectives sur un ensemble de donnée tout en présentant leurs relations. 
Mais si ces arbres sont d'excellents outils de présentation au format 1920x1080, leur implémentations au format mobile m'est apparu comme sous-optimal car elle ne permet plus une vision confortable de l'information.

Afin d'éviter de se perdre dans le game design, qui est un vaste sujet, le plus simple était d'observer directement les propositions qu'offrent des applications ludiques et reconnues ayant cette même inspiration. Après de nombreuses recherches, il semble qu'aucune application n'ai d'implémentation plus ergonomique que celle qu'offre DuoLingo, application d'apprentissage de langues.

L'arbre de compétence de Duolingo présente des niveaux de langages et s'insère parfaitement dans un format mobile. Mais cette solution présente un bémol : afin de préserver la lisibilité, Duolingo limite à deux le nombre de branches par palier afin d'en simplifier la lecture. 
Les données des projets et technologies sur KREM excèdant largement la limite des deux propriétés, ce modèle ne peut donc pas présenter l'entiereté des données convenablement.

Faute de mieux, il a donc fallu mettre de côté l'idée d'un arbre de compétence et s'orienter vers d'autres proposition. La solution choisie par les développeurs de DoItNow!, application de gestion de tâche, est d'utiliser un graphique de type radar. Ce type de graphique offre, comme l'arbre de compétence, de représenter la relation des données entre-elles dans un périmètre plutôt restreint, celui du radar. Le problème de cette solution est qu'elle n'appelle désormais plus à une véritable interaction et retombe dans la présentation de donnée pure et dure.

Finalement, après de nombreux essais, il apparait qu'il n'existe pas encore de manière optimale de présenter un graphique de façon complète et interactive sur un format mobile. L'intérêt d'une demi-solution étant limité - et le développement d'une véritable alternative étant trop gamifiante - la solution était dans ce cas de ne pas implémenter de demi-solution, d'abandonner l'idée d'un graphique pour partir sur une simple liste, composant intéractif plus à même de résumer un ensemble de donnée et ne nécéssitant pas de modifier fondamentalement la structure interne de l'information.


#### Base de donnée vs API
Initialement, KREM devait obtenir ses données d'une base de donnée PostgreSQL par l'intermédiaire de l'ORM Sequelize. Lors de la création de cette base de donnée, l'usage de chaque donnée à été envisagé au travers d'un modèle (conceptuel et physique) de donnée résumant les propriétés et relations qu'entretiennent les données entre-elles.
Si le concept est plutôt classique, c'est à mi-parcours que l'origine de ces données s'est avéré cruciale, et après avoir pesé avantages et inconvénients, il a fallu faire marche arrière afin de simplifier l'architecture du site en conséquence.

Le premier inconvévient dans l'utilisation d'une base de donnée dans le contexte de KREM est que chaque nouveau projet aurai nécéssité une mise à jour manuelle, ce qui va contre le principe d'automatisation et aurait ajouté une étape pénible au développement de projets ultérieurs.
Le second inconvénient provient du fait que la grande majorité des données stockées en base étaient issues d'une ou plusieurs API (Github principalement). Ne modifiant jamais ni la nature ni la forme de ces données, leur stockage en base de donnée n'était alors plus qu'une étape intermédiaire redondante.

Puisque l'étape de stockage est redondante, elle mérite d'être simplifiée, et désormais KREM obtenient ses données directement des API.
Ce choix résout immédiatement le premier inconvénient puisqu'il suffit alors de mettre les données de l'API à jour pour que le portfolio se mette à jour également. Quand aux données n'étant pas présente sur l'API (données d'un projet précis, textes et screenshots du dit projet), elles sont désormais stockées dans un dossier "Portfolio" situé à la racine du repo de chaque projet. 

Ainsi, non seulement il n'est plus besoin de redéployer KREM à chaque modification d'un projet, mais le workflow en est simplifié puisqu'il suffit alors d'ajouter un dossier "Portfolio" à un projet public afin qu'il soit pris en charge par le portfolio.

Ayant tout de même besoin de garder ces données à portée de main le temps de la navigation, le localStorage a permis de les stocker temporairement, ce qui évite, une fois la charge réparti, de contacter les API trop souvent. Mais le localStorage enregistre les données qui lui sont passées "jusqu'à nouvel ordre". Il a donc également fallu imposer une limite de temps à ce stockage, fixer une durée d'une semaine après laquelle l'application contacte l'API malgré tout afin d'actualiser ses données et de les transmettre au localStorage pour une nouvelle durée d'une semaine.

## Conclusion
Si ce projet était à refaire, un détail des besoins du projet plus complet permettrais . Ainsi, je n'essaierais plus de faire rentrer mon projet dans un modèle d'architecture, je composerais le bon modèle architecture en fonction des besoins du projet.
Je passerais moins de temps sur la conception de mes wireframes, j'attendrais d'avoir posé l'ossature du projet avant d'entrer dans des détails susceptible de changer.

Toutes ces fonctionnalités font de KREM un outil dynamique, conçu pour optimiser l'aisance du workflow de son auteur et la navigation de ses visiteurs. 
La capacité du site à gérer automatiquement l'évolution du profil et des projets qu'il présente permet d'éviter la majeures parties des actions récurentes liées à l'actualisation du contenu. Sa conception réfléchie et sans détours permet à ses visiteurs de se concentrer sur ce qui compte, l'information, et tente de leur donner envie d'en explorer l'intégralité. Afin de valider cette dernière exigence, un retour extérieur sera nécéssaire et des corrections seront apportées ultérieurement afin de rencontrer chacun des objectifs fixés.

