const usedShoeCatalog = [
  {id:'used-crivit-running',brand:'CRIVIT',name:'Running',displayName:'Crivit Running',distanceKm:910.2,canonical:'Crivit Running',matchConfidence:'modèle exact à préciser'},
  {id:'used-hoka-carbon-x',brand:'HOKA',name:'ProFlyX Carbon X',displayName:'HOKA ProFlyX Carbon X',distanceKm:1224.4,canonical:'HOKA Carbon X',matchConfidence:'famille Carbon X identifiée, version à préciser'},
  {id:'used-kiprun-kd900x',brand:'KIPRUN',name:'KD900X',displayName:'Kiprun KD900X',alias:'Kiprun X',distanceKm:771.3,canonical:'KIPRUN KD900X',matchConfidence:'modèle confirmé'},
  {id:'used-lasportiva-bushido-ii',brand:'LA SPORTIVA',name:'Bushido II',displayName:'La Sportiva Bushido II',distanceKm:1409.5,canonical:'La Sportiva Bushido II',matchConfidence:'modèle confirmé'},
  {id:'used-on-cloudflow',brand:'ON',name:'Cloudflow',displayName:'On Cloudflow',distanceKm:1054.6,canonical:'On Cloudflow',matchConfidence:'version à préciser'},
  {id:'used-reebok-energen-run-20',brand:'REEBOK',name:'Energen Run 2.0',displayName:'Reebok Energen Run 2.0',distanceKm:287.5,canonical:'Reebok Energen Run 2.0',matchConfidence:'modèle confirmé'},
  {id:'used-salomon-ultra-glide-2',brand:'SALOMON',name:'Ultra Glide 2',displayName:'Salomon Ultra Glide 2',distanceKm:849.2,canonical:'Salomon Ultra Glide 2',matchConfidence:'modèle confirmé'}
];

// V0.10 — photos réelles référencées directement dans le code (aucune base d’images nécessaire).
// En production, ces URL devront idéalement venir des flux marchands / licences d’affiliation.
const shoeImageMap = {
  1001:'https://images.asics.com/is/image/asics/1011C243_002_SL_LT_GLB?%24sfcc-product%24=',
  1002:'https://cdn.sportshop.com/catalog/product/1500/1500/1/9/199793_1.jpg?v=ae43231d016ef7aa',
  1003:'https://www.asics.co.in/media/catalog/product/1/0/1011b693_003_sl_lt_glb-8.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=900&width=900',
  1010:'https://statics.whentocop.fr/drops/19817/picture/000000_Nike_Nike-Air-Zoom-Pegasus-42-Wmns_IB1881-001_img0-1000x1000.webp?format=auto&quality=80&width=1000',
  1011:'https://www.running-point.de/dw/image/v2/BBDP_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb5826b05/images/004/175/17888000_0_1.jpg?q=80&sw=1600',
  1020:'https://media.rundna.com.au/d4c7a15e-5b82-424d-bbdb-c3eaa26a1ba6__L.jpg',
  1021:'https://cdn11.bigcommerce.com/s-21x65e8kfn/images/stencil/original/products/66451/320644/SAU4884_1000_4__36891.1709719920.jpg',
  1030:'https://dms.deckers.com/hoka/image/upload/t_product-small-wp/v1736215834/1162030-HSK_1.png?_s=RAABAB0',
  1031:'https://dms.deckers.com/hoka/image/upload/t_product-small-wp/v1723477762/1132210-MCN_1.png?_s=RAABAB0',
  1040:'https://cdn.dam.salomon.com/ed4f2e16-c99a-408f-990d-b31b00b8e7b5/L47956900/PNG-2000px-max-72dpi.png?auto=avif&bg-color=f5f5f5&fit=cover&format=pjpg&optimize=medium&width=1000',
  1041:'https://salomon.co.nz/cdn/shop/files/L47522100_0_GHO_ULTRAGLIDE3FrenchBlue_LunarRock_SharpGreen.png?v=1737065833&width=1200',
  1042:'https://www.sportsdirect.com/images/imgzoom/21/21327403_xxl_a2.jpg',
  1050:'https://www.bfgcdn.com/1500_1500_90/023-1714-0211/la-sportiva-bushido-iii-zapatillas-de-trail-running.jpg',
  1051:'https://blisterreview.com/wp-content/uploads/2020/02/BushidoIILatUpper.jpg',
  1060:'https://decathlon.gp/cdn/shop/files/pic_8bec5471-6d11-4a28-9693-a80905d44a11.jpg?v=1787992763&width=1100',
  1070:'https://images.bike24.com/i/mb/21/d1/bb/on-cloudflow-5-running-shoes-men-arctic-stone-2-1865469.jpg'
};
function shoeImageUrl(shoe){ return shoeImageMap[Number(shoe?.id)] || ''; }
function shoeImageMarkup(shoe, cls='shoe-photo'){
  const url=shoeImageUrl(shoe);
  if(!url) return `<div class="shoe-photo-fallback">${escapeHtml(shoe?.brand||'SHOE')}</div>`;
  return `<img class="${cls}" src="${url}" alt="${escapeHtml(`${shoe.brand} ${shoe.name}`)}" loading="lazy" referrerpolicy="no-referrer" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><div class="shoe-photo-fallback" hidden>${escapeHtml(shoe.brand)}</div>`;
}

