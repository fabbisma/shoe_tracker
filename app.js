const usedShoeCatalog = [
  {id:'used-crivit-running',brand:'CRIVIT',name:'Running',displayName:'Crivit Running',distanceKm:910.2,canonical:'Crivit Running',matchConfidence:'modèle exact à préciser'},
  {id:'used-hoka-carbon-x',brand:'HOKA',name:'ProFlyX Carbon X',displayName:'HOKA ProFlyX Carbon X',distanceKm:1224.4,canonical:'HOKA Carbon X',matchConfidence:'famille Carbon X identifiée, version à préciser'},
  {id:'used-kiprun-kd900x',brand:'KIPRUN',name:'KD900X',displayName:'Kiprun KD900X',alias:'Kiprun X',distanceKm:771.3,canonical:'KIPRUN KD900X',matchConfidence:'modèle confirmé'},
  {id:'used-lasportiva-bushido-ii',brand:'LA SPORTIVA',name:'Bushido II',displayName:'La Sportiva Bushido II',distanceKm:1409.5,canonical:'La Sportiva Bushido II',matchConfidence:'modèle confirmé'},
  {id:'used-on-cloudflow',brand:'ON',name:'Cloudflow',displayName:'On Cloudflow',distanceKm:1054.6,canonical:'On Cloudflow',matchConfidence:'version à préciser'},
  {id:'used-reebok-energen-run-20',brand:'REEBOK',name:'Energen Run 2.0',displayName:'Reebok Energen Run 2.0',distanceKm:287.5,canonical:'Reebok Energen Run 2.0',matchConfidence:'modèle confirmé'},
  {id:'used-salomon-ultra-glide-2',brand:'SALOMON',name:'Ultra Glide 2',displayName:'Salomon Ultra Glide 2',distanceKm:849.2,canonical:'Salomon Ultra Glide 2',matchConfidence:'modèle confirmé'}
];

