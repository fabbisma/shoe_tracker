# RunDeal V0.1

Prototype front-end statique d'un comparateur intelligent de chaussures de running.

## Fonctionnalités de la maquette

- Filtres : terrain, niveau, poids, pointure, budget, drop, amorti, sensation de mousse, carbone et usage.
- Trois classements : meilleur choix, meilleure affaire, compatibilité.
- Deux scores : compatibilité coureur et Deal Score.
- Comparaison conceptuelle N / N-1 / N-2 / N-3.
- Prix par boutique et par pointure dans la maquette.
- Fiche détaillée avec synthèse de reviews, données communauté et performances de référence.
- Responsive desktop/mobile.

> Les prix, scores, disponibilités et avis présents dans la V0.1 sont des données de démonstration.

## Déploiement GitHub + Vercel

1. Créer un nouveau dépôt GitHub, par exemple `rundeal`.
2. Copier les fichiers de ce dossier à la racine du dépôt.
3. Commit + push.
4. Dans Vercel : **Add New → Project → Import Git Repository**.
5. Sélectionner le dépôt.
6. Framework Preset : **Other**.
7. Build Command : laisser vide.
8. Output Directory : laisser vide.
9. Cliquer sur **Deploy**.

Aucune variable d'environnement n'est nécessaire pour cette V0.1.

## Étape suivante recommandée

Passer à une architecture avec base de données (Supabase/PostgreSQL) et séparer :

- `shoe_models`
- `shoe_generations`
- `retailers`
- `offers`
- `price_history`
- `sizes`
- `reviews`
- `elite_results`
- `community_runs`

Le front pourra ensuite être migré vers Next.js si on veut SEO, routes par modèle, authentification, alertes de prix et API serveur.