let shoes = [{"id":1001,"family":"novablast","brand":"ASICS","name":"Novablast 6","generation":"N","terrain":["route"],"levels":["debutant","occasionnel","regulier"],"uses":["daily","long","tempo"],"drop":8,"cushion":"high","foam":"bouncy","carbon":false,"plateType":"Aucune","launch":160,"referencePriceType":"rrp","referenceLabel":"Prix original ASICS","price":132.91,"shop":"meilleure offre via Runnea","sizes":["*"],"sizeStockKnown":false,"weightGrams":253,"deal":70,"reviews":["Route · entraînement quotidien et sorties longues","FF BLAST MAX + insert FF TURBO SQUARED à l’avant-pied","Prix web à partir de 132,91 € relevé via Runnea ; pointure à vérifier"],"offers":[["Meilleur prix relevé via Runnea",132.91]],"isReal":true,"checkedAt":"2026-08-29","sourceUrl":"https://www.asics.com/fr/en-fr/novablast-6/p/1011C243-002.html","sourceLabel":"ASICS officiel","sources":[{"label":"ASICS — fiche officielle","url":"https://www.asics.com/fr/en-fr/novablast-6/p/1011C243-002.html"},{"label":"Runnea — prix web ASICS","url":"https://www.runnea.fr/articles/themes/asics/5/"}]},{"id":1002,"family":"novablast","brand":"ASICS","name":"Novablast 5","generation":"N−1","terrain":["route"],"levels":["debutant","occasionnel","regulier"],"uses":["daily","long","tempo","race"],"drop":8,"cushion":"high","foam":"bouncy","carbon":false,"plateType":"Aucune","launch":150,"referencePriceType":"rrp","referenceLabel":"Prix original ASICS","price":99.9,"shop":"offre homme via Runnea","sizes":["40.5","42.5","44","44.5"],"sizeStockKnown":true,"weightGrams":265,"avg90":101.65,"best":92.99,"deal":94,"reviews":["99,90 € relevés pour une offre homme incluant la pointure 42,5","Prix moyen des 90 derniers jours relevé précédemment : 101,65 € ; plus bas 12 mois : 92,99 €","Route ; amorti élevé ; usage entraînement et compétition polyvalente"],"offers":[["Runnea — offre homme relevée",99.9]],"isReal":true,"checkedAt":"2026-08-29","sourceUrl":"https://www.runnea.fr/chaussures-running/asics/novablast-5/1039342/prix/toutes/","sourceLabel":"Runnea","sources":[{"label":"Runnea — prix","url":"https://www.runnea.fr/chaussures-running/asics/novablast-5/1039342/prix/toutes/"},{"label":"Runnea — test & historique","url":"https://www.runnea.fr/chaussures-running/asics/novablast-5/1039342/"}],"compare":{"current":"Novablast 6","verdict":"N−1 très intéressante","reason":"Le prix a déjà fortement baissé alors que le drop reste à 8 mm et que la philosophie reste celle d’un daily trainer dynamique.","changes":[["Poids","265 g","253 g","N gagne ~12 g"],["Mousse","génération précédente","FF BLAST MAX + FF TURBO SQUARED","N change la construction avant-pied"],["Drop","8 mm","8 mm","Identique"],["Prix web relevé","99,90 €","132,91 €","33,01 € d’écart"]]}},{"id":1003,"family":"novablast","brand":"ASICS","name":"Novablast 4","generation":"N−2","terrain":["route","mixte"],"levels":["debutant","occasionnel","regulier"],"uses":["daily","long"],"drop":8,"cushion":"high","foam":"balanced","carbon":false,"plateType":"Aucune","launch":150,"referencePriceType":"rrp","referenceLabel":"Prix conseillé","price":98,"shop":"i-Run","sizes":["*"],"sizeStockKnown":false,"weightGrams":252,"deal":87,"reviews":["Route / chemin ; usage régulier","Dynamisme et amorti classés « excellent » par i-Run","252 g annoncés par i-Run"],"offers":[["i-Run",98]],"isReal":true,"checkedAt":"2026-08-29","sourceUrl":"https://www.i-run.fr/chaussures_homme/Running_c23/Asics_m1/Asics-Novablast-4_Asics_fiche_136206.html","sourceLabel":"i-Run","sources":[{"label":"i-Run — fiche produit","url":"https://www.i-run.fr/chaussures_homme/Running_c23/Asics_m1/Asics-Novablast-4_Asics_fiche_136206.html"}],"compare":{"current":"Novablast 6","verdict":"N−2 = vraie option budget","reason":"Le prix reste très bas. Le poids publié est même proche, mais deux générations séparent les constructions de mousse et la géométrie.","changes":[["Poids","252 g","253 g","Quasi identique sur les fiches consultées"],["Drop","8 mm","8 mm","Identique"],["Usage","route / chemin, régulier","route, entraînement","Même famille d’usage"],["Prix web relevé","98 €","132,91 €","34,91 € d’écart"]]}},{"id":1010,"family":"pegasus","brand":"NIKE","name":"Pegasus 42","generation":"N","terrain":["route"],"levels":["debutant","occasionnel","regulier"],"uses":["daily","long"],"drop":10,"cushion":"moderate","foam":"balanced","carbon":false,"plateType":"Aucune","launch":140,"referencePriceType":"rrp","referenceLabel":"Prix original Nike","price":88.19,"shop":"offre homme via Runnea","sizes":["41","42","42.5","43","44","44.5","45","45.5","46"],"sizeStockKnown":true,"weightGrams":300,"deal":93,"reviews":["88,19 € relevés pour une offre homme incluant la pointure 42,5","ReactX + unité Air Zoom incurvée sur toute la longueur","Nike annonce plus d’espace à l’avant-pied que sur la Pegasus 41 ; drop 10 mm"],"offers":[["Runnea — offre homme relevée",88.19],["Nike — prix officiel",139.99]],"isReal":true,"checkedAt":"2026-08-29","sourceUrl":"https://www.runnea.fr/chaussures-running/nike/pegasus-42/1063565/prix/toutes/","sourceLabel":"Runnea","sources":[{"label":"Runnea — prix par pointure","url":"https://www.runnea.fr/chaussures-running/nike/pegasus-42/1063565/prix/toutes/"},{"label":"Nike — fiche officielle","url":"https://www.nike.com/fr/t/chaussure-de-running-sur-route-nike-pegasus-42-pour-homme-M9ckDyR3"}]},{"id":1011,"family":"pegasus","brand":"NIKE","name":"Pegasus 41","generation":"N−1","terrain":["route"],"levels":["debutant","occasionnel","regulier"],"uses":["daily","long"],"drop":10,"cushion":"moderate","foam":"balanced","carbon":false,"plateType":"Aucune","launch":139.99,"referencePriceType":"rrp","referenceLabel":"Prix de référence génération","price":70,"shop":"offres listées sur idealo","sizes":["40","40.5","42.5","43","44","45"],"sizeStockKnown":true,"weightGrams":297,"deal":98,"reviews":["Offres à 70 € relevées par idealo pour plusieurs pointures, dont 42,5","297 g et drop 10 mm selon la fiche idealo","ReactX + Zoom Air ; usage entraînement / débutant"],"offers":[["Offre idealo (hors livraison)",70]],"isReal":true,"checkedAt":"2026-08-29","sourceUrl":"https://www.idealo.fr/prix/204421823/nike-pegasus-41.html","sourceLabel":"idealo","sources":[{"label":"idealo — prix & caractéristiques","url":"https://www.idealo.fr/prix/204421823/nike-pegasus-41.html"}],"compare":{"current":"Pegasus 42","verdict":"N−1 encore intéressante, mais l’écart est resserré","reason":"Même drop de 10 mm et même base ReactX. La 42 change surtout l’Air Zoom et l’avant-pied ; avec les promos actuelles sur la 42, l’avantage prix de la 41 n’est plus gigantesque.","changes":[["Poids","297 g","300 g","Très proche"],["Air Zoom","unités avant-pied + talon","unité incurvée pleine longueur","Évolution importante de sensation"],["Avant-pied","forme 41","plus d’espace","N progresse en fit"],["Prix web relevé","70 €","88,19 €","18,19 € d’écart"]]}},{"id":1020,"family":"speed","brand":"SAUCONY","name":"Endorphin Speed 5","generation":"N","terrain":["route"],"levels":["regulier","competition"],"uses":["tempo","race","daily","long"],"drop":8,"cushion":"high","foam":"bouncy","carbon":false,"plateType":"Nylon","launch":200,"referencePriceType":"rrp","referenceLabel":"Prix conseillé","price":160,"shop":"Saucony","sizes":["*"],"sizeStockKnown":false,"weightGrams":237,"deal":70,"reviews":["PWRRUN PB + plaque nylon redessinée","Saucony la positionne pour les kilomètres rapides mais aussi les séances longues","Certaines couleurs homme sont affichées à 160 € au lieu de 200 €"],"offers":[["Saucony — coloris en promo",160]],"isReal":true,"checkedAt":"2026-08-29","sourceUrl":"https://www.saucony.com/FR/fr_FR/endorphin-speed-5/60307M.html","sourceLabel":"Saucony officiel","sources":[{"label":"Saucony — fiche officielle","url":"https://www.saucony.com/FR/fr_FR/endorphin-speed-5/60307M.html"}]},{"id":1021,"family":"speed","brand":"SAUCONY","name":"Endorphin Speed 4","generation":"N−1","terrain":["route"],"levels":["regulier","competition"],"uses":["tempo","race","daily"],"drop":8,"cushion":"high","foam":"bouncy","carbon":false,"plateType":"Nylon","launch":200,"referencePriceType":"rrp","referenceLabel":"Prix conseillé","price":138,"shop":"i-Run","sizes":["*"],"sizeStockKnown":false,"weightGrams":236,"deal":83,"reviews":["236 g annoncés par i-Run","Dynamisme et amorti classés « excellent » par i-Run","Prix 138 € contre 200 € conseillé"],"offers":[["i-Run",138]],"isReal":true,"checkedAt":"2026-08-29","sourceUrl":"https://www.i-run.fr/chaussures_homme/Running_c23/Saucony_m95/Saucony-Endorphin-Speed-4_Saucony_fiche_137882.html","sourceLabel":"i-Run","sources":[{"label":"i-Run — fiche produit","url":"https://www.i-run.fr/chaussures_homme/Running_c23/Saucony_m95/Saucony-Endorphin-Speed-4_Saucony_fiche_137882.html"}],"compare":{"current":"Endorphin Speed 5","verdict":"N−1 conserve l’essentiel du concept","reason":"Les deux générations restent des chaussures rapides à plaque nylon avec le même drop. L’écart de prix est réel mais moins spectaculaire que sur certaines familles.","changes":[["Poids","236 g","~237 g","Quasi identique"],["Plaque","nylon","nylon redessinée","Évolution plutôt que rupture"],["Drop","8 mm","8 mm","Identique"],["Prix actuel","138 €","160 €","22 € d’écart"]]}},{"id":1030,"family":"clifton","brand":"HOKA","name":"Clifton 10","generation":"N","terrain":["route"],"levels":["debutant","occasionnel","regulier"],"uses":["daily","long"],"drop":8,"cushion":"high","foam":"soft","carbon":false,"plateType":"Aucune","launch":160,"referencePriceType":"rrp","referenceLabel":"Prix conseillé","price":98.99,"shop":"offre homme via Runnea","sizes":["41.5","42","42.5","43.5","44","44.5","45.5","46","46.5"],"sizeStockKnown":true,"weightGrams":278,"deal":94,"reviews":["98,99 € relevés sur une offre homme incluant la pointure 42,5","278 g ; drop 8 mm ; semelle intermédiaire CMEVA","HOKA a augmenté le drop de 3 mm par rapport à la génération précédente"],"offers":[["Runnea — offre homme relevée",98.99],["Alltricks — autre offre observée",121.99]],"isReal":true,"checkedAt":"2026-08-29","sourceUrl":"https://www.runnea.fr/chaussures-running/hoka/clifton-10/1043789/prix/toutes/","sourceLabel":"Runnea","sources":[{"label":"Runnea — prix par pointure","url":"https://www.runnea.fr/chaussures-running/hoka/clifton-10/1043789/prix/toutes/"},{"label":"Alltricks — fiche technique","url":"https://www.alltricks.fr/F-11912-chaussures-running/P-2947875-chaussures_running_hoka_clifton_10_blanc_orange_homme"}]},{"id":1031,"family":"clifton","brand":"HOKA","name":"Clifton 9","generation":"N−1","terrain":["route"],"levels":["debutant","occasionnel","regulier"],"uses":["daily","long"],"drop":5,"cushion":"high","foam":"soft","carbon":false,"plateType":"Aucune","launch":150,"referencePriceType":"rrp","referenceLabel":"Prix de référence génération","price":104.5,"shop":"offres listées sur idealo","sizes":["*"],"sizeStockKnown":false,"weightGrams":null,"deal":82,"reviews":["Meilleur prix affiché par idealo : 104,50 € hors livraison","Drop 5 mm ; profil entraînement route","La génération 10 passe à 8 mm de drop"],"offers":[["Meilleur prix idealo",104.5]],"isReal":true,"checkedAt":"2026-08-29","sourceUrl":"https://www.idealo.fr/prix/202340032/hoka-clifton-9-1127895.html","sourceLabel":"idealo","sources":[{"label":"idealo — prix Clifton 9","url":"https://www.idealo.fr/prix/202340032/hoka-clifton-9-1127895.html"},{"label":"Alltricks — nouveautés Clifton 10","url":"https://www.alltricks.fr/F-11912-chaussures-running/P-2947875-chaussures_running_hoka_clifton_10_blanc_orange_homme"}],"compare":{"current":"Clifton 10","verdict":"La génération actuelle est moins chère aujourd’hui","reason":"La Clifton 9 conserve son drop de 5 mm, mais le meilleur prix relevé pour la Clifton 10 est actuellement inférieur. Ici, “ancienne génération” ne veut donc pas dire “meilleure affaire”.","changes":[["Drop","5 mm","8 mm","+3 mm sur N"],["Poids","—","278 g","N−1 non comparée faute de source homogène retenue"],["Géométrie","ancienne Clifton","talon/transition/avant-pied retravaillés","N change le fit et la transition"],["Prix web relevé","104,50 €","98,99 €","N coûte 5,51 € de moins"]]}},{"id":1040,"family":"ultraglide","brand":"SALOMON","name":"Ultra Glide 4","generation":"N","terrain":["trail"],"levels":["debutant","occasionnel","regulier","competition"],"uses":["daily","long","race"],"drop":6,"cushion":"high","foam":"balanced","carbon":false,"plateType":"Aucune","launch":150,"referencePriceType":"rrp","referenceLabel":"Prix conseillé","price":135,"shop":"i-Run","sizes":["*"],"sizeStockKnown":false,"weightGrams":267,"deal":58,"reviews":["267 g en taille homme selon i-Run ; drop 6 mm","OptiFOAM + géométrie Relieve Sphere","Trail toutes distances jusqu’à l’ultra ; prix 135 € contre 150 € conseillé"],"offers":[["i-Run",135]],"isReal":true,"checkedAt":"2026-08-29","sourceUrl":"https://www.i-run.fr/chaussures_homme/Trail_c15/Salomon_m96/Salomon-Ultra-Glide-4_Salomon_fiche_146578.html","sourceLabel":"i-Run","sources":[{"label":"i-Run — Ultra Glide 4","url":"https://www.i-run.fr/chaussures_homme/Trail_c15/Salomon_m96/Salomon-Ultra-Glide-4_Salomon_fiche_146578.html"}]},{"id":1041,"family":"ultraglide","brand":"SALOMON","name":"Ultra Glide 3","generation":"N−1","terrain":["trail"],"levels":["debutant","occasionnel","regulier","competition"],"uses":["daily","long","race"],"drop":6,"cushion":"high","foam":"balanced","carbon":false,"plateType":"Aucune","launch":150,"referencePriceType":"rrp","referenceLabel":"Prix conseillé","price":90,"shop":"i-Run","sizes":["*"],"sizeStockKnown":false,"weightGrams":290,"deal":93,"reviews":["90 € chez i-Run contre 150 € conseillé","Drop 6 mm ; 290 g constatés par i-Run en taille 42","Energy Foam + Relieve Sphere ; trail toutes distances"],"offers":[["i-Run",90]],"isReal":true,"checkedAt":"2026-08-29","sourceUrl":"https://www.i-run.fr/chaussures_homme/Trail_c15/Salomon_m96/Salomon-Ultra-Glide-3_Salomon_fiche_143202.html","sourceLabel":"i-Run","sources":[{"label":"i-Run — Ultra Glide 3","url":"https://www.i-run.fr/chaussures_homme/Trail_c15/Salomon_m96/Salomon-Ultra-Glide-3_Salomon_fiche_143202.html"}],"compare":{"current":"Ultra Glide 4","verdict":"N−1 = gros écart de prix","reason":"Le drop reste à 6 mm et l’usage longue distance reste central. La N gagne surtout en poids et retravaille la mousse/construction.","changes":[["Poids","290 g","267 g","N gagne ~23 g"],["Drop","6 mm","6 mm","Identique"],["Mousse","Energy Foam","OptiFOAM","Nouvelle formulation sur N"],["Prix actuel","90 €","135 €","45 € d’écart"]]}},{"id":1042,"family":"ultraglide","brand":"SALOMON","name":"Ultra Glide 2","generation":"N−2","terrain":["trail"],"levels":["debutant","occasionnel","regulier"],"uses":["daily","long"],"drop":6,"cushion":"high","foam":"balanced","carbon":false,"plateType":"Aucune","launch":150,"referencePriceType":"rrp","referenceLabel":"Prix de référence génération","price":82.49,"shop":"offres listées sur idealo","sizes":["*"],"sizeStockKnown":false,"weightGrams":280,"deal":98,"reviews":["À partir de 82,49 € sur idealo","280 g et drop 6 mm indiqués sur la fiche idealo","Energy Foam + Reverse Camber + Profeel Film"],"offers":[["Meilleur prix idealo",82.49]],"isReal":true,"checkedAt":"2026-08-29","sourceUrl":"https://www.idealo.fr/prix/202311710/salomon-ultra-glide-2.html","sourceLabel":"idealo","sources":[{"label":"idealo — Ultra Glide 2","url":"https://www.idealo.fr/prix/202311710/salomon-ultra-glide-2.html"},{"label":"i-Run — Ultra Glide 4","url":"https://www.i-run.fr/chaussures_homme/Trail_c15/Salomon_m96/Salomon-Ultra-Glide-4_Salomon_fiche_146578.html"}],"compare":{"current":"Ultra Glide 4","verdict":"N−2 = choix budget à examiner","reason":"Même drop et même orientation trail longue distance, mais deux générations séparent la géométrie et la mousse. La différence de prix est très forte.","changes":[["Poids","280 g","267 g","N gagne ~13 g"],["Drop","6 mm","6 mm","Identique"],["Construction","Energy Foam + Reverse Camber + Profeel Film","OptiFOAM + Relieve Sphere","Évolution nette"],["Prix relevé","82,49 €","135 €","52,51 € d’écart"]]}},{"id":1050,"family":"bushido","brand":"LA SPORTIVA","name":"Bushido III","generation":"N","terrain":["trail"],"levels":["debutant","occasionnel","regulier"],"uses":["daily","race"],"drop":6,"cushion":"high","foam":"firm","carbon":false,"plateType":"Aucune","launch":175,"referencePriceType":"rrp","referenceLabel":"Prix conseillé","price":130,"shop":"i-Run","sizes":["*"],"sizeStockKnown":false,"weightGrams":301,"deal":77,"reviews":["Sentiers ; usage régulier ; drop 6 mm","301 g sur la fiche i-Run consultée","Dynamisme et amorti classés « excellent » par i-Run"],"offers":[["i-Run",130]],"isReal":true,"checkedAt":"2026-08-29","sourceUrl":"https://www.i-run.fr/chaussures_homme/Trail_c15/La-Sportiva_m212/La-Sportiva-Bushido-III-M_La-Sportiva_fiche_140491.html","sourceLabel":"i-Run","sources":[{"label":"i-Run — Bushido III","url":"https://www.i-run.fr/chaussures_homme/Trail_c15/La-Sportiva_m212/La-Sportiva-Bushido-III-M_La-Sportiva_fiche_140491.html"}]},{"id":1051,"family":"bushido","brand":"LA SPORTIVA","name":"Bushido II","generation":"N−1","terrain":["trail"],"levels":["regulier","competition"],"uses":["daily","race"],"drop":6,"cushion":"moderate","foam":"firm","carbon":false,"plateType":"Aucune","launch":130,"referencePriceType":"currentgen","referenceLabel":"Prix actuel Bushido III","price":113.9,"shop":"offres listées sur idealo","sizes":["40.5","41","41.5","42","44","45"],"sizeStockKnown":true,"weightGrams":null,"deal":64,"reviews":["À partir de 113,90 € sur idealo","Drop 6 mm ; usage compétition / natural running indiqué par idealo","Semelle intermédiaire EVA et semelle Frixion"],"offers":[["Meilleur prix idealo",113.9]],"isReal":true,"checkedAt":"2026-08-29","sourceUrl":"https://www.idealo.fr/prix/6531618/la-sportiva-bushido-ii.html","sourceLabel":"idealo","sources":[{"label":"idealo — Bushido II","url":"https://www.idealo.fr/prix/6531618/la-sportiva-bushido-ii.html"},{"label":"i-Run — Bushido III","url":"https://www.i-run.fr/chaussures_homme/Trail_c15/La-Sportiva_m212/La-Sportiva-Bushido-III-M_La-Sportiva_fiche_140491.html"}],"compare":{"current":"Bushido III","verdict":"N−1 reste proche dans l’esprit","reason":"Le drop reste à 6 mm et la Bushido reste une chaussure de sentier précise. Le gain prix est toutefois plus faible que sur les Ultra Glide ou Pegasus.","changes":[["Drop","6 mm","6 mm","Identique"],["Semelle intermédiaire","EVA","construction Bushido III mise à jour","Évolution de génération"],["Terrain","chemin / piste","sentiers variés","Même cœur d’usage"],["Prix relevé","113,90 €","130 €","16,10 € d’écart"]]}},{"id":1060,"family":"kd900xld","brand":"KIPRUN","name":"KD900 X LD 2","generation":"N","terrain":["route"],"levels":["regulier","competition"],"uses":["tempo","race","long"],"drop":4,"cushion":"high","foam":"bouncy","carbon":true,"plateType":"Carbone","launch":179.99,"referencePriceType":"observed","referenceLabel":"Prix initial affiché sur une fiche Decathlon","price":109.99,"shop":"Decathlon","sizes":["40","41","41.5","42","43.5","45","45.5","47"],"sizeStockKnown":false,"weightGrams":225,"deal":92,"reviews":["225 g ; drop 4 mm ; plaque carbone","VFOAM PLUS ; amorti élevé et dynamisme maximal selon Decathlon","Pensée entraînement + compétition du 10 km au marathon"],"offers":[["Decathlon",109.99]],"isReal":true,"checkedAt":"2026-08-29","sourceUrl":"https://www.decathlon.fr/p/chaussures-de-running-plaque-carbone-homme-kiprun-kd900-x-ld-2-blanc-orange/360707/c227c125m8961370","sourceLabel":"Decathlon","sources":[{"label":"Decathlon — KD900 X LD 2","url":"https://www.decathlon.fr/p/chaussures-de-running-plaque-carbone-homme-kiprun-kd900-x-ld-2-blanc-orange/360707/c227c125m8961370"}]},{"id":1070,"family":"cloudflow","brand":"ON","name":"Cloudflow 5","generation":"N","terrain":["route"],"levels":["regulier","competition"],"uses":["tempo","long","race"],"drop":8,"cushion":"moderate","foam":"bouncy","carbon":false,"plateType":"Nylon + fibre de verre","launch":190,"referencePriceType":"current","referenceLabel":"Prix On actuel","price":190,"shop":"On","sizes":["40.5","41","42","42.5","43","44","44.5","45","46","47","47.5","48"],"sizeStockKnown":true,"weightGrams":278,"deal":50,"reviews":["Helion HF + Speedboard nylon/fibre de verre","On la positionne pour tempo, fractionné et sorties longues","278 g ; drop 8 mm ; amorti faible-moyen, réactivité moyen-élevé"],"offers":[["On",190]],"isReal":true,"checkedAt":"2026-08-29","sourceUrl":"https://www.on.com/fr-fr/products/cloudflow-5-m-3mf1011/mens","sourceLabel":"On officiel","sources":[{"label":"On — Cloudflow 5","url":"https://www.on.com/fr-fr/products/cloudflow-5-m-3mf1011/mens"}]}];

