# Shoe-Tracker V0.13 — partir d’une paire et la corriger


## Nouveautés V0.13

- Le 3e onglet devient **« Je pars d’une paire »**.
- Un seul modèle de départ : plus besoin de remplir plusieurs anciennes chaussures pour lancer la recherche.
- 5 curseurs centrés sur **Identique** : hauteur, grip (trail), drop, amorti et rigidité.
- Les critères déplacés pèsent davantage dans le classement ; les critères laissés au centre cherchent à rester proches de la paire connue.
- Route et trail restent strictement séparés.
- Sur le trail, le résultat affiche désormais le **grip** dans les comparaisons.
- Strava et les avis communautaires sont conservés mais rangés dans un bloc optionnel replié.
- La carte prix compare, dans ce mode, le prix du candidat à celui de la paire de départ.

### Exemple réel : Ultra Glide 2

La Salomon Ultra Glide 2 est enregistrée à 32 mm au talon, 26 mm à l’avant-pied, 6 mm de drop et 3,5 mm de crampons (sources Salomon / Doctors of Running). Dans le troisième onglet, choisir **Ultra Glide 2** puis déplacer seulement **Hauteur → un peu plus basse** favorise les chaussures qui conservent un comportement trail proche mais abaissent la plateforme.

### Données hauteur / grip / rigidité

Les valeurs disponibles venant de fiches constructeur ou de mesures labo sont marquées comme exactes dans le code. Quand le catalogue ne possède pas encore la mesure, V0.13 utilise un proxy (affiché avec `≈`) afin que l’interface reste testable. Avant une mise en production, ces proxys devront être remplacés progressivement par des mesures sourcées.
Cette version transforme le troisième parcours en un **correcteur de chaussure**. L’utilisateur part d’un modèle qu’il connaît et indique simplement ce qu’il veut changer : plus/moins haut, plus/moins de grip, de drop, d’amorti ou de rigidité. Le snapshot conserve **47 modèles / générations réels** collectés ou vérifiés le 29 août 2026.

## Hérité de V0.12

- catalogue élargi route + trail (daily trainers, chaussures tempo, carbone et trail longue distance) ;
- séparation **route / trail stricte** dans les 3 modes de recherche ;
- dans **Mon expérience**, choix du terrain recherché avant de lancer la recommandation ;
- seulement les **6 meilleurs résultats** sont affichés au départ, avec un bouton pour voir les autres ;
- vraies images sans base dédiée : pour les nouveaux modèles, `/api/product-image` lit l'image Open Graph de la page produit/source autorisée et la met en cache ;
- les anciennes générations restent N−1 / N−2 / N−3 ;
- prix par pointure conservés uniquement quand la source permet de les vérifier. Sinon l'interface garde « taille à vérifier ».

## Exemples du snapshot

Route : ASICS Novablast, Nike Pegasus/Vaporfly/Vomero, Brooks Ghost, Saucony Ride/Endorphin, New Balance 1080/Rebel, Adidas EVO SL/Boston/Adios Pro, HOKA Clifton/Bondi/Mach, Puma Deviate Nitro, KIPRUN KD900 X LD 2, On Cloudflow.

Trail : Salomon Ultra Glide/Genesis, HOKA Speedgoat/Mafate, New Balance Hierro, Brooks Cascadia, ASICS Trabuco Max, La Sportiva Bushido.

## Test réel conseillé

1. Déploie sur Vercel ou ouvre l'app localement.
2. Garde la pointure 42,5 et un budget réaliste.
3. Test trail : `Un modèle en tête` → **Salomon Ultra Glide 2**.
4. Test route : `Mes critères` → choisis ton terrain/usage/amorti réel.
5. Test personnalisé : `Mon expérience` → renseigne 1 à 3 ressentis réels sur tes anciennes paires, choisis Route ou Trail, puis lance la recherche.

Les préférences non connues ne sont pas préremplies : le but est de tester le moteur sans inventer ce que le coureur aime.

## Images

Les 16 images déjà vérifiées restent dans `shoeImageMap`. Pour les nouveaux modèles, l'app utilise `/api/product-image?url=...`, qui accepte uniquement une liste blanche de domaines et extrait `og:image`/`twitter:image`. Aucun stockage d'images en base n'est nécessaire pour cette maquette. En production, préférer les images fournies par les flux d'affiliation ou par une licence explicite.

## Déploiement

GitHub → Vercel, Framework **Other**. Sans Supabase, `/api/catalog` sert automatiquement `data/real-seed.json`.

Variables optionnelles existantes :

```text
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
STRAVA_CLIENT_ID=
STRAVA_CLIENT_SECRET=
STRAVA_SESSION_SECRET=
APP_BASE_URL=https://shoe-tracker.vercel.app
```

## Important

Ce catalogue est un **snapshot web**, pas encore un flux marchand temps réel. Prix, stock, coloris et pointures peuvent changer. La prochaine étape reste l'import quotidien de flux affiliés par modèle + pointure + marchand.
