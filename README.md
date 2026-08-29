# Shoe-Tracker V0.11 V0.11 — premières données web réelles

Cette version renomme le projet **Shoe-Tracker** et remplace le catalogue de démonstration par un **snapshot de données publiques collectées le 29 août 2026**.

## Ce qui est réellement alimenté

Le snapshot contient 16 modèles / générations, notamment :

- ASICS Novablast 6 / 5 / 4
- Nike Pegasus 42 / 41
- Saucony Endorphin Speed 5 / 4
- HOKA Clifton 10 / 9
- Salomon Ultra Glide 4 / 3 / 2
- La Sportiva Bushido III / II
- KIPRUN KD900 X LD 2
- On Cloudflow 5

Les chaussures personnelles déjà utilisées restent disponibles dans le mode **Mon expérience**, notamment KD900X, Bushido II, Ultra Glide 2, Carbon X et Cloudflow.

## Sources utilisées dans le snapshot

Les fiches contiennent leurs URLs sources. Les principales sources sont :

- ASICS officiel : Novablast 6
- Nike officiel : Pegasus 42
- Saucony officiel : Endorphin Speed 5
- On officiel : Cloudflow 5
- Decathlon : KIPRUN KD900 X LD 2
- i-Run : Novablast 4, Endorphin Speed 4, Ultra Glide 4/3, Bushido III
- Alltricks : Clifton 10
- idealo : Pegasus 41, Clifton 9, Ultra Glide 2, Bushido II
- Runnea : Novablast 5 et son historique de prix

## Important : snapshot, pas encore flux temps réel

Cette V0.11 utilise de **vraies valeurs publiques**, mais ce n'est pas encore un crawler/flux marchand live.

Le prix peut dépendre :
- du coloris ;
- du sexe / de la déclinaison ;
- de la pointure ;
- d'un code promo ;
- du stock restant.

Quand la source ne garantit pas le prix pour la pointure sélectionnée, l'interface affiche **« taille à vérifier »**. Pour quelques offres (Novablast 5, Pegasus 41/42, Clifton 10), la V0.11 conserve au contraire les pointures explicitement listées avec le prix observé. La fiche indique aussi la source internet et la date de collecte.

Le futur flux affilié / API marchand devra normaliser chaque offre par `modèle + sexe + coloris + pointure + marchand`.

## Scoring V0.11

Le **Fit Score** est calculé à partir des caractéristiques techniques structurées et, en mode expérience, des retours manuels de l'utilisateur.

Le **Deal Score** est un calcul Shoe-Tracker basé principalement sur l'écart entre prix public/référence et prix observé. Quand un historique public fiable est disponible (Novablast 5 via Runnea dans ce snapshot), la proximité du plus bas historique est aussi prise en compte.

Il n'y a plus de faux `score expert` ou `score communauté`.

## Déploiement Vercel

1. Décompresser le projet.
2. Pousser le contenu à la racine d'un dépôt GitHub.
3. Importer le dépôt dans Vercel.
4. Framework : **Other**.
5. Déployer.

Sans Supabase, `/api/catalog` sert automatiquement `data/real-seed.json`.

## Supabase

Le schéma est dans `supabase/schema.sql`. Les variables restent :

```text
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
```

## Strava privé

La logique de la V0.8 est conservée : Strava sert seulement à l'espace personnel et ne remplit jamais automatiquement la base communautaire.

Variables :

```text
STRAVA_CLIENT_ID=
STRAVA_CLIENT_SECRET=
STRAVA_SESSION_SECRET=
APP_BASE_URL=https://shoe-tracker.vercel.app
```

## Étape suivante recommandée

Passer du snapshot à un vrai pipeline :

`flux marchand -> normalisation modèle/génération -> offres par pointure -> historique quotidien -> Deal Score`

Le premier flux à brancher peut rester Decathlon/Rakuten, puis i-Run/Kwanko.


## V0.11 — comparaison visuelle + vraies images

Cette version allège volontairement la page de résultats. Les cartes montrent maintenant une vraie photo produit quand une URL publique vérifiée est disponible, sans créer de table d’images ni remplir Supabase. Les URL sont référencées dans `app.js` via `shoeImageMap`.

Le résultat principal est présenté avec des barres :
- **Drop** : 100 % si identique, 90 % à ±1 mm, puis décroissance progressive.
- **Amorti** : 100 % si même niveau, 70 % si niveau voisin, 45 % si éloigné.
- **Mousse** : 100 % si même sensation normalisée, 50 % si différente.
- **Prix** : axe centré sur 0 ; moins cher à gauche, plus cher à droite. En mode “modèle en tête”, la référence est le prix du modèle choisi. En recherche par critères/expérience, la référence est le budget max.

Pour rendre l’axe de prix réellement utile, le mode “modèle similaire” accepte désormais aussi des alternatives jusqu’à **+20 %** du prix du modèle choisi : on voit donc immédiatement si une chaussure est légèrement plus chère mais beaucoup plus proche techniquement.

### Images sans base de données

Pour un prototype, trois options existent :
1. URL statiques dans le code (solution utilisée ici) ;
2. URL d’image fournies par le flux affilié marchand ;
3. stockage local d’images pour lesquelles Shoe-Tracker dispose des droits.

La solution 1 est pratique pour tester l’UX, mais une URL distante peut changer ou bloquer le hotlink. En production, privilégier les images autorisées par les flux d’affiliation ou une licence explicite.


## V0.11 — corrections visuelles et terrain

- En mode **modèle similaire**, route et trail sont maintenant séparés par un filtre dur : une référence trail ne retourne que des chaussures trail, et une référence route uniquement des chaussures non-trail.
- En mode **critères**, le terrain sélectionné devient également un filtre réel, pas seulement un élément du score.
- Correction du bloc image : le fallback de marque n'est plus affiché à côté d'une photo valide. La photo produit utilise désormais toute la largeur disponible.
- Zone photo légèrement agrandie pour rendre les cartes plus visuelles sans ajouter de texte.