const state = {rank:'balanced', mode:'similar', searchLaunched:false, searchDirty:false, generations:new Set(['N','N−1','N−2','N−3']), history:[], referenceShoeId:null, strava:{connected:false,configured:null,athlete:null,shoes:[]}};
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

function dropMatch(drop, pref){
  if(pref==='any') return 1;
  if(pref==='low') return drop<=4 ? 1 : drop<=6 ? .6 : .2;
  if(pref==='mid') return drop>=5 && drop<=8 ? 1 : .5;
  return drop>=9 ? 1 : .45;
}
function cushionMatch(value,pref){
  if(pref==='any') return 1;
  const order={moderate:1,high:2,max:3};
  return Math.max(.35,1-Math.abs(order[value]-order[pref])*.35);
}
function foamMatch(value,pref){return pref==='any'||value===pref?1:.55}
function carbonMatch(value,pref){return pref==='any'||(pref==='yes'&&value)||(pref==='no'&&!value)?1:.15}

function getFilters(){
  const experienceMode=state.mode==='experience';
  return {
    terrain:$('#terrain').value,
    level:experienceMode?$('#experienceLevel').value:$('#level').value,
    weight:+(experienceMode?$('#experienceWeight').value:$('#weight').value)||72,
    size:$('#size').value,
    maxPrice:+$('#maxPrice').value||999,
    drop:$('#drop').value,
    cushion:$('#cushion').value,
    foam:$('#foam').value,
    carbon:$('#carbon').value,
    usage:$('#usage').value
  }
}