let shoes = [
  {id:10,family:'novablast',brand:'ASICS',name:'Novablast 6',generation:'N',terrain:['route','mixte'],levels:['occasionnel','regulier','competition'],uses:['daily','long','tempo'],drop:8,cushion:'high',foam:'bouncy',carbon:false,launch:160,avg90:148,best:132,price:139,shop:'i-Run',sizes:['41','42','42.5','43','44','44.5'],weightRange:[55,95],expert:94,community:91,deal:74,athlete:'Données de démonstration',reviews:['Version actuelle de référence','Amorti dynamique','Prix encore proche du lancement'],offers:[['i-Run',139],['Alltricks',145],['ASICS',160]]},
  {id:1,family:'novablast',brand:'ASICS',name:'Novablast 5',generation:'N−1',terrain:['route','mixte'],levels:['occasionnel','regulier','competition'],uses:['daily','long','tempo'],drop:8,cushion:'high',foam:'bouncy',carbon:false,launch:150,avg90:124,best:96,price:98,shop:'i-Run',sizes:['41','42','42.5','43','44','44.5'],weightRange:[55,95],expert:91,community:88,deal:94,athlete:'Pas de référence élite retenue',reviews:['Amorti polyvalent','Mousse dynamique','Très bon choix quotidien'],offers:[['i-Run',98],['Alltricks',104],['Top4Running',109]],compare:{current:'Novablast 6',currentPrice:139,fitDelta:2,verdict:'N−1 recommandée',reason:'Les différences restent modestes pour un usage quotidien alors que l’écart de prix est important.',changes:[['Poids','255 g','248 g','N plus légère'],['Mousse','ancienne formulation','nouvelle formulation','N plus vive'],['Stabilité','Très bonne','Très bonne','Quasi identique'],['Drop','8 mm','8 mm','Identique']]}},
  {id:2,family:'novablast',brand:'ASICS',name:'Novablast 4',generation:'N−2',terrain:['route','mixte'],levels:['debutant','occasionnel','regulier'],uses:['daily','long'],drop:8,cushion:'high',foam:'balanced',carbon:false,launch:150,avg90:101,best:79,price:82,shop:'Top4Running',sizes:['40','41','42','42.5','43','44'],weightRange:[55,90],expert:86,community:87,deal:97,athlete:'Pas de référence élite retenue',reviews:['Très bon rapport qualité/prix','Stable pour un daily trainer','Moins vive que la génération suivante'],offers:[['Top4Running',82],['Running Point',86],['i-Run',92]],compare:{current:'Novablast 6',currentPrice:139,fitDelta:6,verdict:'N−2 = choix budget',reason:'Tu économises beaucoup, mais le moteur considère la mousse moins dynamique et le profil un peu moins polyvalent.',changes:[['Poids','260 g','248 g','N plus légère'],['Mousse','plus équilibrée','plus rebondissante','Gain sensible sur N'],['Stabilité','Bonne','Très bonne','N progresse'],['Drop','8 mm','8 mm','Identique']]}},
  {id:11,family:'novablast',brand:'ASICS',name:'Novablast 3',generation:'N−3',terrain:['route','mixte'],levels:['debutant','occasionnel','regulier'],uses:['daily','long'],drop:8,cushion:'high',foam:'balanced',carbon:false,launch:140,avg90:88,best:64,price:69,shop:'Running Point',sizes:['41','42','42.5','43','44'],weightRange:[55,88],expert:81,community:84,deal:96,athlete:'Pas de référence élite retenue',reviews:['Prix très bas','Toujours confortable','Compromis technique plus marqué'],offers:[['Running Point',69],['Top4Running',74]],compare:{current:'Novablast 6',currentPrice:139,fitDelta:11,verdict:'N−3 seulement si budget prioritaire',reason:'Le prix est excellent, mais plusieurs générations d’évolution commencent à créer un vrai écart technique.',changes:[['Poids','275 g','248 g','Écart notable'],['Mousse','moins rebondissante','nouvelle formulation','N nettement devant'],['Stabilité','Correcte','Très bonne','N progresse'],['Drop','8 mm','8 mm','Identique']]}},

  {id:12,family:'ghost',brand:'BROOKS',name:'Ghost 17',generation:'N',terrain:['route','mixte'],levels:['debutant','occasionnel','regulier'],uses:['daily','long'],drop:10,cushion:'high',foam:'balanced',carbon:false,launch:150,avg90:142,best:129,price:135,shop:'Brooks',sizes:['40.5','41','42','42.5','43','44','45'],weightRange:[55,105],expert:88,community:92,deal:69,athlete:'Données de démonstration',reviews:['Version actuelle','Confort très consensuel','Plus moderne sous le pied'],offers:[['Brooks',135],['i-Run',139]]},
  {id:3,family:'ghost',brand:'BROOKS',name:'Ghost 16',generation:'N−1',terrain:['route','mixte'],levels:['debutant','occasionnel','regulier'],uses:['daily','long'],drop:12,cushion:'high',foam:'balanced',carbon:false,launch:150,avg90:116,best:88,price:91,shop:'Alltricks',sizes:['40.5','41','42','42.5','43','44','45'],weightRange:[55,105],expert:84,community:91,deal:90,athlete:'Pas de référence élite retenue',reviews:['Confort très consensuel','Bonne durabilité','Moins orientée vitesse'],offers:[['Alltricks',91],['i-Run',99],['Running Point',102]],compare:{current:'Ghost 17',currentPrice:135,fitDelta:3,verdict:'N−1 recommandée si confort prioritaire',reason:'La nouvelle version affine le comportement, mais la N−1 conserve l’essentiel du confort pour nettement moins cher.',changes:[['Drop','12 mm','10 mm','N plus modérée'],['Amorti','Confortable','plus moderne','Petit gain N'],['Durabilité','Très bonne','Très bonne','Identique'],['Usage','Daily trainer','Daily trainer','Identique']]}},

  {id:13,family:'speed',brand:'SAUCONY',name:'Endorphin Speed 5',generation:'N',terrain:['route'],levels:['regulier','competition'],uses:['tempo','race','daily'],drop:8,cushion:'high',foam:'bouncy',carbon:false,launch:200,avg90:189,best:169,price:175,shop:'Saucony',sizes:['41','42','42.5','43','44','44.5'],weightRange:[50,90],expert:96,community:93,deal:63,athlete:'Données de démonstration',reviews:['Version actuelle','Rapide et polyvalente','Prix encore élevé'],offers:[['Saucony',175],['i-Run',179]]},
  {id:4,family:'speed',brand:'SAUCONY',name:'Endorphin Speed 4',generation:'N−1',terrain:['route'],levels:['regulier','competition'],uses:['tempo','race','daily'],drop:8,cushion:'high',foam:'bouncy',carbon:false,launch:190,avg90:151,best:119,price:124,shop:'i-Run',sizes:['41','42','42.5','43','44','44.5'],weightRange:[50,90],expert:94,community:92,deal:92,athlete:'Utilisée surtout comme chaussure tempo/compétition amateur',reviews:['Très polyvalente à allure soutenue','Plaque nylon, sensation vive','Peut remplacer deux paires'],offers:[['i-Run',124],['Top4Running',129],['Alltricks',135]],compare:{current:'Endorphin Speed 5',currentPrice:175,fitDelta:2,verdict:'N−1 très intéressante',reason:'Très peu de perte dans le score de profil pour plus de 50 € d’économie dans cet exemple.',changes:[['Poids','léger','un peu plus léger','Petit gain N'],['Mousse','très dynamique','optimisée','Écart faible'],['Plaque','nylon','nylon','Identique'],['Drop','8 mm','8 mm','Identique']]}},

  {id:14,family:'adiospro',brand:'ADIDAS',name:'Adizero Adios Pro 4',generation:'N',terrain:['route'],levels:['competition','regulier'],uses:['race','tempo'],drop:6,cushion:'high',foam:'bouncy',carbon:true,launch:250,avg90:229,best:199,price:209,shop:'Adidas',sizes:['41','42','42.5','43','44'],weightRange:[50,88],expert:98,community:92,deal:65,athlete:'Modèle compétition — données élite futures',reviews:['Version actuelle de compétition','Très haut rendement','Prix élevé'],offers:[['Adidas',209],['Top4Running',215]]},
  {id:5,family:'adiospro',brand:'ADIDAS',name:'Adizero Adios Pro 3',generation:'N−1',terrain:['route'],levels:['competition','regulier'],uses:['race','tempo'],drop:6.5,cushion:'high',foam:'bouncy',carbon:true,launch:250,avg90:181,best:139,price:145,shop:'Top4Running',sizes:['41','42','42.5','43','44'],weightRange:[50,88],expert:96,community:90,deal:95,athlete:'Modèle de compétition — performances élite disponibles dans la future base',reviews:['Très haut rendement','Pensée marathon / semi','Moins pertinente en footing lent'],offers:[['Top4Running',145],['Running Point',154],['Adidas',175]],compare:{current:'Adios Pro 4',currentPrice:209,fitDelta:3,verdict:'N−1 très compétitive',reason:'L’ancienne version reste une vraie chaussure de course ; le gain de la N doit être mis en regard d’un surcoût élevé.',changes:[['Poids','très léger','plus léger','Gain N'],['Géométrie','agressive','optimisée','N plus moderne'],['Plaque/tiges','carbone','carbone','Même philosophie'],['Usage','semi/marathon','semi/marathon','Identique']]}},

  {id:15,family:'pegasus',brand:'NIKE',name:'Pegasus 42',generation:'N',terrain:['route','mixte'],levels:['debutant','occasionnel','regulier'],uses:['daily','long'],drop:10,cushion:'moderate',foam:'balanced',carbon:false,launch:145,avg90:139,best:124,price:129,shop:'Nike',sizes:['40','40.5','41','42','42.5','43','44','45','46'],weightRange:[50,100],expert:86,community:90,deal:68,athlete:'Données de démonstration',reviews:['Version actuelle','Polyvalente','Large public'],offers:[['Nike',129],['i-Run',134]]},
  {id:6,family:'pegasus',brand:'NIKE',name:'Pegasus 41',generation:'N−1',terrain:['route','mixte'],levels:['debutant','occasionnel','regulier'],uses:['daily','long'],drop:10,cushion:'moderate',foam:'balanced',carbon:false,launch:140,avg90:111,best:79,price:84,shop:'Nike',sizes:['40','40.5','41','42','42.5','43','44','45','46'],weightRange:[50,100],expert:83,community:89,deal:93,athlete:'Pas de référence élite retenue',reviews:['Polyvalente et simple','Bonne disponibilité de tailles','Amorti moins maximaliste'],offers:[['Nike',84],['Alltricks',89],['i-Run',94]],compare:{current:'Pegasus 42',currentPrice:129,fitDelta:2,verdict:'N−1 recommandée pour économiser',reason:'La philosophie reste très proche : pour un usage quotidien, la différence de prix pèse davantage que le petit gain technique.',changes:[['Drop','10 mm','10 mm','Identique'],['Amorti','modéré','modéré+','Petit gain N'],['Polyvalence','Très bonne','Très bonne','Identique'],['Prix','84 €','129 €','45 € d’écart']]}},

  {id:7,family:'speedgoat',brand:'HOKA',name:'Speedgoat 6',generation:'N',terrain:['trail'],levels:['occasionnel','regulier','competition'],uses:['daily','long','race'],drop:5,cushion:'max',foam:'balanced',carbon:false,launch:160,avg90:146,best:118,price:124,shop:'Alltricks',sizes:['41','42','42.5','43','44','44.5','45'],weightRange:[55,100],expert:91,community:92,deal:84,athlete:'Performances trail à sourcer dans la future base',reviews:['Très bonne accroche','Confort longue distance','Profil trail polyvalent'],offers:[['Alltricks',124],['i-Run',132],['Hardloop',139]]},
  {id:8,family:'trabuco',brand:'ASICS',name:'Gel-Trabuco 12',generation:'N−1',terrain:['trail','mixte'],levels:['debutant','occasionnel','regulier'],uses:['daily','long'],drop:8,cushion:'high',foam:'balanced',carbon:false,launch:160,avg90:119,best:87,price:92,shop:'i-Run',sizes:['40','41','42','42.5','43','44','45'],weightRange:[55,110],expert:87,community:90,deal:95,athlete:'Pas de référence élite retenue',reviews:['Stable et protectrice','Bon choix trail loisir','Poids supérieur aux modèles compétition'],offers:[['i-Run',92],['Alltricks',98],['Hardloop',105]],compare:{current:'Gel-Trabuco 13',currentPrice:150,fitDelta:4,verdict:'N−1 = bon plan trail',reason:'Le modèle précédent reste protecteur et stable ; la nouvelle génération apporte surtout des optimisations.',changes:[['Protection','Élevée','Élevée','Identique'],['Poids','plus lourd','allégé','Gain N'],['Accroche','Très bonne','Très bonne','Écart faible'],['Drop','8 mm','8 mm','Identique']]}},

  {id:16,family:'deviate',brand:'PUMA',name:'Deviate Nitro 3',generation:'N',terrain:['route'],levels:['regulier','competition'],uses:['tempo','race','daily'],drop:10,cushion:'high',foam:'bouncy',carbon:true,launch:180,avg90:164,best:145,price:149,shop:'Puma',sizes:['41','42','42.5','43','44'],weightRange:[50,95],expert:93,community:90,deal:73,athlete:'Données de démonstration',reviews:['Version actuelle','Dynamique','Polyvalente malgré la plaque'],offers:[['Puma',149],['Top4Running',155]]},
  {id:9,family:'deviate',brand:'PUMA',name:'Deviate Nitro 2',generation:'N−1',terrain:['route'],levels:['regulier','competition'],uses:['tempo','race','daily'],drop:8,cushion:'high',foam:'bouncy',carbon:true,launch:170,avg90:112,best:79,price:85,shop:'Top4Running',sizes:['41','42','42.5','43','44'],weightRange:[50,95],expert:90,community:88,deal:98,athlete:'Ancienne génération encore très compétitive',reviews:['Excellent rapport performance/prix','Polyvalente malgré la plaque','Très intéressante en ancienne génération'],offers:[['Top4Running',85],['Running Point',92],['i-Run',99]],compare:{current:'Deviate Nitro 3',currentPrice:149,fitDelta:4,verdict:'N−1 = affaire forte',reason:'Le prix chute beaucoup plus vite que la pertinence technique dans ce scénario de démonstration.',changes:[['Drop','8 mm','10 mm','Sensation différente'],['Mousse','très rebondissante','optimisée','Gain N'],['Plaque','carbone','carbone','Identique'],['Prix','85 €','149 €','64 € d’écart']]}}
];

