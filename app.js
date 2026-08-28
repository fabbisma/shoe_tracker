const shoes = [
  {id:1,brand:'ASICS',name:'Novablast 5',generation:'N−1',terrain:['route','mixte'],levels:['occasionnel','regulier','competition'],uses:['daily','long','tempo'],drop:8,cushion:'high',foam:'bouncy',carbon:false,launch:150,avg90:124,best:96,price:98,shop:'i-Run',sizes:['41','42','42.5','43','44','44.5'],weightRange:[55,95],expert:91,community:88,deal:94,athlete:'Pas de référence élite retenue',reviews:['Amorti polyvalent','Mousse dynamique','Très bon choix quotidien'],offers:[['i-Run',98],['Alltricks',104],['Top4Running',109]]},
  {id:2,brand:'ASICS',name:'Novablast 4',generation:'N−2',terrain:['route','mixte'],levels:['debutant','occasionnel','regulier'],uses:['daily','long'],drop:8,cushion:'high',foam:'balanced',carbon:false,launch:150,avg90:101,best:79,price:82,shop:'Top4Running',sizes:['40','41','42','42.5','43','44'],weightRange:[55,90],expert:86,community:87,deal:97,athlete:'Pas de référence élite retenue',reviews:['Très bon rapport qualité/prix','Stable pour un daily trainer','Moins vive que la génération suivante'],offers:[['Top4Running',82],['Running Point',86],['i-Run',92]]},
  {id:3,brand:'BROOKS',name:'Ghost 16',generation:'N−1',terrain:['route','mixte'],levels:['debutant','occasionnel','regulier'],uses:['daily','long'],drop:12,cushion:'high',foam:'balanced',carbon:false,launch:150,avg90:116,best:88,price:91,shop:'Alltricks',sizes:['40.5','41','42','42.5','43','44','45'],weightRange:[55,105],expert:84,community:91,deal:90,athlete:'Pas de référence élite retenue',reviews:['Confort très consensuel','Bonne durabilité','Moins orientée vitesse'],offers:[['Alltricks',91],['i-Run',99],['Running Point',102]]},
  {id:4,brand:'SAUCONY',name:'Endorphin Speed 4',generation:'N−1',terrain:['route'],levels:['regulier','competition'],uses:['tempo','race','daily'],drop:8,cushion:'high',foam:'bouncy',carbon:false,launch:190,avg90:151,best:119,price:124,shop:'i-Run',sizes:['41','42','42.5','43','44','44.5'],weightRange:[50,90],expert:94,community:92,deal:92,athlete:'Utilisée surtout comme chaussure tempo/compétition amateur',reviews:['Très polyvalente à allure soutenue','Plaque nylon, sensation vive','Peut remplacer deux paires'],offers:[['i-Run',124],['Top4Running',129],['Alltricks',135]]},
  {id:5,brand:'ADIDAS',name:'Adizero Adios Pro 3',generation:'N−2',terrain:['route'],levels:['competition','regulier'],uses:['race','tempo'],drop:6.5,cushion:'high',foam:'bouncy',carbon:true,launch:250,avg90:181,best:139,price:145,shop:'Top4Running',sizes:['41','42','42.5','43','44'],weightRange:[50,88],expert:96,community:90,deal:95,athlete:'Modèle de compétition — performances élite disponibles dans la future base',reviews:['Très haut rendement','Pensée marathon / semi','Moins pertinente en footing lent'],offers:[['Top4Running',145],['Running Point',154],['Adidas',175]]},
  {id:6,brand:'NIKE',name:'Pegasus 41',generation:'N−1',terrain:['route','mixte'],levels:['debutant','occasionnel','regulier'],uses:['daily','long'],drop:10,cushion:'moderate',foam:'balanced',carbon:false,launch:140,avg90:111,best:79,price:84,shop:'Nike',sizes:['40','40.5','41','42','42.5','43','44','45','46'],weightRange:[50,100],expert:83,community:89,deal:93,athlete:'Pas de référence élite retenue',reviews:['Polyvalente et simple','Bonne disponibilité de tailles','Amorti moins maximaliste'],offers:[['Nike',84],['Alltricks',89],['i-Run',94]]},
  {id:7,brand:'HOKA',name:'Speedgoat 6',generation:'N',terrain:['trail'],levels:['occasionnel','regulier','competition'],uses:['daily','long','race'],drop:5,cushion:'max',foam:'balanced',carbon:false,launch:160,avg90:146,best:118,price:124,shop:'Alltricks',sizes:['41','42','42.5','43','44','44.5','45'],weightRange:[55,100],expert:91,community:92,deal:84,athlete:'Performances trail à sourcer dans la future base',reviews:['Très bonne accroche','Confort longue distance','Profil trail polyvalent'],offers:[['Alltricks',124],['i-Run',132],['Hardloop',139]]},
  {id:8,brand:'ASICS',name:'Gel-Trabuco 12',generation:'N−1',terrain:['trail','mixte'],levels:['debutant','occasionnel','regulier'],uses:['daily','long'],drop:8,cushion:'high',foam:'balanced',carbon:false,launch:160,avg90:119,best:87,price:92,shop:'i-Run',sizes:['40','41','42','42.5','43','44','45'],weightRange:[55,110],expert:87,community:90,deal:95,athlete:'Pas de référence élite retenue',reviews:['Stable et protectrice','Bon choix trail loisir','Poids supérieur aux modèles compétition'],offers:[['i-Run',92],['Alltricks',98],['Hardloop',105]]},
  {id:9,brand:'PUMA',name:'Deviate Nitro 2',generation:'N−2',terrain:['route'],levels:['regulier','competition'],uses:['tempo','race','daily'],drop:8,cushion:'high',foam:'bouncy',carbon:true,launch:170,avg90:112,best:79,price:85,shop:'Top4Running',sizes:['41','42','42.5','43','44'],weightRange:[50,95],expert:90,community:88,deal:98,athlete:'Ancienne génération encore très compétitive',reviews:['Excellent rapport performance/prix','Polyvalente malgré la plaque','Très intéressante en N−2'],offers:[['Top4Running',85],['Running Point',92],['i-Run',99]]}
];