function baseScoreFit(shoe,f){
  let s=0, w=0;
  const add=(v,weight)=>{s+=v*weight;w+=weight};
  add(shoe.terrain.includes(f.terrain)?1:.3,20);
  add(shoe.levels.includes(f.level)?1:.55,14);
  add(shoe.uses.includes(f.usage)?1:.55,18);
  add(dropMatch(shoe.drop,f.drop),10);
  add(cushionMatch(shoe.cushion,f.cushion),12);
  add(foamMatch(shoe.foam,f.foam),8);
  add(carbonMatch(shoe.carbon,f.carbon),8);
  if(Array.isArray(shoe.weightRange) && shoe.weightRange.length===2){
    const [minW,maxW]=shoe.weightRange;
    add(f.weight>=minW&&f.weight<=maxW?1:.65,10);
  }
  return Math.round((s/w)*100);
}

function dropDistance(a,b){ return Math.abs(a-b); }
function historyAdjustment(shoe){
  if(!state.history.length) return 0;
  let total=0;
  state.history.forEach(entry=>{
    let delta=0;
    const source=entry.shoeId ? shoes.find(s=>s.id===entry.shoeId) : null;
    if(source){
      let similarity=0;
      similarity += source.foam===shoe.foam ? 1 : 0;
      similarity += source.cushion===shoe.cushion ? 1 : 0;
      similarity += source.carbon===shoe.carbon ? 1 : 0;
      similarity += dropDistance(source.drop,shoe.drop)<=2 ? 1 : 0;
      similarity += source.terrain.some(t=>shoe.terrain.includes(t)) ? 1 : 0;
      similarity/=5;
      if(entry.sentiment==='liked') delta += similarity*3.5;
      if(entry.sentiment==='disliked') delta -= similarity*3;
    }
    const f=new Set(entry.feedback);
    if(f.has('tooRigid')) delta += (shoe.carbon?-2.5:1) + (shoe.foam==='firm'?-3:shoe.foam==='balanced'?1:0);
    if(f.has('tooSoft')) delta += shoe.foam==='soft'?-3:shoe.foam==='bouncy'?-1.5:shoe.foam==='firm'?2.5:1;
    if(f.has('tooHigh')) delta += shoe.cushion==='max'?-3.5:shoe.cushion==='high'?-1.2:2;
    if(f.has('tooLow')) delta += shoe.cushion==='moderate'?-2.5:shoe.cushion==='high'?1.5:2;
    if(f.has('notReactive')) delta += (shoe.foam==='bouncy'?3:shoe.foam==='balanced'?.5:-1) + (shoe.carbon?1.8:0) + (shoe.uses.includes('tempo')||shoe.uses.includes('race')?1:0);
    if(f.has('tooReactive')) delta += (shoe.carbon?-2.5:1) + (shoe.foam==='bouncy'?-1.5:shoe.foam==='balanced'?1.5:0);
    if(f.has('unstable')) delta += shoe.cushion==='max'?-1.5:shoe.cushion==='high'?.5:1;
    if(f.has('comfortable')) delta += (shoe.cushion==='high'||shoe.cushion==='max'?1.4:0) + (shoe.foam==='balanced'||shoe.foam==='soft'?1:0);
    entry.uses.forEach(u=>{ if(shoe.uses.includes(u)) delta+=1.25; });
    total+=delta;
  });
  return Math.round(clamp(total/Math.max(1,state.history.length*.8),-10,10));
}

function experienceBaseScore(shoe,f){
  let s=0,w=0;
  const add=(v,weight)=>{s+=v*weight;w+=weight};
  add(shoe.levels.includes(f.level)?1:.58,45);
  if(Array.isArray(shoe.weightRange) && shoe.weightRange.length===2){
    const [minW,maxW]=shoe.weightRange;
    add(f.weight>=minW&&f.weight<=maxW?1:.68,15);
  }
  const learnedUses=state.history.flatMap(h=>h.uses||[]);
  if(learnedUses.length){
    const matches=learnedUses.filter(u=>shoe.uses.includes(u)).length;
    add(clamp(matches/learnedUses.length+.35,.35,1),40);
  }else add(.72,40);
  return Math.round((s/w)*100);
}
function normalizeGearName(v=''){return String(v).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim()}
function stravaPrivateAdjustment(shoe){
  if(state.mode!=='experience'||!state.strava.connected||!state.strava.shoes.length) return 0;
  let best=0;
  for(const gear of state.strava.shoes){
    const g=normalizeGearName(gear.name||gear.display_name||'');
    if(!g) continue;
    const exact=shoes.find(candidate=>{
      const n=normalizeGearName(`${candidate.brand} ${candidate.name}`);
      return g.includes(n)||n.includes(g);
    });
    if(exact) best=Math.max(best,similarityScore(exact,shoe));
  }
  return best?Math.round(best/40):0;
}
function scoreFit(shoe,f){
  if(state.mode==='experience') return clamp(experienceBaseScore(shoe,f)+historyAdjustment(shoe)+stravaPrivateAdjustment(shoe),0,100);
  return clamp(baseScoreFit(shoe,f),0,100);
}
function finalScore(shoe,fit,reference=null){
  if(reference){
    const similarity=shoe.similarity ?? similarityScore(reference,shoe);
    if(state.rank==='deal') return Math.round(shoe.deal*.62 + referenceSavingsScore(reference,shoe)*.38);
    if(state.rank==='fit') return similarity;
    return Math.round(similarity*.62 + shoe.deal*.20 + referenceSavingsScore(reference,shoe)*.18);
  }
  if(state.rank==='deal') return shoe.deal;
  if(state.rank==='fit') return fit;
  return Math.round(fit*.58 + shoe.deal*.42);
}
function labelCushion(v){return {moderate:'Amorti modéré',high:'Amorti important',max:'Amorti maximal'}[v]}
function labelFoam(v){return {soft:'Souple',balanced:'Équilibrée',firm:'Ferme',bouncy:'Très rebondissante'}[v]}
function generationClass(g){return g==='N'?'current':'old'}
function dealBadgeLabel(score){
  if(score>=90) return '🔥 Excellent deal';
  if(score>=78) return 'Bon prix';
  if(score>=62) return 'Prix intéressant';
  return 'Prix proche de la référence';
}
function refPriceLabel(shoe){return shoe.referenceLabel||({observed:'Prix barré constaté',launch:'Prix de lancement',rrp:'Prix conseillé',current:'Prix actuel',currentgen:'Prix génération actuelle'}[shoe.referencePriceType]||'Prix de référence')}
function sourceBadge(shoe){return shoe.isReal?'<span class="real-data-badge">● DONNÉE WEB</span>':'<span class="snapshot-badge">LOCAL</span>'}
function sizeMatches(shoe,size){return !shoe.sizes || shoe.sizes.length===0 || shoe.sizes.includes('*') || shoe.sizes.includes(size)}
function generationSummary(){
  const order=['N','N−1','N−2','N−3'];
  return order.filter(x=>state.generations.has(x)).join(' / ');
}
function clamp(n,min,max){return Math.max(min,Math.min(max,n))}