const state = {rank:'balanced', generations:new Set(['N','N−1','N−2','N−3']), history:[], referenceShoeId:null, strava:{connected:false,configured:null,athlete:null,shoes:[]}};
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

function getFilters(){return {
  terrain:$('#terrain').value, level:$('#level').value, weight:+$('#weight').value||72, size:$('#size').value,
  maxPrice:+$('#maxPrice').value||999, drop:$('#drop').value, cushion:$('#cushion').value, foam:$('#foam').value,
  carbon:$('#carbon').value, usage:$('#usage').value
}}

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
  const [minW,maxW]=shoe.weightRange; add(f.weight>=minW&&f.weight<=maxW?1:.65,10);
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

function scoreFit(shoe,f){
  return clamp(baseScoreFit(shoe,f)+historyAdjustment(shoe),0,100);
}
function finalScore(shoe,fit,reference=null){
  if(reference){
    const similarity=shoe.similarity ?? similarityScore(reference,shoe);
    if(state.rank==='deal') return Math.round(shoe.deal*.62 + referenceSavingsScore(reference,shoe)*.38);
    if(state.rank==='fit') return Math.round(fit*.55 + similarity*.45);
    return Math.round(similarity*.50 + fit*.25 + shoe.deal*.15 + referenceSavingsScore(reference,shoe)*.10);
  }
  if(state.rank==='deal') return shoe.deal;
  if(state.rank==='fit') return fit;
  return Math.round(fit*.58 + shoe.deal*.42);
}
function labelCushion(v){return {moderate:'Amorti modéré',high:'Amorti important',max:'Amorti maximal'}[v]}
function labelFoam(v){return {soft:'Souple',balanced:'Équilibrée',firm:'Ferme',bouncy:'Très rebondissante'}[v]}
function generationClass(g){return g==='N'?'current':'old'}
function refPriceLabel(shoe){return shoe.referencePriceType==='observed'?'Prix barré constaté':shoe.referencePriceType==='launch'?'Prix de lancement':'Prix de référence'}
function sourceBadge(shoe){return shoe.isReal?'<span class="real-data-badge">● DONNÉE RÉELLE</span>':'<span class="snapshot-badge">DÉMO</span>'}
function sizeMatches(shoe,size){return !shoe.sizes || shoe.sizes.length===0 || shoe.sizes.includes('*') || shoe.sizes.includes(size)}
function generationSummary(){
  const order=['N','N−1','N−2','N−3'];
  return order.filter(x=>state.generations.has(x)).join(' / ');
}
function clamp(n,min,max){return Math.max(min,Math.min(max,n))}

