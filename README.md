# Shoe-Tracker V0.14 — catalogue élargi à Mizuno

## Nouveautés V0.14

- Le snapshot passe de **47 à 67 modèles / générations réels**.
- Ajout de **20 Mizuno** couvrant route, entraînement rapide, compétition et trail.
- Les familles avec plusieurs générations sont comparables en N / N−1 / N−2 :
  - Wave Rider 30 / 29 / 28
  - Neo Zen 2 / Neo Zen
  - Neo Vista 3 / 2 / première génération
  - Wave Daichi 9 / 8 / 7
  - Wave Mujin 11 / 10
- Autres Mizuno ajoutées : Wave Sky 9, Wave Skyrise 7, Wave Ultima 17, Wave Inspire 22, Wave Rebellion Pro 3, Wave Rebellion Flash 3 et Neo Accera.
- `/api/product-image` autorise maintenant les domaines Mizuno officiels en plus de Runnea pour la récupération des images Open Graph.
- Les données techniques exactes disponibles sont ajoutées au correcteur de paire : par exemple Wave Daichi 9 (34 mm au talon, crampons 4 mm), Wave Daichi 8 (33,5 mm / 4 mm), Wave Mujin 10 (38 mm / 5 mm), Neo Accera (~41,5 mm / 4 mm), Wave Inspire 22 (38,5 mm talon).

## Quelques vrais prix intégrés au snapshot du 29 août 2026

Les prix restent un snapshot : ils doivent être revérifiés au moment de l'achat.

- Mizuno Wave Rider 30 : **119,95 €** pour une offre homme incluant le 42,5 ; prix original 160 €.
- Mizuno Neo Zen 2 : **84,90 €** en homme 42,5 ; prix original 150 €.
- Mizuno Wave Skyrise 7 : **85,50 €** en homme 42,5 ; prix original 150 €.
- Mizuno Neo Vista 3 : **122,27 €** en homme 42,5 ; prix original 180 €.
- Mizuno Neo Vista 2 : **102,60 €** en homme 42,5 ; prix original 180 €.
- Mizuno Wave Daichi 9 : **85,50 €** relevés pour une offre homme en 42,5 ; prix original 150 €.
- Mizuno Wave Mujin 11 : **98,80 €** en homme avec 42,5 ; prix original 160 €.

Quand le meilleur prix relevé n'est pas confirmé dans la pointure choisie, `sizeStockKnown` reste faux et Shoe-Tracker continue d'afficher **taille à vérifier**.

## Sources Mizuno principales

- Runnea — catalogue/prix Mizuno : https://www.runnea.fr/chaussures-running/modeles/mizuno/
- Mizuno France — Wave Rider : https://emea.mizuno.com/eu/fr-fr/sports/running/wave-rider-collection/
- Mizuno France — Trail : https://emea.mizuno.com/eu/fr-fr/sports/running/trail-running/chaussures/
- Mizuno France — Wave Rebellion : https://emea.mizuno.com/eu/fr-fr/sports/running/wave-rebellion-collection/
- Mizuno France — Neo Vista 3 : https://emea.mizuno.com/eu/fr-fr/mizuno-neo-vista-3/J1GU261082.html

Chaque modèle du fichier `data/real-seed.json` garde également ses propres URLs de source.

## Toujours présent depuis V0.13

Le 3e onglet est **« Je pars d’une paire »** : l'utilisateur part d'un modèle qu'il connaît puis ajuste des curseurs centrés sur **Identique** :

- hauteur ;
- grip sur le trail ;
- drop ;
- amorti ;
- rigidité.

Les critères déplacés pèsent davantage dans le classement. Route et trail restent strictement séparés.

Les valeurs techniques sourcées sont affichées normalement. Quand Shoe-Tracker ne possède pas encore une mesure fiable, le prototype utilise un proxy marqué `≈`. L'objectif est de remplacer progressivement ces proxys par des données constructeur ou labo.

## Catalogue V0.14

Le snapshot contient désormais **67 modèles / générations** parmi ASICS, Nike, Saucony, HOKA, Salomon, Brooks, New Balance, Adidas, Puma, KIPRUN, On, La Sportiva et **Mizuno**.

Le catalogue inclut des daily trainers, modèles amortis, chaussures tempo, carbone et chaussures trail. Les familles anciennes N−1 / N−2 / N−3 sont conservées lorsque des offres sont encore disponibles.

## Images

Les images déjà connues restent dans `shoeImageMap`. Pour les autres modèles, l'app utilise `/api/product-image?url=...`, qui extrait `og:image`/`twitter:image` sur une liste blanche de domaines et met la réponse en cache. Aucun stockage d'images en base n'est nécessaire pour la maquette.

En production, utiliser de préférence les images fournies par les flux d'affiliation ou une licence explicite.

## Déploiement

GitHub → Vercel, Framework **Other**.

Sans Supabase, `/api/catalog` sert automatiquement `data/real-seed.json`.

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