function selectedReferenceShoe(){
  return state.referenceShoeId==null ? null : shoes.find(s=>String(s.id)===String(state.referenceShoeId)) || null;
}
function currentFamilyShoe(shoe){
  if(!shoe) return null;
  return shoes.find(s=>s.family===shoe.family && s.generation==='N') || null;
}
function priceGapVsCurrent(shoe){
  const current=currentFamilyShoe(shoe);
  return current && current.id!==shoe.id ? Math.round((current.price-shoe.price)*100)/100 : 0;
}
function fitGapVsCurrent(shoe,f){
  const current=currentFamilyShoe(shoe);
  return current && current.id!==shoe.id ? scoreFit(current,f)-scoreFit(shoe,f) : 0;
}
function sourceLinks(shoe){
  const list=(shoe.sources&&shoe.sources.length?shoe.sources:(shoe.sourceUrl?[{label:shoe.sourceLabel||'Source',url:shoe.sourceUrl}]:[]));
  return list.map(src=>`<a href="${src.url}" target="_blank" rel="noopener noreferrer">${src.label} ↗</a>`).join('');
}
function referenceDiscountText(shoe){
  if(!shoe.launch || shoe.launch<=shoe.price) return shoe.referencePriceType==='current'?'prix officiel actuel':'prix constaté';
  if(shoe.referencePriceType==='currentgen'){
    const gap=Math.round((shoe.launch-shoe.price)*100)/100;
    return `${Number(gap).toLocaleString('fr-FR')} € sous N actuelle`;
  }
  const discount=Math.max(0,Math.round((1-shoe.price/shoe.launch)*100));
  return `−${discount}% vs ${refPriceLabel(shoe).toLowerCase()}`;
}
function arrayOverlapScore(a=[],b=[]){
  const A=new Set(a), B=new Set(b);
  const union=new Set([...A,...B]);
  if(!union.size) return 0;
  let common=0; A.forEach(x=>{if(B.has(x)) common++;});
  return common/union.size;
}
function similarityScore(reference,shoe){
  if(!reference || !shoe) return 0;
  if(String(reference.id)===String(shoe.id)) return 100;
  let score=0;
  score += arrayOverlapScore(reference.terrain,shoe.terrain)*24;
  score += arrayOverlapScore(reference.uses,shoe.uses)*24;
  score += reference.cushion===shoe.cushion ? 14 : cushionMatch(shoe.cushion,reference.cushion)*9;
  score += reference.foam===shoe.foam ? 12 : ((reference.foam==='bouncy'&&shoe.foam==='balanced')||(reference.foam==='balanced'&&shoe.foam==='bouncy') ? 7 : 3);
  score += reference.carbon===shoe.carbon ? 10 : 2;
  const d=Math.abs((reference.drop||0)-(shoe.drop||0));
  score += d<=1 ? 10 : d<=2 ? 8 : d<=4 ? 5 : 1;
  score += arrayOverlapScore(reference.levels,shoe.levels)*6;
  if(reference.family && reference.family===shoe.family) score += 10;
  return Math.round(clamp(score,0,100));
}
function referenceSavings(reference,shoe){return reference ? Math.round((reference.price-shoe.price)*100)/100 : 0;}
function referenceSavingsScore(reference,shoe){
  if(!reference || !reference.price) return 0;
  return clamp(Math.round((reference.price-shoe.price)/reference.price*180),0,100);
}
function referenceReasons(reference,shoe){
  if(!reference) return [];
  const reasons=[];
  if(reference.family===shoe.family) reasons.push('même famille');
  const usageCommon=reference.uses.filter(u=>shoe.uses.includes(u));
  if(usageCommon.length) reasons.push(usageCommon.slice(0,2).map(u=>useLabels[u]||u).join(' + '));
  if(reference.cushion===shoe.cushion) reasons.push('même niveau d’amorti');
  if(reference.foam===shoe.foam) reasons.push('même sensation de mousse');
  if(reference.carbon===shoe.carbon) reasons.push(reference.carbon?'plaque carbone':'sans carbone');
  if(Math.abs(reference.drop-shoe.drop)<=2) reasons.push(`drop proche (${shoe.drop} mm)`);
  return reasons.slice(0,3);
}
function dropVisualScore(target, actual){
  const d=Math.abs(Number(target)-Number(actual));
  if(!Number.isFinite(d)) return 50;
  if(d===0) return 100;
  if(d<=1) return 90;
  if(d<=2) return 80;
  if(d<=3) return 65;
  if(d<=4) return 50;
  return 30;
}
function cushionVisualScore(target, actual){
  if(!target || target==='any') return null;
  if(target===actual) return 100;
  const rank={moderate:1,high:2,max:3};
  const d=Math.abs((rank[target]||2)-(rank[actual]||2));
  return d<=1?70:45;
}
function foamVisualScore(target, actual){
  if(!target || target==='any') return null;
  return target===actual?100:50;
}
function binaryVisualScore(target, actual){
  if(target===null || target===undefined || target==='any') return null;
  return target===actual?100:50;
}
function terrainVisualScore(target, actual=[]){
  if(!target) return null;
  if(actual.includes(target)) return 100;
  if(target==='mixte' && (actual.includes('route')||actual.includes('trail'))) return 70;
  if(actual.includes('mixte')) return 70;
  return 40;
}
function usageVisualScore(target, actual=[]){
  if(!target) return null;
  return actual.includes(target)?100:45;
}
function visualMetrics(shoe,f,reference){
  if(reference){
    return [
      {label:'Drop',score:dropVisualScore(reference.drop,shoe.drop),value:`${shoe.drop} mm`,target:`réf. ${reference.drop} mm`},
      {label:'Amorti',score:cushionVisualScore(reference.cushion,shoe.cushion),value:labelCushion(shoe.cushion),target:`réf. ${labelCushion(reference.cushion)}`},
      {label:'Mousse',score:foamVisualScore(reference.foam,shoe.foam),value:labelFoam(shoe.foam),target:`réf. ${labelFoam(reference.foam)}`}
    ];
  }
  if(state.mode==='experience'){
    return [
      {label:'Expérience',score:clamp(shoe.fit,0,100),value:`${shoe.fit}/100`,target:'profil appris'},
      {label:'Usage',score:usageVisualScore(f.usage,shoe.uses),value:useLabels[f.usage]||'Polyvalent',target:'usage recherché'},
      {label:'Amorti',score:f.cushion==='any'?Math.min(100,55+shoe.fit/3):cushionVisualScore(f.cushion,shoe.cushion),value:labelCushion(shoe.cushion),target:f.cushion==='any'?'selon historique':`cible ${labelCushion(f.cushion)}`}
    ];
  }
  const candidates=[
    {label:'Drop',score:f.drop==='any'?null:dropVisualScore(f.drop==='low'?2:f.drop==='mid'?7:10,shoe.drop),value:`${shoe.drop} mm`,target:f.drop==='any'?'sans préférence':`cible ${f.drop==='low'?'0–4':f.drop==='mid'?'5–8':'9–12'} mm`},
    {label:'Amorti',score:cushionVisualScore(f.cushion,shoe.cushion),value:labelCushion(shoe.cushion),target:f.cushion==='any'?'sans préférence':`cible ${labelCushion(f.cushion)}`},
    {label:'Mousse',score:foamVisualScore(f.foam,shoe.foam),value:labelFoam(shoe.foam),target:f.foam==='any'?'sans préférence':`cible ${labelFoam(f.foam)}`},
    {label:'Terrain',score:terrainVisualScore(f.terrain,shoe.terrain),value:shoe.terrain.map(x=>x==='route'?'Route':x==='trail'?'Trail':'Mixte').join(' / '),target:`cible ${f.terrain==='route'?'Route':f.terrain==='trail'?'Trail':'Mixte'}`},
    {label:'Usage',score:usageVisualScore(f.usage,shoe.uses),value:useLabels[f.usage]||'Usage',target:'usage recherché'}
  ];
  const selected=candidates.filter(m=>m.score!==null).slice(0,3);
  return selected.length===3?selected:[...selected,...candidates.filter(m=>m.score!==null&&!selected.includes(m)).slice(0,3-selected.length)];
}
function metricBarHtml(metric){
  const score=clamp(Math.round(metric.score??50),0,100);
  return `<div class="compare-metric"><div class="compare-metric-head"><strong>${escapeHtml(metric.label)}</strong><span>${escapeHtml(metric.value)} <small>${escapeHtml(metric.target||'')}</small></span></div><div class="compare-track"><span style="width:${score}%"></span></div><b>${score}%</b></div>`;
}
function priceDeltaHtml(shoe, referencePrice, referenceLabel){
  const base=Math.max(Number(referencePrice)||1,1);
  const diff=Math.round((Number(shoe.price)-base)*100)/100;
  const extent=Math.min(50,Math.abs(diff)/base*100);
  const dir=diff<=0?'left':'right';
  const text=diff===0?'même prix':`${diff<0?'−':'+'}${Math.abs(diff).toLocaleString('fr-FR')} €`;
  return `<div class="price-compare"><div class="price-compare-head"><strong>Prix</strong><span class="price-diff ${dir}">${text}</span><small>${escapeHtml(referenceLabel)}</small></div><div class="price-axis"><span class="axis-label left">moins cher</span><span class="axis-zero">0</span><span class="axis-label right">plus cher</span><i class="axis-center"></i><i class="price-fill ${dir}" style="--extent:${extent}%"></i></div></div>`;
}

function populateReferenceModels(){
  const select=$('#referenceShoe');
  if(!select) return;
  const current=state.referenceShoeId==null?'':String(state.referenceShoeId);
  const sorted=shoes.slice().sort((a,b)=>a.brand.localeCompare(b.brand)||a.family.localeCompare(b.family)||a.name.localeCompare(b.name));
  const options=sorted.map(s=>`<option value="${s.id}">${escapeHtml(s.brand)} · ${escapeHtml(s.name)} (${s.generation}) · ${Number(s.price).toLocaleString('fr-FR')} €${s.isReal?' · réel':''}</option>`).join('');
  select.innerHTML=`<option value="">Choisir une chaussure…</option>${options}`;
  if(current && sorted.some(s=>String(s.id)===current)) select.value=current;
}
function renderReferencePreview(){
  const box=$('#referencePreview');
  const clear=$('#clearReferenceBtn');
  if(!box || !clear) return;
  const ref=selectedReferenceShoe();
  box.classList.toggle('hidden',!ref);
  clear.classList.toggle('hidden',!ref);
  if(!ref){box.innerHTML='';return;}
  box.innerHTML=`<div class="reference-preview-photo">${shoeImageMarkup(ref,'reference-shoe-photo')}</div><div><span>MODÈLE DE RÉFÉRENCE</span><strong>${escapeHtml(ref.brand)} ${escapeHtml(ref.name)}</strong><small>Drop ${ref.drop} mm · ${labelCushion(ref.cushion)} · ${labelFoam(ref.foam)}</small></div><div class="reference-price"><span>Prix connu</span><strong>${Number(ref.price).toLocaleString('fr-FR')} €</strong><small>${ref.generation}</small></div>`;
}

const feedbackLabels={tooRigid:'Trop rigide',tooSoft:'Trop mou',tooHigh:'Trop haut',tooLow:'Trop bas',notReactive:'Pas assez réactif',tooReactive:'Trop exigeant / réactif',unstable:'Pas assez stable',comfortable:'Très confortable'};
const useLabels={daily:'Entraînement',long:'Sortie longue',tempo:'Séances rapides',race:'Compétition'};
const sentimentLabels={liked:'Aimée',mixed:'Mitigé',disliked:'Pas aimée'};

function populateHistoryShoes(){
  const select=$('#historyShoe');
  const mine=usedShoeCatalog.map(s=>`<option value="${s.id}">${s.displayName} · ${formatKm(s.distanceKm)}</option>`).join('');
  const catalog=shoes.slice().sort((a,b)=>a.brand.localeCompare(b.brand)||a.name.localeCompare(b.name)).map(s=>`<option value="catalog-${s.id}">${s.brand} · ${s.name} (${s.generation})</option>`).join('');
  select.innerHTML=`<optgroup label="Mes chaussures déjà utilisées">${mine}</optgroup><optgroup label="Catalogue Shoe-Tracker (web)">${catalog}</optgroup><option value="custom">Autre modèle non référencé…</option>`;
}
function formatKm(value){ return `${Number(value).toLocaleString('fr-FR',{minimumFractionDigits:1,maximumFractionDigits:1})} km`; }
function selectedUsedShoe(){ return usedShoeCatalog.find(s=>s.id===$('#historyShoe').value) || null; }
function syncHistoryDistance(){
  const used=selectedUsedShoe();
  const field=$('#historyDistance');
  if(!field) return;
  field.value=used?used.distanceKm:'';
  field.placeholder=used?'Distance importée':'Distance approximative (facultatif)';
}
function renderImportedShoes(){
  const root=$('#importedShoes');
  if(!root) return;
  root.innerHTML=usedShoeCatalog.map(s=>`<button type="button" class="imported-shoe" data-used-id="${s.id}"><span><strong>${s.displayName}</strong><small>${s.alias?`Nom dans l’historique : ${s.alias} · `:''}${s.matchConfidence}</small></span><b>${formatKm(s.distanceKm)}</b><em>Donner mon avis →</em></button>`).join('');
  $$('.imported-shoe').forEach(btn=>btn.addEventListener('click',()=>{
    $('#historyShoe').value=btn.dataset.usedId;
    $('#historyCustomShoe').classList.add('hidden');
    syncHistoryDistance();
    $('#historyForm').classList.remove('hidden');
    $('#toggleHistoryForm').textContent='Fermer';
    $('#historyForm').scrollIntoView({behavior:'smooth',block:'nearest'});
  }));
}
function renderStravaPrivate(payload){
  const connect=$('#stravaConnectBtn');
  const disconnect=$('#stravaDisconnectBtn');
  const notice=$('#stravaNotice');
  const data=$('#stravaPrivateData');
  const sourceStatus=$('#stravaSourceStatus');
  if(!connect || !disconnect || !notice || !data) return;
  const connected=Boolean(payload&&payload.connected);
  state.strava={
    connected,
    configured:payload?.configured !== false,
    athlete:payload?.athlete || null,
    shoes:Array.isArray(payload?.shoes)?payload.shoes:[]
  };
  connect.classList.toggle('hidden',connected);
  disconnect.classList.toggle('hidden',!connected);
  data.classList.toggle('hidden',!connected);
  if(!connected){
    const notConfigured=payload?.configured===false;
    notice.className=`strava-notice ${notConfigured?'warn':''}`;
    notice.textContent=notConfigured
      ? 'Strava n’est pas encore configuré sur Vercel. Ajoute les variables STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET et STRAVA_SESSION_SECRET.'
      : 'Strava n’est pas connecté. Tu peux connecter ton compte pour afficher ici tes chaussures et leur kilométrage, uniquement dans ton espace privé.';
    if(sourceStatus) sourceStatus.textContent=notConfigured?'à configurer':'non connecté';
    return;
  }
  notice.className='strava-notice ok';
  notice.textContent='Connexion active · données récupérées à la demande depuis Strava, sans écriture dans Supabase ni transfert vers la communauté.';
  if(sourceStatus) sourceStatus.textContent=`connecté · ${state.strava.shoes.length} paire${state.strava.shoes.length>1?'s':''}`;
  $('#stravaAthleteLabel').textContent=state.strava.athlete?.firstname ? `${state.strava.athlete.firstname} · compte Strava connecté` : 'Compte Strava connecté';
  const root=$('#stravaShoes');
  root.innerHTML=state.strava.shoes.length
    ? state.strava.shoes.map(g=>`<div class="strava-shoe"><div><strong>${escapeHtml(g.name)}</strong>${g.primary?'<small class="strava-primary">paire principale</small>':'<small>équipement Strava</small>'}</div><b>${formatKm(g.distanceKm||0)}</b></div>`).join('')
    : '<div class="strava-shoe"><div><strong>Aucune chaussure trouvée</strong><small>Ajoute ou nomme tes chaussures dans Strava puis reconnecte Shoe-Tracker.</small></div></div>';
}

