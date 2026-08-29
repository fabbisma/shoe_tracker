# RunDeal V0.8 — 3 modes de recherche

Cette version allège fortement la page d’accueil. L’utilisateur choisit **un seul parcours** avant de lancer la recherche :

1. **Un modèle en tête** — chercher des chaussures au comportement proche (drop, amorti, usage/dynamisme), mais moins chères.
2. **Mes critères** — terrain, niveau, poids, drop, amorti, mousse, carbone et usage.
3. **Mon expérience** — équipement Strava privé + ressentis saisis manuellement (trop rigide, trop mou, manque de réactivité, etc.).

Les trois modes partagent seulement **pointure, budget et générations N / N−1 / N−2 / N−3**. Les résultats restent masqués tant que l’utilisateur n’a pas cliqué sur **Lancer la recherche**.

## Principe de séparation Strava / communauté

Les données Strava restent privées et ne sont pas automatiquement copiées dans Supabase. Les contributions communautaires proviennent uniquement du formulaire RunDeal rempli volontairement par l’utilisateur.

---

# RunDeal V0.7 — Strava privé + API + données réelles

Cette version ajoute une première connexion **Strava OAuth 2.0** en respectant une séparation stricte entre les données Strava personnelles et la base communautaire RunDeal.

## Nouveau en V0.7 — « Quel modèle avais-tu en tête ? »

Le moteur propose désormais un mode de recherche par **modèle de référence**. L’utilisateur choisit une chaussure du catalogue et RunDeal cherche uniquement des alternatives **moins chères** présentant au moins 50 % de similarité technique.

La similarité prend notamment en compte le terrain, les usages, l’amorti, la sensation de mousse, la présence d’une plaque carbone, le drop et le niveau visé. Les générations de la même famille bénéficient d’un bonus, sans empêcher une chaussure concurrente d’une autre marque d’être mieux classée.

Les cartes de résultat affichent la **similarité en %**, l’**économie par rapport au modèle envisagé** et les principaux points communs. Le reste du profil utilisateur, l’historique personnel et les filtres N / N−1 / N−2 / N−3 continuent de participer au classement.

## Nouveauté principale : deux circuits qui ne se mélangent pas

### 1. Strava → espace privé

La V0.6 demande uniquement le scope Strava `profile:read_all`, afin de récupérer le profil détaillé et la liste des chaussures avec leur kilométrage cumulé.

- Les chaussures Strava sont affichées uniquement à l’utilisateur connecté.
- Aucune chaussure, distance ou autre donnée Strava n’est écrite dans Supabase.
- Le front ne copie pas automatiquement une donnée Strava dans le formulaire communautaire.
- Le bouton « Saisir un retour RunDeal » ouvre un formulaire vide : l’utilisateur doit sélectionner ou saisir lui-même le modèle et les informations qu’il souhaite déclarer.
- Les appels `/api/strava-me` sont `no-store`.
- Les tokens OAuth sont conservés côté navigateur dans un cookie `HttpOnly` chiffré, avec une session prototype limitée à 7 jours.
- « Déconnecter » appelle l’endpoint de révocation Strava puis supprime la session locale.

### 2. RunDeal → communauté

L’endpoint `POST /api/feedback` n’accepte que les données saisies dans le formulaire RunDeal. Le serveur force désormais :

`source = USER_DECLARED`

Aucune provenance Strava ne peut être envoyée depuis le navigateur pour alimenter `community_feedback`.

## Endpoints V0.6

- `GET /api/catalog` — catalogue RunDeal / Supabase / snapshot.
- `POST /api/feedback` — contribution communautaire déclarée directement.
- `GET /api/health` — état API, Supabase, flux Decathlon et configuration Strava.
- `GET /api/strava-connect` — démarre OAuth Strava.
- `GET /api/strava-callback` — échange le code OAuth et crée la session chiffrée.
- `GET /api/strava-me` — récupère à la demande les chaussures du compte authentifié.
- `POST /api/strava-disconnect` — révoque la connexion et supprime la session.
- `GET /api/import-decathlon` — import marchand protégé, inchangé dans son principe.

## Configurer Strava

1. Créer une application dans les paramètres API Strava.
2. Dans **Authorization Callback Domain**, indiquer uniquement le domaine public du projet, par exemple :
   `rundeal.vercel.app`
3. Dans Vercel → **Settings → Environment Variables**, ajouter :

```text
STRAVA_CLIENT_ID=12345
STRAVA_CLIENT_SECRET=xxxxxxxx
STRAVA_SESSION_SECRET=une-longue-valeur-aleatoire-et-secrete
APP_BASE_URL=https://rundeal.vercel.app
```

4. Redéployer le projet.
5. Ouvrir RunDeal et cliquer **Connecter Strava**.

Le callback utilisé par le code est :

```text
https://rundeal.vercel.app/api/strava-callback
```

## Générer STRAVA_SESSION_SECRET

Exemple sur un terminal :

```bash
openssl rand -hex 32
```

Ne jamais placer `STRAVA_CLIENT_SECRET` ou `STRAVA_SESSION_SECRET` dans `app.js`.

## Pourquoi seulement `profile:read_all` ?

Pour la première intégration, les activités détaillées ne sont pas nécessaires. Le profil détaillé Strava contient la liste `shoes` avec le nom, le statut de paire principale et la distance cumulée. La V0.6 applique donc un principe de minimisation : pas de `activity:read_all` tant qu’une fonctionnalité claire ne le justifie pas.

## Supabase

1. Créer un projet Supabase.
2. Ouvrir **SQL Editor**.
3. Exécuter `supabase/schema.sql`.
4. Ajouter dans Vercel :
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
5. Redéployer.

Si une base V0.5 existe déjà, ajouter la colonne :

```sql
alter table community_feedback
add column if not exists source text not null default 'USER_DECLARED';
```

## Flux Decathlon

La logique V0.5 reste disponible :

- `DECATHLON_FEED_URL`
- `IMPORT_SECRET`
- import CSV/XML/JSON ;
- rapprochement marchand → modèle canonique contrôlé ;
- historique des prix uniquement après validation du modèle.

## Test rapide après déploiement

1. `/api/health` doit afficher `version: "0.6.0"`.
2. `strava: true` doit apparaître après configuration des 3 variables Strava.
3. Cliquer **Connecter Strava**.
4. Après autorisation, les chaussures du compte doivent apparaître dans le cadre orange « Strava · privé ».
5. Recharger la page : elles restent accessibles pendant la session OAuth, mais ne figurent pas dans Supabase.
6. Cliquer **Saisir un retour RunDeal** : le formulaire doit être vide et aucune donnée Strava ne doit être préremplie.
7. Cliquer **Déconnecter** : la session locale doit être supprimée.

## Références techniques

- Authentification Strava OAuth 2.0 : https://developers.strava.com/docs/authentication/
- Référence `DetailedAthlete` / `shoes` : https://developers.strava.com/docs/reference/
- Politique API Strava 2026 : https://www.strava.com/legal/api_policy

## Prochaine étape suggérée

Après validation de l’import des chaussures sur un vrai compte, la V0.7 pourrait ajouter un **matching local assisté mais non persistant** entre le nom Strava (`"Kiprun X"`) et le catalogue RunDeal (`"KIPRUN KD900X"`) uniquement pour aider l’utilisateur à retrouver le modèle à l’écran. Toute contribution communautaire resterait une saisie RunDeal séparée.