const state = {rank:'balanced'};
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

function scoreFit(shoe,f){
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

function finalScore(shoe,fit){
  if(state.rank==='deal') return shoe.deal;
  if(state.rank==='fit') return fit;
  return Math.round(fit*.58 + shoe.deal*.42);
}

function labelCushion(v){return {moderate:'Amorti modéré',high:'Amorti important',max:'Amorti maximal'}[v]}
function labelFoam(v){return {soft:'Souple',balanced:'Équilibrée',firm:'Ferme',bouncy:'Très rebondissante'}[v]}

function render(){
  const f=getFilters();
  let rows=shoes.map(shoe=>({...shoe,fit:scoreFit(shoe,f)}))
    .filter(shoe=>shoe.price<=f.maxPrice && shoe.sizes.includes(f.size) && shoe.fit>=52)
    .sort((a,b)=>finalScore(b,b.fit)-finalScore(a,a.fit));
  $('#resultCount').textContent=rows.length;
  $('#summaryText').textContent=`Pointure ${f.size} · budget ≤ ${f.maxPrice} € · classement : ${state.rank==='balanced'?'équilibre profil/prix':state.rank==='deal'?'meilleures affaires':'compatibilité'}`;
  $('#emptyState').classList.toggle('hidden',rows.length!==0);
  $('#resultsGrid').innerHTML=rows.map((shoe,i)=>{
    const score=finalScore(shoe,shoe.fit); const discount=Math.round((1-shoe.price/shoe.launch)*100);
    return `<article class="shoe-card">
      <div class="shoe-top"><div><div class="shoe-brand">${shoe.brand}</div><div class="shoe-name">${shoe.name}</div><div class="shoe-gen">Génération ${shoe.generation}${i===0?' · recommandée':''}</div></div><div class="score-bubble"><strong>${score}</strong><span>/100</span></div></div>
      <div class="shoe-visual"><div class="mini-shoe">${shoe.brand}</div><span class="deal-pill">−${discount}% vs lancement</span></div>
      <div class="tags"><span class="tag">Drop ${shoe.drop} mm</span><span class="tag">${labelCushion(shoe.cushion)}</span><span class="tag">${shoe.carbon?'Carbone':'Sans carbone'}</span></div>
      <div class="shoe-pricing"><div class="price-block"><span class="old-price">Lancement ${shoe.launch} €</span><span class="current-price">${shoe.price} €</span><span class="shop">chez ${shoe.shop} · pointure ${f.size}</span></div><span class="badge ${shoe.deal>=94?'badge-green':''}">${shoe.deal>=94?'🔥 Excellent deal':'Bon prix'}</span></div>
      <div class="two-scores"><div class="metric"><span>Compatibilité</span><strong>${shoe.fit}/100</strong></div><div class="metric"><span>Deal Score</span><strong>${shoe.deal}/100</strong></div></div>
      <div class="card-actions"><button type="button" class="details-btn" data-id="${shoe.id}">Pourquoi ?</button><button type="button" class="buy-btn" data-id="${shoe.id}">Voir les prix</button></div>
    </article>`
  }).join('');
  $$('.details-btn,.buy-btn').forEach(btn=>btn.addEventListener('click',()=>openShoe(+btn.dataset.id,f)));
}

function openShoe(id,f){
  const s=shoes.find(x=>x.id===id); const fit=scoreFit(s,f); const saving=s.launch-s.price;
  $('#dialogContent').innerHTML=`<div class="dialog-body">
    <div class="dialog-head"><div><div class="shoe-brand">${s.brand}</div><h2>${s.name}</h2><div class="tags"><span class="tag">${s.generation}</span><span class="tag">Fit ${fit}/100</span><span class="tag">Deal ${s.deal}/100</span></div></div><div class="dialog-price">${s.price} €</div></div>
    <div class="dialog-grid">
      <div class="dialog-panel"><h4>Pourquoi elle ressort</h4><ul>${s.reviews.map(x=>`<li>${x}</li>`).join('')}</ul><p><strong>${saving} € économisés</strong> par rapport au prix de lancement fictif de ${s.launch} €.</p></div>
      <div class="dialog-panel"><h4>Prix pointure ${f.size}</h4>${s.offers.map((o,i)=>`<div class="offer-row"><span>${o[0]}${i===0?' 🥇':''}</span><strong>${o[1]} €</strong></div>`).join('')}<div class="affiliate-note">Prototype : les liens d’achat ne sont pas encore actifs. Les futurs liens affiliés seront signalés sans influencer le classement.</div></div>
      <div class="dialog-panel"><h4>Profil technique</h4><p>Drop ${s.drop} mm · ${labelCushion(s.cushion)} · mousse ${labelFoam(s.foam).toLowerCase()} · ${s.carbon?'plaque carbone':'sans plaque carbone'}.</p></div>
      <div class="dialog-panel"><h4>Preuves & communauté</h4><p>Score expert démo : ${s.expert}/100 · communauté démo : ${s.community}/100.</p><p>${s.athlete}.</p></div>
    </div>
  </div>`;
  $('#shoeDialog').showModal();
}

$$('[data-segment="terrain"] .seg').forEach(btn=>btn.addEventListener('click',()=>{
  $$('[data-segment="terrain"] .seg').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); $('#terrain').value=btn.dataset.value; render();
}));
$$('#usageChips .chip').forEach(btn=>btn.addEventListener('click',()=>{
  $$('#usageChips .chip').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); $('#usage').value=btn.dataset.value; render();
}));
$$('#filtersForm select,#filtersForm input').forEach(el=>el.addEventListener('input',render));
$$('.rank-tab').forEach(btn=>btn.addEventListener('click',()=>{ $$('.rank-tab').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); state.rank=btn.dataset.rank; render(); }));
$('#resetBtn').addEventListener('click',()=>{location.reload()});
$('#dialogClose').addEventListener('click',()=>$('#shoeDialog').close());
$('#shoeDialog').addEventListener('click',e=>{if(e.target===$('#shoeDialog')) $('#shoeDialog').close()});
render();
