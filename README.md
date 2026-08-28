# RunDeal V0.5 — API + vraies données

Cette version transforme la maquette statique en application **live-ready** pour GitHub + Vercel.

## Ce qui fonctionne déjà

- Interface V0.4 conservée : filtres, N/N-1/N-2/N-3, comparaison de générations et historique personnel.
- Endpoint `GET /api/catalog` : lit Supabase si configuré, sinon utilise un petit snapshot réel vérifié.
- Deux modèles KIPRUN réels préchargés comme test d’intégration : **KD900 X LD 2** et **KD900 Light**. Leurs prix sont indiqués comme *prix constatés*, pas comme prix de lancement.
- Endpoint `POST /api/feedback` : enregistre les contributions communautaires anonymisées dans Supabase si la base est configurée.
- Endpoint `GET /api/health` : vérifie l’état de l’API et des variables d’environnement.
- Endpoint protégé `/api/import-decathlon` : import générique CSV/XML/JSON d’un flux produit affilié Decathlon lorsque `DECATHLON_FEED_URL` sera disponible.
- Schéma Supabase dans `supabase/schema.sql`.
- Fallback propre : sans Supabase et sans flux affilié, l’application continue à fonctionner.

## Important : séparation des données

La V0.5 distingue désormais :

1. **Donnée réelle** : source publique vérifiée ou flux marchand.
2. **Snapshot** : prix constaté à une date donnée, qui n’est pas garanti comme stock live.
3. **Démo** : anciennes cartes de la maquette qui restent là pour tester le moteur tant que la base n’est pas remplie.

Le prix barré d’un marchand n’est plus présenté comme un « prix de lancement » si ce point n’est pas vérifié.

## Installer dans Supabase

1. Créer un projet Supabase.
2. Ouvrir **SQL Editor**.
3. Exécuter le contenu de `supabase/schema.sql`.
4. Dans Vercel → Project → Settings → Environment Variables, ajouter :
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
5. Redéployer.

Le `SERVICE_ROLE_KEY` ne doit **jamais** être exposé dans `app.js` ou dans le navigateur. Il est uniquement lu par les fonctions `/api`.

## Brancher le flux Decathlon

Lorsque le compte affilié donne accès au flux produit :

1. Ajouter `DECATHLON_FEED_URL` dans Vercel.
2. Ajouter `IMPORT_SECRET`.
3. Appeler `GET /api/import-decathlon` avec l’en-tête :
   `Authorization: Bearer <IMPORT_SECRET>`

L’importateur :

- accepte CSV, XML ou JSON ;
- ne conserve que les produits ressemblant à des chaussures running/trail ;
- stocke la ligne brute dans `merchant_products` ;
- **ne devine pas automatiquement le modèle canonique** ;
- crée une offre et un historique de prix uniquement pour les produits dont le lien vers `shoe_models` a été approuvé dans `product_matches`.

Cette étape manuelle/contrôlée évite de fusionner par erreur deux générations ou deux variantes différentes.

## Lancer / déployer

### Vercel

Importer le dépôt GitHub dans Vercel. Aucun framework à sélectionner : les fichiers statiques sont servis tels quels et le dossier `api/` devient des fonctions Vercel.

### Test rapide après déploiement

- `/api/health` doit répondre `ok: true`.
- `/api/catalog` doit renvoyer les données seed ou Supabase.
- La page d’accueil affiche l’état de la source en haut du formulaire.

## Prochaine étape

1. Créer le projet Supabase.
2. Ajouter 20-30 modèles canoniques réels dans `shoe_models`.
3. Obtenir le flux affilié Decathlon/Rakuten.
4. Faire le premier import.
5. Construire un petit écran admin de validation `merchant_product -> shoe_model`.
6. Ajouter i-Run/Kwanko avec le même mécanisme.