function escapeHtml(value){
  return String(value??'').replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
}

function stravaRedirectMessage(){
  const status=new URLSearchParams(location.search).get('strava');
  const notice=$('#stravaNotice');
  if(!status || !notice) return;
  state.mode='experience'; hideSearchResults(); updateModeUi();
  const messages={
    connected:['ok','Autorisation Strava reçue. Vérification des chaussures en cours…'],
    denied:['warn','Connexion Strava annulée : aucune donnée n’a été récupérée.'],
    'not-configured':['warn','La connexion Strava est prête dans le code mais les identifiants OAuth ne sont pas encore configurés sur Vercel.'],
    'state-error':['warn','La vérification de sécurité OAuth a échoué. Recommence la connexion Strava.'],
    'missing-code':['warn','Strava n’a pas renvoyé de code d’autorisation.'],
    'token-error':['warn','Impossible de terminer la connexion Strava. Vérifie le Client ID, le secret et le domaine de callback.']
  };
  const item=messages[status];
  if(item){notice.className=`strava-notice ${item[0]}`;notice.textContent=item[1];}
}

async function loadStravaPrivate(){
  const notice=$('#stravaNotice');
  if(!notice) return;
  try{
    const res=await fetch('/api/strava-me',{headers:{accept:'application/json'},cache:'no-store'});
    const payload=await res.json().catch(()=>({}));
    if(res.status===401){renderStravaPrivate({connected:false,configured:true});return;}
    if(res.status===503){renderStravaPrivate({connected:false,configured:false});return;}
    if(!res.ok) throw new Error(payload.error||`HTTP ${res.status}`);
    renderStravaPrivate(payload);
  }catch(err){
    renderStravaPrivate({connected:false,configured:true});
    notice.className='strava-notice warn';
    notice.textContent='Impossible de joindre l’import Strava pour le moment. Le reste de Shoe-Tracker continue à fonctionner.';
    const sourceStatus=$('#stravaSourceStatus'); if(sourceStatus) sourceStatus.textContent='indisponible';
  }
}

async function disconnectStrava(){
  const button=$('#stravaDisconnectBtn');
  if(button){button.disabled=true;button.textContent='Déconnexion…';}
  try{await fetch('/api/strava-disconnect',{method:'POST',headers:{accept:'application/json'}});}catch(_err){}
  if(button){button.disabled=false;button.textContent='Déconnecter';}
  renderStravaPrivate({connected:false,configured:true});
  const notice=$('#stravaNotice'); if(notice){notice.className='strava-notice ok';notice.textContent='Compte Strava déconnecté et session locale supprimée.';}
}

function openManualFeedbackFromStrava(){
  resetHistoryForm();
  $('#historyShoe').value='custom';
  $('#historyCustomShoe').classList.remove('hidden');
  $('#historyCustomShoe').value='';
  $('#historyDistance').value='';
  $('#historyDistance').placeholder='Saisis toi-même une valeur si tu le souhaites';
  $('#historyForm').classList.remove('hidden');
  $('#toggleHistoryForm').textContent='Fermer';
  $('#historyForm').scrollIntoView({behavior:'smooth',block:'nearest'});
  $('#historyCustomShoe').focus({preventScroll:true});
}

function selectedHistoryValues(selector,key){ return $$(selector+'.active').map(x=>x.dataset[key]); }
function resetHistoryForm(){
  $$('#feedbackChips .feedback-chip,#historyUseChips .feedback-chip').forEach(x=>x.classList.remove('active'));
  $('#historySentiment').value='mixed';
  $('#communityConsent').checked=false;
  $('#historyCustomShoe').value='';
  $('#historyCustomShoe').classList.add('hidden');
  $('#historyShoe').selectedIndex=0;
  syncHistoryDistance();
}
function historyLearningText(){
  if(!state.history.length) return '';
  const counts={}; const uses={};
  state.history.forEach(h=>{h.feedback.forEach(x=>counts[x]=(counts[x]||0)+1);h.uses.forEach(x=>uses[x]=(uses[x]||0)+1)});
  const ideas=[];
  if(counts.tooRigid) ideas.push('moins de rigidité');
  if(counts.tooSoft) ideas.push('une mousse plus ferme');
  if(counts.tooHigh) ideas.push('un profil moins haut');
  if(counts.tooLow) ideas.push('davantage d’amorti/hauteur');
  if(counts.notReactive) ideas.push('plus de réactivité');
  if(counts.tooReactive) ideas.push('une chaussure moins exigeante');
  if(counts.unstable) ideas.push('plus de stabilité');
  if(counts.comfortable) ideas.push('préserver le confort');
  const topUse=Object.entries(uses).sort((a,b)=>b[1]-a[1])[0];
  if(topUse) ideas.push(`un bon comportement en ${useLabels[topUse[0]].toLowerCase()}`);
  const liked=state.history.filter(h=>h.sentiment==='liked').map(h=>h.name);
  let text=ideas.length?`Signaux détectés : ${ideas.slice(0,4).join(' · ')}.`:'Ton historique commence à influencer les scores.';
  if(liked.length) text+=` Paire${liked.length>1?'s':''} appréciée${liked.length>1?'s':''} : ${liked.slice(0,2).join(', ')}.`;
  return text;
}
function renderHistory(){
  const has=state.history.length>0;
  $('#historyEmpty').classList.toggle('hidden',has);
  $('#historyList').classList.toggle('hidden',!has);
  $('#learningSummary').classList.toggle('hidden',!has);
  if(!has) return;
  $('#historyList').innerHTML=state.history.map(h=>`<div class="history-entry">
    <div class="history-entry-main"><div class="history-entry-head"><strong>${h.name}</strong><span class="sentiment-pill ${h.sentiment}">${sentimentLabels[h.sentiment]}</span>${h.consent?`<span class="community-badge">${h.remoteStored?'Contribution enregistrée ✓':'Contribution prête · base non configurée'}</span>`:''}</div>
    <div class="history-entry-meta">Retour associé au profil ${h.level} · ${h.weightBand} kg${h.distanceKm?` · ${formatKm(h.distanceKm)} parcourus`:''}</div>
    <div class="history-entry-tags">${h.feedback.map(x=>`<span>${feedbackLabels[x]}</span>`).join('')}${h.uses.map(x=>`<span>✓ ${useLabels[x]}</span>`).join('')||'<span>Aucun usage favori indiqué</span>'}</div></div>
    <button type="button" class="history-remove" data-history-id="${h.id}" aria-label="Supprimer ce retour">×</button>
  </div>`).join('');
  $('#learningText').textContent=historyLearningText();
  $$('.history-remove').forEach(btn=>btn.addEventListener('click',()=>{state.history=state.history.filter(h=>String(h.id)!==btn.dataset.historyId);renderHistory();markSearchDirty();}));
}