function selectedReferenceShoe(){
  return state.referenceShoeId==null ? null : shoes.find(s=>String(s.id)===String(state.referenceShoeId)) || null;
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
function populateReferenceModels(){
  const select=$('#referenceShoe');
  if(!select) return;
  const current=state.referenceShoeId==null?'':String(state.referenceShoeId);
  const sorted=shoes.slice().sort((a,b)=>a.brand.localeCompare(b.brand)||a.family.localeCompare(b.family)||a.name.localeCompare(b.name));
  const options=sorted.map(s=>`<option value="${s.id}">${escapeHtml(s.brand)} · ${escapeHtml(s.name)} (${s.generation}) · ${Number(s.price).toLocaleString('fr-FR')} €${s.isReal?' · réel':''}</option>`).join('');
  select.innerHTML=`<option value="">Je n’ai pas de modèle précis en tête</option>${options}`;
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
  box.innerHTML=`<div><span>MODÈLE QUE TU AVAIS EN TÊTE</span><strong>${escapeHtml(ref.brand)} ${escapeHtml(ref.name)}</strong><small>${ref.generation} · ${labelCushion(ref.cushion)} · ${labelFoam(ref.foam)} · drop ${ref.drop} mm · ${ref.carbon?'carbone':'sans carbone'}</small></div><div class="reference-price"><span>Prix actuellement connu</span><strong>${Number(ref.price).toLocaleString('fr-FR')} €</strong><small>${ref.isReal?'donnée réelle':'donnée de démonstration'}</small></div><div class="reference-arrow">→</div><div class="reference-goal"><span>OBJECTIF</span><strong>Trouver le même esprit moins cher</strong><small>Les résultats doivent coûter moins de ${Number(ref.price).toLocaleString('fr-FR')} € et conserver au moins 50 % de similarité technique.</small></div>`;
}

const feedbackLabels={tooRigid:'Trop rigide',tooSoft:'Trop mou',tooHigh:'Trop haut',tooLow:'Trop bas',notReactive:'Pas assez réactif',tooReactive:'Trop exigeant / réactif',unstable:'Pas assez stable',comfortable:'Très confortable'};
const useLabels={daily:'Entraînement',long:'Sortie longue',tempo:'Séances rapides',race:'Compétition'};
const sentimentLabels={liked:'Aimée',mixed:'Mitigé',disliked:'Pas aimée'};

function populateHistoryShoes(){
  const select=$('#historyShoe');
  const mine=usedShoeCatalog.map(s=>`<option value="${s.id}">${s.displayName} · ${formatKm(s.distanceKm)}</option>`).join('');
  const catalog=shoes.slice().sort((a,b)=>a.brand.localeCompare(b.brand)||a.name.localeCompare(b.name)).map(s=>`<option value="catalog-${s.id}">${s.brand} · ${s.name} (${s.generation})</option>`).join('');
  select.innerHTML=`<optgroup label="Mes chaussures déjà utilisées">${mine}</optgroup><optgroup label="Catalogue RunDeal (démo)">${catalog}</optgroup><option value="custom">Autre modèle non référencé…</option>`;
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
    : '<div class="strava-shoe"><div><strong>Aucune chaussure trouvée</strong><small>Ajoute ou nomme tes chaussures dans Strava puis reconnecte RunDeal.</small></div></div>';
}

function escapeHtml(value){
  return String(value??'').replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
}

function stravaRedirectMessage(){
  const status=new URLSearchParams(location.search).get('strava');
  const notice=$('#stravaNotice');
  if(!status || !notice) return;
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
    notice.textContent='Impossible de joindre l’import Strava pour le moment. Le reste de RunDeal continue à fonctionner.';
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
  $$('.history-remove').forEach(btn=>btn.addEventListener('click',()=>{state.history=state.history.filter(h=>String(h.id)!==btn.dataset.historyId);renderHistory();render();}));
}

function renderGenerationSpotlight(rows,f){
  const target=rows.find(s=>s.generation!=='N' && s.compare);
  const box=$('#generationSpotlight');
  if(!target){
    box.innerHTML=`<div class="generation-copy"><span class="badge">Aucune ancienne génération affichée</span><h3>Active N−1, N−2 ou N−3 dans les filtres.</h3><p>Le comparateur montrera ici le meilleur ancien modèle disponible face à sa génération actuelle.</p></div>`;
    return;
  }
  const currentFit=clamp(target.fit + target.compare.fitDelta,0,100);
  const saving=target.compare.currentPrice-target.price;
  box.innerHTML=`
    <div class="generation-copy">
      <span class="generation-hero-badge">ANCIENNE GÉNÉRATION ${target.generation}</span>
      <h3>${target.name} vs ${target.compare.current}</h3>
      <p>${target.compare.reason}</p>
      <div class="generation-verdict"><strong>${target.compare.verdict}</strong><span>${saving} € économisés · Fit ${target.fit}/100 contre environ ${currentFit}/100 pour N</span></div>
    </div>
    <div class="generation-table-wrap">
      <table class="diff-table">
        <thead><tr><th>Critère</th><th>${target.generation} · ${target.name}</th><th>N · ${target.compare.current}</th><th>Différence</th></tr></thead>
        <tbody>${target.compare.changes.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td><span class="diff-pill">${r[3]}</span></td></tr>`).join('')}
          <tr class="price-diff-row"><td>Prix actuel</td><td><strong>${target.price} €</strong></td><td>${target.compare.currentPrice} €</td><td><span class="saving-pill">−${saving} €</span></td></tr>
        </tbody>
      </table>
    </div>`;
}

function render(){
  const f=getFilters();
  const reference=selectedReferenceShoe();
  let rows=shoes.map(shoe=>({...shoe,fit:scoreFit(shoe,f),similarity:reference?similarityScore(reference,shoe):null,savingVsReference:reference?referenceSavings(reference,shoe):null}))
    .filter(shoe=>state.generations.has(shoe.generation) && shoe.price<=f.maxPrice && sizeMatches(shoe,f.size) && shoe.fit>=52)
    .filter(shoe=>!reference || (String(shoe.id)!==String(reference.id) && shoe.price<reference.price && shoe.similarity>=50))
    .sort((a,b)=>finalScore(b,b.fit,reference)-finalScore(a,a.fit,reference));
  $('#resultCount').textContent=rows.length;
  if(reference){
    $('#summaryText').textContent=`Alternatives à ${reference.brand} ${reference.name} · moins de ${reference.price} € · similarité ≥ 50 % · pointure ${f.size} · générations ${generationSummary()}${state.history.length?` · personnalisé avec ${state.history.length} retour${state.history.length>1?'s':''}`:''}`;
  }else{
    $('#summaryText').textContent=`Pointure ${f.size} · budget ≤ ${f.maxPrice} € · générations ${generationSummary()} · ${state.rank==='balanced'?'équilibre profil/prix':state.rank==='deal'?'meilleures affaires':'compatibilité'}${state.history.length?` · personnalisé avec ${state.history.length} retour${state.history.length>1?'s':''}`:''}`;
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
    const score=finalScore(shoe,shoe.fit,reference); const discount=Math.round((1-shoe.price/shoe.launch)*100);
    const isOld=shoe.generation!=='N';
    const saving=shoe.compare ? shoe.compare.currentPrice-shoe.price : 0;
    const fitGap=shoe.compare ? shoe.compare.fitDelta : 0;
    const historyDelta=historyAdjustment(shoe);
    const refReasons=reference?referenceReasons(reference,shoe):[];
    return `<article class="shoe-card ${isOld?'old-generation-card':'current-generation-card'} ${reference?'reference-result-card':''}">
      <div class="generation-ribbon ${generationClass(shoe.generation)}">${isOld?'ANCIENNE GÉNÉRATION':'GÉNÉRATION ACTUELLE'} · ${shoe.generation}</div>
      <div class="shoe-top"><div><div class="shoe-brand">${shoe.brand}</div><div class="shoe-name">${shoe.name}</div><div class="source-line">${sourceBadge(shoe)}${shoe.checkedAt?`<span class="snapshot-badge">vérifié ${new Date(shoe.checkedAt).toLocaleDateString('fr-FR')}</span>`:''}</div><div class="shoe-gen">${isOld && shoe.compare ? `Face à ${shoe.compare.current}` : 'Version actuelle'}${i===0?' · recommandée':''}</div></div><div class="score-bubble"><strong>${score}</strong><span>/100</span></div></div>
      <div class="shoe-visual"><div class="mini-shoe">${shoe.brand}</div><span class="deal-pill">−${discount}% vs ${shoe.referencePriceType==='observed'?'prix constaté':'lancement'}</span></div>
      ${reference?`<div class="same-spirit-highlight"><div><span>MÊME ESPRIT</span><strong>${shoe.similarity}% similaire à ${reference.name}</strong><small>${refReasons.join(' · ')||'profil technique proche'}</small></div><b>−${Number(shoe.savingVsReference).toLocaleString('fr-FR')} €</b></div>`:''}
      ${isOld && shoe.compare ? `<div class="old-gen-highlight"><strong>${saving} € moins chère que N</strong><span>≈ ${fitGap} pt${fitGap>1?'s':''} de Fit en moins dans cette démo</span></div>` : '<div class="current-gen-note">Référence technique actuelle de la famille</div>'}
      ${state.history.length?`<div class="personalized-note ${historyDelta<0?'negative':''}"><strong>🧠 Ton historique ${historyDelta>0?'favorise':historyDelta<0?'pénalise':'confirme'} cette paire</strong><span class="history-delta">${historyDelta>0?'+':''}${historyDelta} pt${Math.abs(historyDelta)>1?'s':''}</span></div>`:''}
      <div class="tags"><span class="tag">Drop ${shoe.drop} mm</span><span class="tag">${labelCushion(shoe.cushion)}</span><span class="tag">${shoe.carbon?'Carbone':'Sans carbone'}</span></div>
      <div class="shoe-pricing"><div class="price-block"><span class="old-price">${refPriceLabel(shoe)} ${shoe.launch} €</span><span class="current-price">${shoe.price} €</span><span class="shop">chez ${shoe.shop} · ${shoe.sizeStockKnown===false?'taille à vérifier':`pointure ${f.size}`}</span></div><span class="badge ${shoe.deal>=94?'badge-green':''}">${shoe.deal>=94?'🔥 Excellent deal':'Bon prix'}</span></div>
      <div class="two-scores">${reference?`<div class="metric"><span>Similarité</span><strong>${shoe.similarity}/100</strong></div>`:`<div class="metric"><span class="history-fit-label">Compatibilité${state.history.length?'<em>personnalisée</em>':''}</span><strong>${shoe.fit}/100</strong></div>`}<div class="metric"><span>Deal Score</span><strong>${shoe.deal}/100</strong></div></div>
      <div class="card-actions"><button type="button" class="details-btn" data-id="${shoe.id}">${reference?'Comparer au modèle':isOld?'Comparer à N':'Pourquoi ?'}</button><button type="button" class="buy-btn" data-id="${shoe.id}">Voir les prix</button></div>
    </article>`
  }).join('');
  $$('.details-btn,.buy-btn').forEach(btn=>btn.addEventListener('click',()=>openShoe(+btn.dataset.id,f)));
  renderReferencePreview();
  renderGenerationSpotlight(rows,f);
}

function referenceComparisonPanel(s,reference){
  if(!reference || String(reference.id)===String(s.id)) return '';
  const similarity=similarityScore(reference,s);
  const saving=referenceSavings(reference,s);
  const reasons=referenceReasons(reference,s);
  return `<div class="dialog-panel full reference-comparison-panel"><div class="reference-dialog-head"><div><span class="same-spirit-badge">MÊME ESPRIT · ${similarity}%</span><h4>${s.name} face à ${reference.brand} ${reference.name}</h4></div><strong class="reference-dialog-saving">−${Number(saving).toLocaleString('fr-FR')} €</strong></div><p>RunDeal rapproche les deux modèles sur leurs caractéristiques et leur usage, pas seulement sur la marque.</p><div class="reference-reasons">${reasons.map(r=>`<span>✓ ${r}</span>`).join('')}</div><div class="reference-price-line"><span>Modèle envisagé <strong>${reference.price} €</strong></span><span>Alternative <strong>${s.price} €</strong></span></div></div>`;
}
function comparisonPanel(s,fit){
  if(!s.compare) return `<div class="dialog-panel full"><h4>Génération actuelle</h4><p>Cette paire sert de référence N pour comparer les anciennes versions de la même famille.</p></div>`;
  const currentFit=clamp(fit+s.compare.fitDelta,0,100);
  const saving=s.compare.currentPrice-s.price;
  return `<div class="dialog-panel full comparison-panel"><div class="comparison-head"><div><span class="generation-hero-badge">${s.generation} VS N</span><h4>${s.name} face à ${s.compare.current}</h4></div><strong class="comparison-saving">−${saving} €</strong></div>
    <p>${s.compare.reason}</p>
    <div class="compact-diff-grid">${s.compare.changes.map(r=>`<div><span>${r[0]}</span><strong>${r[1]} → ${r[2]}</strong><small>${r[3]}</small></div>`).join('')}</div>
    <div class="dialog-verdict"><strong>${s.compare.verdict}</strong><span>Fit actuel ${fit}/100 · estimation N ${currentFit}/100 · économie ${saving} €</span></div></div>`;
}

function openShoe(id,f){
  const s=shoes.find(x=>x.id===id); const fit=scoreFit(s,f); const saving=s.launch-s.price; const reference=selectedReferenceShoe();
  $('#dialogContent').innerHTML=`<div class="dialog-body">
    <div class="dialog-head"><div><div class="shoe-brand">${s.brand}</div><h2>${s.name}</h2><div class="source-line">${sourceBadge(s)}${s.sourceUrl?`<a href="${s.sourceUrl}" target="_blank" rel="noopener noreferrer">Source ↗</a>`:''}</div><div class="tags"><span class="tag">${s.generation}</span><span class="tag">Fit ${fit}/100</span><span class="tag">Deal ${s.deal}/100</span></div></div><div class="dialog-price">${s.price} €</div></div>
    <div class="dialog-grid">
      ${referenceComparisonPanel(s,reference)}
      ${comparisonPanel(s,fit)}
      <div class="dialog-panel"><h4>Pourquoi elle ressort</h4><ul>${s.reviews.map(x=>`<li>${x}</li>`).join('')}</ul><p><strong>${saving} € économisés</strong> par rapport au ${refPriceLabel(s).toLowerCase()} de ${s.launch} €.</p></div>
      <div class="dialog-panel"><h4>Prix pointure ${f.size}</h4>${s.offers.map((o,i)=>`<div class="offer-row"><span>${o[0]}${i===0?' 🥇':''}</span><strong>${o[1]} €</strong></div>`).join('')}<div class="affiliate-note">${s.isReal?'Prix issu d’une observation publique ou d’un flux marchand. Vérifie le stock final avant achat.':'Donnée de démonstration.'} Les futurs liens affiliés seront signalés sans influencer le classement.</div></div>
      ${state.history.length?`<div class="dialog-panel"><h4>🧠 Personnalisation</h4><p>Ton historique modifie le Fit de <strong>${historyAdjustment(s)>0?'+':''}${historyAdjustment(s)} point${Math.abs(historyAdjustment(s))>1?'s':''}</strong> : score théorique ${baseScoreFit(s,f)}/100 → score personnalisé ${fit}/100.</p><p>${historyLearningText()}</p></div>`:''}
      <div class="dialog-panel"><h4>Profil technique</h4><p>Drop ${s.drop} mm · ${labelCushion(s.cushion)} · mousse ${labelFoam(s.foam).toLowerCase()} · ${s.carbon?'plaque carbone':'sans plaque carbone'}.</p></div>
      <div class="dialog-panel"><h4>Preuves & communauté</h4><p>Score expert démo : ${s.expert}/100 · communauté démo : ${s.community}/100.</p><p>${s.athlete}.</p></div>
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
      const byId=new Map(shoes.map(s=>[String(s.id),s]));
      incoming.forEach(s=>byId.set(String(s.id),s));
      shoes=[...byId.values()];
      populateHistoryShoes();
      populateReferenceModels();
      render();
    }
    const realCount=shoes.filter(s=>s.isReal).length;
    const source=payload.source==='supabase'?'Supabase':'snapshot local vérifié';
    note.textContent=`API active · ${realCount} modèle${realCount>1?'s':''} réel${realCount>1?'s':''} · source ${source}`;
    status.textContent=`connectée · ${source}`;
  }catch(err){
    note.textContent='API indisponible · utilisation de la maquette locale';
    status.textContent='hors ligne · fallback local';
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


if($('#referenceShoe')) $('#referenceShoe').addEventListener('change',()=>{
  state.referenceShoeId=$('#referenceShoe').value || null;
  render();
  if(state.referenceShoeId) $('#results').scrollIntoView({behavior:'smooth',block:'start'});
});
if($('#clearReferenceBtn')) $('#clearReferenceBtn').addEventListener('click',()=>{
  state.referenceShoeId=null;
  $('#referenceShoe').value='';
  render();
});
if($('#stravaDisconnectBtn')) $('#stravaDisconnectBtn').addEventListener('click',disconnectStrava);
if($('#openManualFeedbackFromStrava')) $('#openManualFeedbackFromStrava').addEventListener('click',openManualFeedbackFromStrava);
populateHistoryShoes();
populateReferenceModels();
renderImportedShoes();
syncHistoryDistance();
renderHistory();
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
    id:Date.now()+Math.random(),
    shoeId:catalogMatch?catalogMatch.id:null,
    usedShoeId:used?used.id:null,
    name:used?used.displayName:catalogMatch?`${catalogMatch.brand} ${catalogMatch.name}`:custom,
    canonical:used?used.canonical:null,
    distanceKm:Number($('#historyDistance').value)||null,
    sentiment:$('#historySentiment').value,
    feedback:selectedHistoryValues('#feedbackChips .feedback-chip','feedback'),
    uses:selectedHistoryValues('#historyUseChips .feedback-chip','use'),
    consent:$('#communityConsent').checked,
    level:f.level, weightBand:`${bandLow}–${bandLow+9}`
  };
  state.history.push(entry);
  if(entry.consent){
    const result=await submitCommunityFeedback(entry);
    entry.remoteStored=Boolean(result&&result.stored);
  }
  resetHistoryForm();
  $('#historyForm').classList.add('hidden');
  $('#toggleHistoryForm').textContent='+ Ajouter une chaussure';
  renderHistory(); render();
});

