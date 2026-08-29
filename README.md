# Shoe-Tracker V0.12 — catalogue élargi / test réel

Cette version transforme le prototype en test beaucoup plus proche d'un vrai choix de prochaine paire. Le snapshot embarqué contient **47 modèles / générations réels** collectés ou vérifiés le 29 août 2026.

## Nouveautés V0.12

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