function renderGenerationSpotlight(rows,f){
  const target=rows.find(s=>s.generation!=='N' && currentFamilyShoe(s));
  const box=$('#generationSpotlight');
  if(!target){
    box.innerHTML=`<div class="generation-copy"><span class="badge">Aucune ancienne génération affichée</span><h3>Active N−1, N−2 ou N−3 dans les filtres.</h3><p>Le comparateur montrera ici le meilleur ancien modèle disponible face à sa génération actuelle.</p></div>`;
    return;
  }
  const current=currentFamilyShoe(target);
  const currentFit=scoreFit(current,f);
  const saving=Math.round((current.price-target.price)*100)/100;
  const changes=target.compare?.changes||[
    ['Poids',target.weightGrams?`${target.weightGrams} g`:'—',current.weightGrams?`${current.weightGrams} g`:'—','donnée web'],
    ['Drop',`${target.drop} mm`,`${current.drop} mm`,target.drop===current.drop?'Identique':`${current.drop-target.drop>0?'+':''}${current.drop-target.drop} mm sur N`],
    ['Plaque',target.plateType||'—',current.plateType||'—',target.plateType===current.plateType?'Identique':'Construction différente']
  ];
  const verdict=target.compare?.verdict||(saving>30?'Ancienne génération très intéressante':'Écart à examiner');
  const reason=target.compare?.reason||'Comparaison basée sur les caractéristiques et les prix publics collectés.';
  box.innerHTML=`
    <div class="generation-copy">
      <span class="generation-hero-badge">ANCIENNE GÉNÉRATION ${target.generation}</span>
      <h3>${target.name} vs ${current.name}</h3>
      <p>${reason}</p>
      <div class="generation-verdict"><strong>${verdict}</strong><span>${saving>=0?`${Number(saving).toLocaleString('fr-FR')} € économisés`:`N coûte ${Number(-saving).toLocaleString('fr-FR')} € de moins`} · Fit ${target.fit}/100 contre ${currentFit}/100 pour N</span></div>
    </div>
    <div class="generation-table-wrap">
      <table class="diff-table">
        <thead><tr><th>Critère</th><th>${target.generation} · ${target.name}</th><th>N · ${current.name}</th><th>Différence</th></tr></thead>
        <tbody>${changes.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td><span class="diff-pill">${r[3]}</span></td></tr>`).join('')}
          <tr class="price-diff-row"><td>Prix public collecté</td><td><strong>${target.price} €</strong></td><td>${current.price} €</td><td><span class="saving-pill">${saving>=0?`−${Number(saving).toLocaleString('fr-FR')} €`:`+${Number(-saving).toLocaleString('fr-FR')} €`}</span></td></tr>
        </tbody>
      </table>
    </div>`;
}

function render(){
  renderReferencePreview();
  if(!state.searchLaunched){
    $$('.pre-search-hidden').forEach(el=>el.classList.add('pre-search-hidden'));
    return;
  }
  $$('.pre-search-hidden').forEach(el=>el.classList.remove('pre-search-hidden'));
  $$('.generation-section,.trust-section,.source-strip').forEach(el=>el.classList.add('v10-secondary-hidden'));
  const f=getFilters();
  const reference=state.mode==='similar'?selectedReferenceShoe():null;
  let rows=shoes.map(shoe=>({...shoe,fit:scoreFit(shoe,f),similarity:reference?similarityScore(reference,shoe):null,savingVsReference:reference?referenceSavings(reference,shoe):null}))
    .filter(shoe=>state.generations.has(shoe.generation) && shoe.price<=f.maxPrice && sizeMatches(shoe,f.size) && (state.mode==='similar'||shoe.fit>=52))
    .filter(shoe=>!reference || (String(shoe.id)!==String(reference.id) && shoe.price<=reference.price*1.20 && shoe.similarity>=50))
    .sort((a,b)=>finalScore(b,b.fit,reference)-finalScore(a,a.fit,reference));
  $('#resultCount').textContent=rows.length;
  if(reference){
    $('#summaryText').textContent=`Alternatives à ${reference.brand} ${reference.name} · jusqu’à +20 % du prix de référence · similarité ≥ 50 % · pointure ${f.size} · générations ${generationSummary()}`;
  }else if(state.mode==='experience'){
    $('#summaryText').textContent=`Recommandations tirées de ton expérience · ${state.history.length} retour${state.history.length>1?'s':''} manuel${state.history.length>1?'s':''}${state.strava.connected?' + équipement Strava privé':''} · pointure ${f.size} · budget ≤ ${f.maxPrice} €`;
  }else{
    $('#summaryText').textContent=`Recherche par critères · pointure ${f.size} · budget ≤ ${f.maxPrice} € · générations ${generationSummary()} · ${state.rank==='balanced'?'équilibre profil/prix':state.rank==='deal'?'meilleures affaires':'compatibilité'}`;
  }
  $('#emptyState').classList.toggle('hidden',rows.length!==0);
  if(reference && !rows.length){
    $('#emptyState').querySelector('h3').textContent='Aucune alternative moins chère assez proche.';
    $('#emptyState').querySelector('p').textContent='Essaie d’activer davantage de générations, d’augmenter ton budget ou de choisir un autre modèle de référence.';
  }else{
    $('#emptyState').querySelector('h3').textContent='Aucun modèle ne coche assez de cases.';
    $('#emptyState').querySelector('p').textContent='Essaie d’augmenter ton budget ou de retirer une préférence.';
  }
  $('#resultsGrid').innerHTML=rows.map((shoe,i)=>{
    const score=finalScore(shoe,shoe.fit,reference);
    const isOld=shoe.generation!=='N';
    const metrics=visualMetrics(shoe,f,reference);
    const priceReference=reference?reference.price:f.maxPrice;
    const priceReferenceLabel=reference?`réf. ${reference.name} · ${Number(reference.price).toLocaleString('fr-FR')} €`:`budget max · ${Number(f.maxPrice).toLocaleString('fr-FR')} €`;
    return `<article class="shoe-card visual-card ${isOld?'old-generation-card':'current-generation-card'} ${reference?'reference-result-card':''}">
      <div class="generation-ribbon ${generationClass(shoe.generation)}">${shoe.generation}${isOld?' · ancienne génération':' · actuelle'}</div>
      <div class="visual-card-head"><div><div class="shoe-brand">${shoe.brand}</div><div class="shoe-name">${shoe.name}</div></div><span class="compact-score">${score}%</span></div>
      <div class="shoe-visual real-photo">${shoeImageMarkup(shoe)}<span class="deal-pill">${dealBadgeLabel(shoe.deal)}</span></div>
      <div class="visual-price"><div><strong>${Number(shoe.price).toLocaleString('fr-FR')} €</strong><span>${escapeHtml(shoe.shop)}</span></div>${shoe.launch&&shoe.launch>shoe.price?`<small>${refPriceLabel(shoe)} ${Number(shoe.launch).toLocaleString('fr-FR')} €</small>`:''}</div>
      <div class="comparison-bars">${metrics.map(metricBarHtml).join('')}${priceDeltaHtml(shoe,priceReference,priceReferenceLabel)}</div>
      <div class="card-actions"><button type="button" class="details-btn" data-id="${shoe.id}">${reference?'Détails comparaison':'Détails'}</button><button type="button" class="buy-btn" data-id="${shoe.id}">Voir les prix</button></div>
    </article>`
  }).join('');
  $$('.details-btn,.buy-btn').forEach(btn=>btn.addEventListener('click',()=>openShoe(+btn.dataset.id,f)));
  renderGenerationSpotlight(rows,f);
  state.searchDirty=false;
  $('#launchSearchBtn').innerHTML='Actualiser la recherche <span>→</span>';
}


function referenceComparisonPanel(s,reference){
  if(!reference || String(reference.id)===String(s.id)) return '';
  const similarity=similarityScore(reference,s);
  const saving=referenceSavings(reference,s);
  const reasons=referenceReasons(reference,s);
  return `<div class="dialog-panel full reference-comparison-panel"><div class="reference-dialog-head"><div><span class="same-spirit-badge">MÊME ESPRIT · ${similarity}%</span><h4>${s.name} face à ${reference.brand} ${reference.name}</h4></div><strong class="reference-dialog-saving">−${Number(saving).toLocaleString('fr-FR')} €</strong></div><p>Shoe-Tracker rapproche les deux modèles sur leurs caractéristiques et leur usage, pas seulement sur la marque.</p><div class="reference-reasons">${reasons.map(r=>`<span>✓ ${r}</span>`).join('')}</div><div class="reference-price-line"><span>Modèle envisagé <strong>${reference.price} €</strong></span><span>Alternative <strong>${s.price} €</strong></span></div></div>`;
}
function comparisonPanel(s,fit){
  const current=currentFamilyShoe(s);
  if(!current || current.id===s.id) return `<div class="dialog-panel full"><h4>Génération actuelle</h4><p>Cette paire sert de référence N pour comparer les anciennes versions de la même famille.</p></div>`;
  const currentFit=scoreFit(current,getFilters());
  const saving=Math.round((current.price-s.price)*100)/100;
  const changes=s.compare?.changes||[
    ['Poids',s.weightGrams?`${s.weightGrams} g`:'—',current.weightGrams?`${current.weightGrams} g`:'—','donnée web'],
    ['Drop',`${s.drop} mm`,`${current.drop} mm`,s.drop===current.drop?'Identique':'Différent'],
    ['Plaque',s.plateType||'—',current.plateType||'—',s.plateType===current.plateType?'Identique':'Différent']
  ];
  return `<div class="dialog-panel full comparison-panel"><div class="comparison-head"><div><span class="generation-hero-badge">${s.generation} VS N</span><h4>${s.name} face à ${current.name}</h4></div><strong class="comparison-saving">${saving>=0?`−${Number(saving).toLocaleString('fr-FR')} €`:`+${Number(-saving).toLocaleString('fr-FR')} €`}</strong></div>
    <p>${s.compare?.reason||'Comparaison basée sur les caractéristiques techniques et les prix publics collectés.'}</p>
    <div class="compact-diff-grid">${changes.map(r=>`<div><span>${r[0]}</span><strong>${r[1]} → ${r[2]}</strong><small>${r[3]}</small></div>`).join('')}</div>
    <div class="dialog-verdict"><strong>${s.compare?.verdict||'À comparer selon ton profil'}</strong><span>Fit ${fit}/100 · N ${currentFit}/100 · ${saving>=0?`économie ${Number(saving).toLocaleString('fr-FR')} €`:`ancienne plus chère de ${Number(-saving).toLocaleString('fr-FR')} €`}</span></div></div>`;
}

function openShoe(id,f){
  const s=shoes.find(x=>x.id===id); const fit=scoreFit(s,f); const reference=state.mode==='similar'?selectedReferenceShoe():null;
  const saving=s.launch && s.launch>s.price ? Math.round((s.launch-s.price)*100)/100 : 0;
  const sourceBlock=sourceLinks(s)||'<span>Aucune source externe enregistrée.</span>';
  const historyBlock=s.avg90?`<p><strong>Historique public :</strong> moyenne 90 jours ${s.avg90} €${s.best?` · plus bas relevé ${s.best} €`:''}.</p>`:'';
  $('#dialogContent').innerHTML=`<div class="dialog-body">
    <div class="dialog-head"><div><div class="shoe-brand">${s.brand}</div><h2>${s.name}</h2><div class="source-line">${sourceBadge(s)}${s.sourceLabel?`<span class="snapshot-badge">${s.sourceLabel}</span>`:''}</div><div class="tags"><span class="tag">${s.generation}</span><span class="tag">Fit ${fit}/100</span><span class="tag">Deal ${s.deal}/100</span></div></div><div class="dialog-price">${s.price} €</div></div>
    <div class="dialog-grid">
      ${referenceComparisonPanel(s,reference)}
      ${comparisonPanel(s,fit)}
      <div class="dialog-panel"><h4>Pourquoi elle ressort</h4><ul>${(s.reviews||[]).map(x=>`<li>${x}</li>`).join('')}</ul>${saving>0?`<p><strong>${Number(saving).toLocaleString('fr-FR')} € d’écart</strong> par rapport au ${refPriceLabel(s).toLowerCase()} de ${s.launch} €.</p>`:''}</div>
      <div class="dialog-panel"><h4>Prix observé</h4>${(s.offers||[]).map((o,i)=>`<div class="offer-row"><span>${o[0]}${i===0?' 🥇':''}</span><strong>${o[1]} €</strong></div>`).join('')}<div class="affiliate-note">Snapshot web collecté le ${s.checkedAt?new Date(s.checkedAt).toLocaleDateString('fr-FR'):'—'}. Le prix, le coloris et la pointure doivent être revérifiés avant achat. Les futurs liens affiliés seront signalés sans influencer le classement.</div></div>
      ${state.mode==='experience'&&state.history.length?`<div class="dialog-panel"><h4>🧠 Apprentissage depuis ton expérience</h4><p>Tes retours personnels ajustent la recommandation de <strong>${historyAdjustment(s)>0?'+':''}${historyAdjustment(s)} point${Math.abs(historyAdjustment(s))>1?'s':''}</strong>.</p><p>${historyLearningText()}</p></div>`:''}
      <div class="dialog-panel"><h4>Profil technique</h4><p>${s.weightGrams?`${s.weightGrams} g · `:''}drop ${s.drop} mm · ${labelCushion(s.cushion)} · mousse ${labelFoam(s.foam).toLowerCase()} · ${s.plateType|| (s.carbon?'plaque carbone':'sans plaque')}.</p></div>
      <div class="dialog-panel"><h4>Sources internet</h4><div class="source-links">${sourceBlock}</div>${historyBlock}<p class="muted">Les avis communautaires Shoe-Tracker ne sont pas encore assez nombreux pour produire un score public fiable : aucune note fictive n’est affichée.</p></div>
    </div>
  </div>`;
  $('#shoeDialog').showModal();
}


async function loadApiCatalog(){
  const note=$('#dataSourceNote');
  const status=$('#apiStatusText');
  try{
    const res=await fetch('/api/catalog',{headers:{accept:'application/json'}});
    if(!res.ok) throw new Error(`HTTP ${res.status}`);
    const payload=await res.json();
    const incoming=Array.isArray(payload.shoes)?payload.shoes:[];
    if(incoming.length){
      shoes=incoming;
      populateHistoryShoes();
      populateReferenceModels();
      render();
    }
    const realCount=shoes.filter(s=>s.isReal).length;
    const source=payload.source==='supabase'?'Supabase':'snapshot web du 29/08/2026';
    note.textContent=`API active · ${realCount} modèle${realCount>1?'s':''} réel${realCount>1?'s':''} · source ${source}`;
    status.textContent=`connectée · ${source}`;
  }catch(err){
    note.textContent='API indisponible · utilisation du snapshot web embarqué';
    status.textContent='hors ligne · snapshot embarqué';
  }
}

async function submitCommunityFeedback(entry){
  if(!entry.consent) return {stored:false,reason:'consent-disabled'};
  try{
    const res=await fetch('/api/feedback',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({
      shoeId:entry.shoeId||null,
      shoeName:entry.name,
      canonical:entry.canonical||null,
      level:entry.level,
      weightBand:entry.weightBand,
      distanceKm:entry.distanceKm,
      sentiment:entry.sentiment,
      feedback:entry.feedback,
      uses:entry.uses
    })});
    return await res.json();
  }catch(err){ return {stored:false,reason:'network'}; }
}


function modeLabel(mode){return {similar:'modèle similaire',criteria:'critères personnalisés',experience:'mon expérience'}[mode]||mode}
function updateModeUi(){
  $$('.search-mode-tab').forEach(btn=>{
    const active=btn.dataset.searchMode===state.mode;
    btn.classList.toggle('active',active); btn.setAttribute('aria-selected',String(active));
  });
  $$('[data-mode-panel]').forEach(panel=>panel.classList.toggle('hidden',panel.dataset.modePanel!==state.mode));
  $('#searchModeSummary').textContent=`Mode : ${modeLabel(state.mode)}`;
  $('#searchHint').textContent=state.mode==='similar'?'Choisis un modèle de référence puis lance la recherche.':state.mode==='criteria'?'Renseigne tes préférences puis lance la recherche.':'Ajoute tes anciennes chaussures / ressentis, puis lance la recherche.';
  const labels=state.mode==='similar'?{balanced:'Meilleur compromis',deal:'Plus grosse économie',fit:'Plus similaire'}:state.mode==='experience'?{balanced:'Meilleur choix',deal:'Meilleure affaire',fit:'Selon mon expérience'}:{balanced:'Meilleur choix',deal:'Meilleure affaire',fit:'Compatibilité'};
  $$('.rank-tab').forEach(btn=>{btn.textContent=labels[btn.dataset.rank]||btn.textContent;});
  if(!state.searchLaunched) $('#launchSearchBtn').innerHTML='Lancer la recherche <span>→</span>';
}
function hideSearchResults(){
  state.searchLaunched=false; state.searchDirty=false;
  $$('.source-strip,.results-section,.generation-section,.trust-section').forEach(el=>el.classList.add('pre-search-hidden'));
  $('#launchSearchBtn').innerHTML='Lancer la recherche <span>→</span>';
}
function markSearchDirty(){
  state.searchDirty=true;
  if(state.searchLaunched){
    $('#launchSearchBtn').innerHTML='Relancer la recherche <span>→</span>';
    $('#searchHint').textContent='Des critères ont changé. Relance pour mettre à jour les recommandations.';
  }
}
function launchSearch(){
  if(state.mode==='similar'&&!selectedReferenceShoe()){
    $('#searchHint').textContent='Choisis d’abord un modèle de référence.';
    $('#referenceShoe').focus(); return;
  }
  if(state.mode==='experience'&&!state.history.length&&!state.strava.connected){
    $('#searchHint').textContent='Connecte Strava ou ajoute au moins un retour sur une chaussure déjà utilisée.';
    return;
  }
  state.searchLaunched=true; state.searchDirty=false;
  render();
  $('#results').scrollIntoView({behavior:'smooth',block:'start'});
}
$$('.search-mode-tab').forEach(btn=>btn.addEventListener('click',()=>{
  state.mode=btn.dataset.searchMode;
  hideSearchResults(); updateModeUi(); renderReferencePreview();
}));
$('#launchSearchBtn').addEventListener('click',launchSearch);

if($('#referenceShoe')) $('#referenceShoe').addEventListener('change',()=>{
  state.referenceShoeId=$('#referenceShoe').value || null;
  renderReferencePreview(); markSearchDirty();
});
if($('#clearReferenceBtn')) $('#clearReferenceBtn').addEventListener('click',()=>{
  state.referenceShoeId=null; $('#referenceShoe').value=''; renderReferencePreview(); markSearchDirty();
});
if($('#stravaDisconnectBtn')) $('#stravaDisconnectBtn').addEventListener('click',disconnectStrava);
if($('#openManualFeedbackFromStrava')) $('#openManualFeedbackFromStrava').addEventListener('click',openManualFeedbackFromStrava);
populateHistoryShoes();
populateReferenceModels();
renderImportedShoes();
syncHistoryDistance();
renderHistory();
updateModeUi();
$('#toggleHistoryForm').addEventListener('click',()=>{
  $('#historyForm').classList.toggle('hidden');
  $('#toggleHistoryForm').textContent=$('#historyForm').classList.contains('hidden')?'+ Ajouter une chaussure':'Fermer';
});
$('#cancelHistory').addEventListener('click',()=>{ $('#historyForm').classList.add('hidden'); $('#toggleHistoryForm').textContent='+ Ajouter une chaussure'; resetHistoryForm(); });
$('#historyShoe').addEventListener('change',()=>{ $('#historyCustomShoe').classList.toggle('hidden',$('#historyShoe').value!=='custom'); syncHistoryDistance(); });
$$('#feedbackChips .feedback-chip,#historyUseChips .feedback-chip').forEach(btn=>btn.addEventListener('click',()=>btn.classList.toggle('active')));
$('#historyForm').addEventListener('submit',async e=>{
  e.preventDefault();
  const choice=$('#historyShoe').value;
  const used=usedShoeCatalog.find(s=>s.id===choice) || null;
  const catalogMatch=choice.startsWith('catalog-')?shoes.find(s=>s.id===+choice.replace('catalog-','')):null;
  const custom=$('#historyCustomShoe').value.trim();
  if(!used && !catalogMatch && !custom){ $('#historyCustomShoe').focus(); return; }
  const f=getFilters();
  const bandLow=Math.floor(f.weight/10)*10;
  const entry={
    id:Date.now()+Math.random(), shoeId:catalogMatch?catalogMatch.id:null, usedShoeId:used?used.id:null,
    name:used?used.displayName:catalogMatch?`${catalogMatch.brand} ${catalogMatch.name}`:custom,
    canonical:used?used.canonical:null, distanceKm:Number($('#historyDistance').value)||null,
    sentiment:$('#historySentiment').value, feedback:selectedHistoryValues('#feedbackChips .feedback-chip','feedback'),
    uses:selectedHistoryValues('#historyUseChips .feedback-chip','use'), consent:$('#communityConsent').checked,
    level:f.level, weightBand:`${bandLow}–${bandLow+9}`
  };
  state.history.push(entry);
  if(entry.consent){ const result=await submitCommunityFeedback(entry); entry.remoteStored=Boolean(result&&result.stored); }
  resetHistoryForm(); $('#historyForm').classList.add('hidden'); $('#toggleHistoryForm').textContent='+ Ajouter une chaussure';
  renderHistory(); markSearchDirty();
});

$$('[data-segment="terrain"] .seg').forEach(btn=>btn.addEventListener('click',()=>{
  $$('[data-segment="terrain"] .seg').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); $('#terrain').value=btn.dataset.value; markSearchDirty();
}));
$$('#usageChips .chip').forEach(btn=>btn.addEventListener('click',()=>{
  $$('#usageChips .chip').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); $('#usage').value=btn.dataset.value; markSearchDirty();
}));
$$('#generationChips .generation-chip').forEach(btn=>btn.addEventListener('click',()=>{
  const g=btn.dataset.generation;
  if(state.generations.has(g) && state.generations.size===1) return;
  if(state.generations.has(g)) state.generations.delete(g); else state.generations.add(g);
  btn.classList.toggle('active',state.generations.has(g));
  $('#oldOnlyBtn').classList.toggle('active',!state.generations.has('N') && state.generations.size===3); markSearchDirty();
}));
$('#oldOnlyBtn').addEventListener('click',()=>{
  const oldOnly=!state.generations.has('N') && ['N−1','N−2','N−3'].every(g=>state.generations.has(g));
  state.generations=new Set(oldOnly?['N','N−1','N−2','N−3']:['N−1','N−2','N−3']);
  $$('#generationChips .generation-chip').forEach(btn=>btn.classList.toggle('active',state.generations.has(btn.dataset.generation)));
  $('#oldOnlyBtn').classList.toggle('active',!oldOnly); markSearchDirty();
});
$$('#filtersForm select,#filtersForm input,#size,#maxPrice,#experienceLevel,#experienceWeight').forEach(el=>el.addEventListener('input',markSearchDirty));
$$('.rank-tab').forEach(btn=>btn.addEventListener('click',()=>{ $$('.rank-tab').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); state.rank=btn.dataset.rank; render(); }));
$('#resetBtn').addEventListener('click',()=>{location.reload()});
$('#dialogClose').addEventListener('click',()=>$('#shoeDialog').close());
$('#shoeDialog').addEventListener('click',e=>{if(e.target===$('#shoeDialog')) $('#shoeDialog').close()});
render();
loadApiCatalog();
loadStravaPrivate().then(stravaRedirectMessage);
