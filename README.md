# RunDeal V0.4

Prototype front-end statique d'un comparateur intelligent de chaussures de running.

## Fonctionnalités de la maquette

- Filtres : terrain, niveau, poids, pointure, budget, drop, amorti, sensation de mousse, carbone et usage.
- Trois classements : meilleur choix, meilleure affaire, compatibilité.
- Deux scores : compatibilité coureur et Deal Score.
- Comparaison conceptuelle N / N-1 / N-2 / N-3.
- Prix par boutique et par pointure dans la maquette.
- Fiche détaillée avec synthèse de reviews, données communauté et performances de référence.
- Responsive desktop/mobile.

> Les prix, scores, disponibilités et avis présents dans la V0.4 sont des données de démonstration.

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

Aucune variable d'environnement n'est nécessaire pour cette V0.4.

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


## Nouveautés V0.4

- Filtre multi-sélection **N / N−1 / N−2 / N−3**.
- Preset **Anciennes uniquement**.
- Badge très visible sur les cartes pour distinguer version actuelle et ancienne génération.
- Écart de prix vs génération N directement dans les résultats.
- Comparateur dynamique des différences techniques vs N.
- Verdict génération : ancienne recommandée, choix budget ou compromis fort.

Toutes les caractéristiques et tous les prix restent des **données de démonstration** dans cette maquette.


## V0.4 — historique coureur

Cette version ajoute un module optionnel **Mes chaussures précédentes** :

- sélection d'une chaussure connue ou saisie libre ;
- impression générale : aimée / mitigée / pas aimée ;
- ressentis structurés : trop rigide, trop mou, trop haut, trop bas, manque de réactivité, trop exigeant, manque de stabilité, très confortable ;
- usages appréciés : entraînement, sortie longue, séances rapides, compétition ;
- ajustement immédiat du Fit Score (±10 points maximum dans la démo) ;
- indication visible sur chaque recommandation de l'effet de l'historique ;
- possibilité distincte de contribuer aux futures statistiques communautaires ;
- démonstration de la donnée agrégée avec niveau et tranche de poids au moment du retour.

Dans cette maquette statique, **aucune donnée n'est envoyée ni sauvegardée après rechargement de la page**. Une future version avec base de données devra séparer le profil personnel des données communautaires agrégées et ne publier que des statistiques avec des effectifs suffisants.


## V0.4 — données historiques réelles

Cette version précharge les 7 chaussures fournies dans l’historique utilisateur avec leur kilométrage : Crivit Running, HOKA ProFlyX Carbon X, KIPRUN KD900X (alias « Kiprun X »), La Sportiva Bushido II, On Cloudflow, Reebok Energen Run 2.0 et Salomon Ultra Glide 2.

Les libellés ambigus restent volontairement non sur-interprétés : la version exacte du HOKA Carbon X et du On Cloudflow n’est pas inventée. Les prix et recommandations du catalogue principal restent des données de démonstration dans cette version.