$$('[data-segment="terrain"] .seg').forEach(btn=>btn.addEventListener('click',()=>{
  $$('[data-segment="terrain"] .seg').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); $('#terrain').value=btn.dataset.value; render();
}));
$$('#usageChips .chip').forEach(btn=>btn.addEventListener('click',()=>{
  $$('#usageChips .chip').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); $('#usage').value=btn.dataset.value; render();
}));
$$('#generationChips .generation-chip').forEach(btn=>btn.addEventListener('click',()=>{
  const g=btn.dataset.generation;
  if(state.generations.has(g) && state.generations.size===1) return;
  if(state.generations.has(g)) state.generations.delete(g); else state.generations.add(g);
  btn.classList.toggle('active',state.generations.has(g));
  $('#oldOnlyBtn').classList.toggle('active',!state.generations.has('N') && state.generations.size===3);
  render();
}));
$('#oldOnlyBtn').addEventListener('click',()=>{
  const oldOnly=!state.generations.has('N') && ['N−1','N−2','N−3'].every(g=>state.generations.has(g));
  state.generations=new Set(oldOnly?['N','N−1','N−2','N−3']:['N−1','N−2','N−3']);
  $$('#generationChips .generation-chip').forEach(btn=>btn.classList.toggle('active',state.generations.has(btn.dataset.generation)));
  $('#oldOnlyBtn').classList.toggle('active',!oldOnly);
  render();
});
$$('#filtersForm select,#filtersForm input').forEach(el=>el.addEventListener('input',render));
$$('.rank-tab').forEach(btn=>btn.addEventListener('click',()=>{ $$('.rank-tab').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); state.rank=btn.dataset.rank; render(); }));
$('#resetBtn').addEventListener('click',()=>{location.reload()});
$('#dialogClose').addEventListener('click',()=>$('#shoeDialog').close());
$('#shoeDialog').addEventListener('click',e=>{if(e.target===$('#shoeDialog')) $('#shoeDialog').close()});
render();
loadApiCatalog();
loadStravaPrivate().then(stravaRedirectMessage);
