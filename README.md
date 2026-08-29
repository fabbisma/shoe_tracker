# Shoe-Tracker V0.16 — 82 modèles, gamme ASICS élargie

## Nouveautés V0.16

Le catalogue passe de **67 à 82 modèles / générations réels**.

Ajouts ASICS :

- **Gel Cumulus 28 / 27 / 26**
- Gel Nimbus 28 / 27
- Gel Kayano 33 / 32
- GT-2000 15 / 14
- Superblast 3 / 2
- Magic Speed 5 / 4
- Trabuco 14 / Gel Trabuco 13

Les familles sont reliées en N / N−1 / N−2 pour permettre au moteur de comparer les anciennes générations.

## Cumulus : exemple intéressant pour Shoe-Tracker

La famille Cumulus illustre bien l'intérêt du mode **« Je pars d'une paire »** :

- Cumulus 28 : drop officiel 8 mm, 259 g homme, FF BLAST MAX ; RunRepeat mesure un stack talon de 42,8 mm.
- Cumulus 27 : drop officiel 8 mm, 258 g ; stack labo 40,9 mm.
- Cumulus 26 : drop officiel 8 mm, 255 g ; stack labo 36,8 mm.

Ainsi un utilisateur qui aime la Cumulus mais veut **moins de hauteur** peut faire remonter naturellement la Cumulus 26 ou des concurrentes plus basses.

## Prix réels intégrés au snapshot du 29/08/2026

Exemples :

- Gel Cumulus 28 : **101,99 €** relevés sur une offre homme incluant le 42,5.
- Gel Cumulus 27 : à partir de **106 €** (pointure du meilleur prix à vérifier).
- Gel Cumulus 26 : autour de **104 €** relevés, disponibilité à vérifier.
- Gel Nimbus 28 : **130,49 €** sur une offre homme incluant le 42,5.
- Gel Kayano 33 : **155,80 €** sur une offre homme incluant le 42,5.
- GT-2000 14 : **115 €** sur une offre homme incluant le 42,5.
- Superblast 2 : **166 €** sur une offre homme incluant le 42,5.
- Trabuco 14 : **101,69 €** sur une offre homme incluant le 42,5.

Les prix restent un snapshot public, pas encore le flux Rakuten live.

## Sources principales ajoutées

- ASICS France : fiches officielles Cumulus 28, Nimbus 28, Kayano 33, Superblast 3, Magic Speed 5 et collection GT-2000 15.
- Runnea : prix et disponibilité par pointure.
- RunRepeat : mesures labo de stack, rigidité et crampons utilisées dans le mode de comparaison technique.

Les URLs détaillées sont conservées dans `data/real-seed.json` pour chaque modèle.

## Toujours présent

- 3 modes de recherche : modèle similaire / critères / « je pars d'une paire ».
- Curseurs hauteur, grip (trail), drop, amorti et rigidité.
- Séparation stricte route / trail.
- Générations N à N−3.
- Pointures EU 36 à 48.
- Import Strava privé et retours communautaires séparés.
- Images récupérées via URL produit / `og:image` sans base d'images dédiée.

## Déploiement

GitHub → Vercel, Framework **Other**.

Variables optionnelles existantes :

```text
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
STRAVA_CLIENT_ID=
STRAVA_CLIENT_SECRET=
STRAVA_SESSION_SECRET=
APP_BASE_URL=https://shoe-tracker.vercel.app
```

Le branchement Rakuten/Decathlon viendra ensuite dès que le partenariat passe de `pending` à `active`.
