const SAVE_KEY="sanguo_ni_ming_v01";

const STAT_NAMES={str:"武力",int:"智略",pol:"政治",cha:"魅力",lea:"統率",sur:"生存"};
const STAT_ICONS={str:"⚔️",int:"🧠",pol:"🏯",cha:"🗣️",lea:"👑",sur:"🌲"};
const TAG_NAMES={
  martial:"武藝", scholar:"求知", political:"仕途", social:"人脈", hunter:"獵人",
  leadership:"統率", discipline:"紀律", compassion:"仁心", ambition:"野心",
  cunning:"機智", family:"家族", risk:"冒險", survival:"求生", archery:"弓術"
};

const backgrounds=[
 {name:"獵戶之子",desc:"熟悉山林與弓箭。",stats:{sur:8,str:2},tags:{hunter:12,archery:8,survival:8}},
 {name:"寒門書生",desc:"家貧，但自幼接觸經史。",stats:{int:8,pol:4},tags:{scholar:12,discipline:5}},
 {name:"鄉勇之子",desc:"家中與地方武裝關係密切。",stats:{str:4,lea:4},tags:{martial:10,leadership:8,discipline:5}},
 {name:"商人之子",desc:"從小聽見各地消息。",stats:{cha:6,pol:6},tags:{social:10,political:10,cunning:5}},
 {name:"士族旁支",desc:"有一些人脈，但家族並不顯赫。",stats:{cha:5,pol:7},tags:{political:12,social:8,family:5}},
 {name:"流民孤兒",desc:"沒有靠山，卻比任何人更懂得活下去。",stats:{sur:10,cha:2},tags:{survival:14,risk:7,cunning:5}}
];

const formative=[
 {age:6,title:"父親的舊兵器",text:"你在家中翻找東西時，發現父親藏起來的一把舊兵器。你第一次意識到，亂世並不只是大人們口中的故事。",
 choices:[
  {text:"「教我用刀。」",mods:{stats:{str:2},pot:{str:2}},tags:{martial:7,discipline:3},trait:"武藝啟蒙"},
  {text:"「可以教我射箭嗎？」",mods:{stats:{str:1,sur:2},pot:{sur:2}},tags:{archery:8,hunter:4}},
  {text:"「我想知道這把刀從哪裡來。」",mods:{stats:{int:2},pot:{int:2}},tags:{scholar:6,cunning:3}},
  {text:"偷偷拿出去玩。",mods:{stats:{sur:2},pot:{sur:1}},tags:{risk:8,survival:4},risk:true}
 ]},
 {age:7,title:"村中小孩",text:"村口有幾個孩子正在欺負一個比你弱小的孩子。大人們還沒注意到。",
 choices:[
  {text:"出手阻止。",mods:{stats:{str:1,cha:1},pot:{lea:1}},tags:{martial:4,leadership:7,compassion:6},trait:"勇敢"},
  {text:"去叫大人。",mods:{stats:{pol:2}},tags:{political:5,caution:4}},
  {text:"加入欺負人的一方。",mods:{stats:{cha:1},pot:{cha:1}},tags:{social:5,risk:5},trait:"冷酷傾向"},
  {text:"偷偷幫被欺負的人。",mods:{stats:{sur:1,cha:1},pot:{cha:1}},tags:{compassion:8,survival:4},trait:"護友之心"}
 ]},
 {age:8,title:"第一次離開村子",text:"父親帶你到市集。你第一次看見士兵、商人、士人和大量流民。",
 choices:[
  {text:"跟士兵談話。",mods:{stats:{str:1,lea:1},pot:{lea:2}},tags:{martial:5,leadership:6}},
  {text:"跟士人請教。",mods:{stats:{int:2},pot:{int:2}},tags:{scholar:8}},
  {text:"跟商人聊天。",mods:{stats:{cha:2,pol:1},pot:{pol:1}},tags:{social:8,political:6,cunning:4}},
  {text:"自己四處觀察。",mods:{stats:{sur:2,int:1},pot:{sur:2}},tags:{survival:7,cunning:5}}
 ]},
 {age:9,title:"先生來了",text:"村中來了一位落魄先生，願意免費教幾個孩子讀書。",
 choices:[
  {text:"每日去。",mods:{stats:{int:3},pot:{int:3}},tags:{scholar:12,discipline:5},trait:"好學"},
  {text:"有空先去。",mods:{stats:{int:1},pot:{int:1}},tags:{scholar:6}},
  {text:"「我不想讀。」",mods:{stats:{sur:1,str:1},pot:{str:1}},tags:{martial:4,risk:4}},
  {text:"問先生兵法。",mods:{stats:{int:2,lea:1},pot:{int:2,lea:2}},tags:{scholar:10,leadership:5},requires:{tag:"scholar",value:8},trait:"戰略思維"}
 ]},
 {age:10,title:"第一次狩獵",text:"你第一次獨自跟著獵戶入山。今天沒有大人會替你收拾失誤。",
 choices:[
  {text:"遠距離射擊。",mods:{stats:{str:2},pot:{str:2}},tags:{archery:10,hunter:5}},
  {text:"靠近獵物。",mods:{stats:{str:2},pot:{str:2}},tags:{martial:8,risk:4}},
  {text:"追蹤足跡。",mods:{stats:{sur:3},pot:{sur:3}},tags:{hunter:12,survival:6},trait:"獵人"},
  {text:"設下陷阱。",mods:{stats:{int:2,sur:1},pot:{int:2}},tags:{hunter:7,cunning:8}}
 ]},
 {age:11,title:"山坡上的意外",text:"同伴不慎跌落山坡。你只有很短時間決定怎樣做。",
 choices:[
  {text:"冒險救人。",mods:{stats:{sur:2,lea:1},pot:{sur:2,lea:1}},tags:{compassion:8,risk:7,leadership:5}},
  {text:"找路求援。",mods:{stats:{int:2,sur:1},pot:{int:1}},tags:{cunning:6,survival:6}},
  {text:"留在原地照顧他。",mods:{stats:{cha:2,lea:1},pot:{cha:1,lea:1}},tags:{compassion:10,leadership:5}},
  {text:"離開。",mods:{stats:{sur:2},pot:{sur:1}},tags:{survival:8,risk:4},rel:-12,trait:"冷酷傾向"}
 ]},
 {age:12,title:"師傅",text:"你的天賦逐漸被人看見。一名師傅願意花時間教你，但每個人只能選一條主要道路。",
 choices:[
  {text:"跟鄉勇教頭習武。",mods:{stats:{str:3,lea:1},pot:{str:3,lea:2}},tags:{martial:14,discipline:8},trait:"武藝根基"},
  {text:"跟老獵人入山。",mods:{stats:{sur:3,str:1},pot:{sur:3}},tags:{hunter:14,archery:6,survival:8},trait:"山林之子"},
  {text:"跟先生讀兵書。",mods:{stats:{int:3,lea:2},pot:{int:3,lea:2}},tags:{scholar:14,leadership:7},trait:"戰略思維"},
  {text:"跟商旅學做人做事。",mods:{stats:{cha:2,pol:2},pot:{pol:3,cha:2}},tags:{social:12,political:10,cunning:6}}
 ]},
 {age:13,title:"第一次真正的失敗",text:"你曾經最有把握的一件事失敗了。這一次，沒有人會替你找藉口。",
 choices:[
  {text:"「我要變強。」",mods:{stats:{str:1},pot:{str:3}},tags:{martial:7,discipline:8},trait:"百折不撓"},
  {text:"「我要弄清楚自己為何會輸。」",mods:{stats:{int:2},pot:{int:3}},tags:{scholar:9,cunning:7},trait:"善於反省"},
  {text:"「下次我不會再犯。」",mods:{stats:{sur:1,lea:1},pot:{lea:2,sur:1}},tags:{discipline:10}},
  {text:"「我不需要證明自己。」",mods:{stats:{cha:1,int:1},pot:{cha:1,int:2}},tags:{social:5,scholar:5}}
 ]},
 {age:14,title:"亂世逼近",text:"流民增加，地方官開始徵糧，商路也不再安全。你第一次明白「天下大亂」會如何落到普通人身上。",
 choices:[
  {text:"保護家人。",mods:{stats:{lea:2,sur:1},pot:{lea:2}},tags:{family:10,leadership:8,compassion:6}},
  {text:"幫助流民。",mods:{stats:{cha:2,pol:1},pot:{cha:2}},tags:{compassion:10,social:8}},
  {text:"賺錢囤糧。",mods:{stats:{pol:2,cha:1},pot:{pol:2}},tags:{political:9,cunning:7}},
  {text:"參與地方武裝。",mods:{stats:{str:2,lea:2},pot:{str:2,lea:3}},tags:{martial:9,leadership:12,risk:5}},
  {text:"偷偷收集情報。",mods:{stats:{int:2,sur:1},pot:{int:2}},tags:{cunning:12,survival:5}}
 ]},
 {age:15,title:"第一次真正殺人",text:"夜裡，你們遭到山賊襲擊。這一次，你手中的兵器不是木頭做的。",
 choices:[
  {text:"正面迎戰。",combat:true,mods:{stats:{str:2,lea:1},pot:{str:2,lea:1}},tags:{martial:10,leadership:5,risk:6}},
  {text:"設法誘敵。",combat:true,mods:{stats:{int:2,sur:1},pot:{int:2}},tags:{cunning:10,hunter:5}},
  {text:"嘗試談判。",combat:false,mods:{stats:{cha:2},pot:{cha:2}},tags:{social:10,compassion:5}},
  {text:"逃走。",combat:false,mods:{stats:{sur:3},pot:{sur:2}},tags:{survival:12,risk:3}}
 ]},
 {age:16,title:"你想成為誰？",text:"你已經不再是孩子。你開始思考，自己究竟想成為怎樣的人。",
 choices:[
  {text:"「我要成為天下名將。」",mods:{stats:{str:1,lea:2},pot:{str:3,lea:3}},tags:{martial:10,leadership:12,ambition:10}},
  {text:"「我要成為軍師。」",mods:{stats:{int:2,lea:1},pot:{int:3,lea:2}},tags:{scholar:12,cunning:8}},
  {text:"「我要入仕。」",mods:{stats:{pol:3,cha:1},pot:{pol:3}},tags:{political:14,social:6}},
  {text:"「亂世之中，有錢才有活路。」",mods:{stats:{pol:2,cha:1},pot:{pol:2,cha:1}},tags:{political:10,cunning:10}},
  {text:"「我只想保護自己和家人。」",mods:{stats:{sur:2,lea:1},pot:{sur:3}},tags:{family:12,survival:10}},
  {text:"「我要改變這個亂世。」",mods:{stats:{int:1,lea:2,cha:1},pot:{int:3,lea:3,cha:2}},tags:{ambition:15,leadership:10},requires:{tag:"ambition",value:8},trait:"改命之志"}
 ]},
 {age:17,title:"成年前最後一課",text:"你遇到一個陌生人。他看著你很久，問了一句：「如果你知道亂世即將開始，你會做什麼？」",
 choices:[
  {text:"「保護弱者。」",mods:{stats:{cha:1,lea:1},pot:{cha:2,lea:1}},tags:{compassion:12,leadership:6},trait:"仁心"},
  {text:"「勝者為王。」",mods:{stats:{str:1,pol:1},pot:{str:2,pol:1}},tags:{ambition:12,cunning:6},trait:"野心"},
  {text:"「天下大勢，順勢而行。」",mods:{stats:{int:1,pol:1},pot:{int:2,pol:2}},tags:{political:8,cunning:10},trait:"現實主義"},
  {text:"「我一定要出人頭地。」",mods:{stats:{str:1,cha:1},pot:{str:1,cha:2}},tags:{ambition:12,risk:6}},
  {text:"「我想知道真相。」",mods:{stats:{int:2},pot:{int:3}},tags:{scholar:12,cunning:8}}
 ]}
];

const equipmentPool=[
 {name:"黃巾短刀",slot:"weapon",quality:"普通",power:3,traits:["輕巧"]},
 {name:"舊鐵刀",slot:"weapon",quality:"普通",power:4,traits:["平衡"]},
 {name:"精鋼短劍",slot:"weapon",quality:"良好",power:8,traits:["鋒利"]},
 {name:"獵人硬弓",slot:"weapon",quality:"良好",power:7,traits:["遠射"]},
 {name:"雲紋長刀",slot:"weapon",quality:"稀有",power:12,traits:["破甲"]},
 {name:"玄鐵重刃",slot:"weapon",quality:"稀有",power:15,traits:["重擊"]},
 {name:"無名古劍",slot:"weapon",quality:"史詩",power:18,traits:["鋒利","靈巧"]},
 {name:"青龍偃月刀",slot:"weapon",quality:"傳說",power:24,traits:["威震華夏","破甲","重擊"]},
 {name:"赤兔",slot:"mount",quality:"傳說",power:0,traits:["疾馳","衝陣","脫戰"]}
];

function rand(min,max){return Math.floor(Math.random()*(max-min+1))+min}
function pick(a){return a[Math.floor(Math.random()*a.length)]}
function clamp(n,a=0,b=100){return Math.max(a,Math.min(b,n))}
function pct(n){return Math.round(n)+"%"}
function deepCopy(x){return JSON.parse(JSON.stringify(x))}

let state=null;
let formativeIndex=0;
let pendingCombat=false;

function newLife(){
  const bg=pick(backgrounds);
  const stats={str:rand(20,42),int:rand(20,42),pol:rand(15,38),cha:rand(20,45),lea:rand(15,38),sur:rand(25,50)};
  Object.entries(bg.stats).forEach(([k,v])=>stats[k]+=v);
  const pot={};
  Object.keys(STAT_NAMES).forEach(k=>pot[k]=rand(55,82));
  Object.entries(bg.stats).forEach(([k,v])=>pot[k]=clamp(pot[k]+Math.floor(v/2)));
  state={
    name:randomName(),courtesy:randomCourtesy(),
    age:6,level:0,xp:0,money:rand(8,25),
    background:bg.name,stats,pot,mastery:{str:0,int:0,pol:0,cha:0,lea:0,sur:0},
    tags:{},traits:[],relationships:{family:50,mentor:0},
    inventory:[],equipped:{weapon:null,mount:null},history:[],
    divergence:0,renown:0,wounds:[],stress:0,
    formativeDone:false, combat:null, pendingEvent:null
  };
  Object.entries(bg.tags).forEach(([k,v])=>addTag(k,v));
  log(`出生：${bg.name}。`);
  formativeIndex=0;
  renderFormative();
}

function randomName(){
  const surnames=["張","李","王","趙","陳","劉","周","馬","許","高","郭","徐"];
  const names=["玄","烈","安","衡","朔","遠","雲","川","策","昱","明","武","靖","昭","恆"];
  return pick(surnames)+pick(names);
}
function randomCourtesy(){return pick(["子烈","伯玄","元衡","仲遠","子明","文昭","景川"])}
function addTag(k,v){state.tags[k]=(state.tags[k]||0)+v}
function log(t){if(!state.history)state.history=[];state.history.unshift({age:state.age,text:t})}
function addTrait(t){if(t && !state.traits.includes(t))state.traits.push(t)}
function statTier(v){if(v<25)return"弱";if(v<50)return"基本";if(v<75)return"一般";if(v<90)return"Above Average";if(v<100)return"Elite";return"Peak Human"}

function applyChoice(c){
  if(c.mods?.stats) Object.entries(c.mods.stats).forEach(([k,v])=>state.stats[k]=clamp(state.stats[k]+v));
  if(c.mods?.pot) Object.entries(c.mods.pot).forEach(([k,v])=>state.pot[k]=clamp(state.pot[k]+v));
  if(c.tags) Object.entries(c.tags).forEach(([k,v])=>addTag(k,v));
  if(c.trait)addTrait(c.trait);
  if(c.rel)state.relationships.family=clamp(state.relationships.family+c.rel);
  Object.keys(state.stats).forEach(k=>state.stats[k]=Math.min(state.stats[k],state.pot[k]));
  state.xp+=rand(8,18);
  log(`做出選擇：「${c.text}」`);
  if(c.combat){startFormativeCombat();return;}
  advanceFormative();
}
function canChoose(c){
  if(!c.requires)return true;
  return (state.tags[c.requires.tag]||0)>=c.requires.value;
}
function advanceFormative(){
  if(formativeIndex>=formative.length-1){finishFormative();return;}
  formativeIndex++;
  state.age=formative[formativeIndex].age;
  renderFormative();
}
function finishFormative(){
  state.formativeDone=true; state.age=18; state.level=1;
  Object.keys(state.stats).forEach(k=>state.mastery[k]=clamp(Math.floor(state.tags[k==="str"?"martial":k==="int"?"scholar":k==="pol"?"political":k==="cha"?"social":k==="lea"?"leadership":"survival"]||0)/2));
  state.inventory.push(deepCopy(pick([equipmentPool[0],equipmentPool[1],equipmentPool[3]])));
  state.equipped.weapon=state.inventory[state.inventory.length-1];
  log("十八歲：少年時代結束，你的人生真正開始。");
  renderMain();
}
function startFormativeCombat(){
  state.age=15;
  state.combat={
    enemy:{name:"山賊",maxHp:55,hp:55,morale:70,momentum:0,str:38,def:25,wounds:[],alive:true},
    player:{maxHp:100,hp:100,morale:90,momentum:0},
    round:1,log:["夜色中，山賊向你們襲來。你第一次握住真正的兵器。"],
    surprise:false,ended:false
  };
  renderCombat(true);
}

function playerCPR(){
  const w=state.equipped.weapon?.power||0;
  const woundPenalty=state.wounds.length*7;
  return Math.round(state.stats.str*.3+state.stats.lea*.15+state.stats.sur*.15+w*.9+Object.values(state.mastery).reduce((a,b)=>a+b,0)/60+(100-woundPenalty)*.15);
}
function enemyCPR(e){return Math.round(e.str*.5+e.def*.5)}
function combatChance(action){
  const c=state.combat,e=c.enemy;
  const gap=playerCPR()-enemyCPR(e);
  let chance=45+gap*.12;
  if(action==="quick")chance+=12;
  if(action==="heavy")chance-=10;
  if(action==="feint")chance-=2;
  if(action==="counter")chance+=5;
  if(c.surprise)chance+=12;
  chance+=c.player.momentum*3-e.momentum*2;
  if(e.wounds.length)chance+=8;
  return clamp(chance,8,92);
}
function combatAction(action){
  const c=state.combat,e=c.enemy,p=c.player;
  if(c.ended)return;
  let chance=combatChance(action);
  const roll=rand(1,100);
  let text="";
  if(action==="defend"){
    p.momentum=Math.min(5,p.momentum+1);
    c.log.unshift(`你採取防守姿態。Momentum +1。`);
  }else if(action==="maneuver"){
    p.momentum=Math.min(5,p.momentum+2);
    c.log.unshift(`你繞向敵人側翼。Momentum +2。`);
    if(Math.random()<.35)c.surprise=true;
  }else if(action==="retreat"){
    if(rand(1,100)<=clamp(45+state.stats.sur*.35,20,85)){endCombat("escape");return}
    c.log.unshift("你試圖脫離戰鬥，但山賊逼得太緊。");
  }else{
    if(roll<=chance){
      let dmg=rand(7,13)+(state.equipped.weapon?.power||0);
      if(action==="heavy")dmg+=rand(5,10);
      if(action==="quick")dmg-=2;
      if(c.surprise)dmg=Math.round(dmg*1.25);
      if(action==="feint")e.def=Math.max(0,e.def-8);
      if(rand(1,100)<=12+(state.equipped.weapon?.quality==="傳說"?8:0)){dmg=Math.round(dmg*1.5);text=" CRITICAL HIT！"}
      e.hp=Math.max(0,e.hp-dmg);
      e.morale=Math.max(0,e.morale-Math.round(dmg/2));
      p.momentum=Math.min(5,p.momentum+1);
      if(dmg>=18)e.wounds.push("重傷");
      c.log.unshift(`你使用${actionName(action)}命中，造成 ${dmg} 傷害。${text}`);
    }else{
      p.momentum=Math.max(-3,p.momentum-1);
      c.log.unshift(`你使用${actionName(action)}失手了。（${pct(chance)}）`);
    }
  }
  if(e.hp<=0||e.morale<=15){endCombat("victory");return}
  enemyTurn();
}
function actionName(a){return({quick:"迅擊",heavy:"重擊",feint:"佯攻",counter:"反擊"})[a]||a}
function enemyTurn(){
  const c=state.combat,e=c.enemy,p=c.player;
  if(c.ended)return;
  const roll=rand(1,100);
  const chance=clamp(48+(enemyCPR(e)-playerCPR())*.12-e.wounds.length*5,12,88);
  if(roll<=chance){
    const dmg=rand(5,11)+(e.wounds.length? -2:0);
    p.hp=Math.max(0,p.hp-dmg);
    p.momentum=Math.max(-3,p.momentum-1);
    c.log.unshift(`山賊反擊，造成 ${dmg} 傷害。`);
    if(dmg>=12)state.wounds.push("手臂輕傷");
  }else{
    p.momentum=Math.min(5,p.momentum+1);
    c.log.unshift("山賊的攻擊被你避開。");
  }
  c.round++;
  c.surprise=false;
  if(p.hp<=0){endCombat("defeat");return}
  renderCombat(false);
}
function endCombat(result){
  const c=state.combat;c.ended=true;
  if(result==="victory"){
    state.xp+=45;state.renown+=3;
    const loot=deepCopy(pick([equipmentPool[0],equipmentPool[1],equipmentPool[3]]));
    state.inventory.push(loot);
    state.equipped.weapon=loot;
    state.wounds=state.wounds.slice(0,1);
    addTrait("初戰之血");
    c.log.unshift("⚔️ 勝利。你第一次真正見血。");
    log("十五歲：山賊襲擊中取得勝利，獲得「初戰之血」。");
    log(`戰利品：${loot.name}`);
  }else{
    state.wounds.push("戰鬥重傷");
    state.xp+=10;
    c.log.unshift("你倒下了，但有人把你救走。");
    log("十五歲：第一次真正戰鬥失敗，留下重傷。");
  }
  renderCombat(false);
}
function continueAfterCombat(){
  state.combat=null;
  advanceFormative();
}

function renderFormative(){
  const e=formative[formativeIndex];
  const progress=Math.round((formativeIndex/(formative.length-1))*100);
  document.getElementById("screen").innerHTML=`
    <div class="grid two">
      <section class="event">
        <div class="progress"><span>少年時代 · ${state.age}歲</span><span>${formativeIndex+1}/${formative.length}</span></div>
        <div class="meter"><i style="width:${progress}%"></i></div>
        <div class="meta" style="margin-top:16px">出身：${state.background} · ${state.name}・${state.courtesy}</div>
        <h2 class="event-title">${e.title}</h2>
        <p class="quote">${e.text}</p>
        <div class="choices">
          ${e.choices.map((c,i)=>`
            <button class="choice" ${canChoose(c)?"":"disabled"} onclick="choose(${i})">
              <strong>${c.text}</strong>
              <small>${choiceHint(c)}</small>
            </button>`).join("")}
        </div>
      </section>
      <aside class="panel">
        ${renderMiniCharacter()}
        <hr style="border-color:var(--line);margin:18px 0">
        <h3>已形成的方向</h3>
        <div class="cardrow">${Object.entries(state.tags).filter(([k,v])=>v>=6).sort((a,b)=>b[1]-a[1]).slice(0,8).map(([k,v])=>`<span class="tag">${TAG_NAMES[k]||k} ${v}</span>`).join("")||"<span class='meta'>你的道路尚未明朗。</span>"}</div>
        <h3 style="margin-top:18px">特質</h3>
        <div class="cardrow">${state.traits.map(t=>`<span class="tag">${t}</span>`).join("")||"<span class='meta'>尚未形成明確特質。</span>"}</div>
      </aside>
    </div>`;
}
function choiceHint(c){
  const s=[];
  if(c.requires&&!canChoose(c))s.push(`需要「${TAG_NAMES[c.requires.tag]||c.requires.tag}」${c.requires.value}`);
  if(c.combat)s.push("可能進入戰鬥");
  if(c.risk)s.push("有額外風險");
  return s.join(" · ")||"這個選擇會影響你的成長方向。";
}
function choose(i){applyChoice(formative[formativeIndex].choices[i])}

function renderMiniCharacter(){
  return `<div class="character-head"><div><div class="meta">AGE ${state.age}</div><h2>${state.name}・${state.courtesy}</h2></div><div class="meta">XP ${state.xp}</div></div>
  <div class="stats">${Object.entries(state.stats).map(([k,v])=>`<div class="stat"><div class="label">${STAT_ICONS[k]} ${STAT_NAMES[k]}</div><div class="value">${v}</div><div class="meter"><i style="width:${v}%"></i></div><div class="meta">${statTier(v)} · 潛能 ${state.pot[k]}</div></div>`).join("")}</div>`;
}

function renderMain(){
  document.getElementById("screen").innerHTML=`
    <div class="toolbar">
      <button class="primary" onclick="showProfile()">角色</button>
      <button onclick="showInventory()">裝備</button>
      <button onclick="showHistory()">人生史</button>
      <button onclick="nextMainEvent()">下一事件</button>
    </div>
    <div class="grid two">
      <section class="panel">${renderMiniCharacter()}
        <div class="banner gold">十八歲。少年時代結束。亂世正開始。</div>
        <div class="cardrow">${state.traits.map(t=>`<span class="tag">${t}</span>`).join("")}</div>
      </section>
      <section class="panel">
        <h2>📜 目前局勢</h2>
        <p class="quote">184年，黃巾之亂爆發。天下開始動盪。你還沒有名聲，也沒有軍隊，但你已經擁有一段真正屬於自己的少年史。</p>
        <div class="banner">聲望：${state.renown} · 金錢：${state.money} · 歷史偏移：${state.divergence}</div>
        <button class="primary" onclick="nextMainEvent()">繼續人生 →</button>
      </section>
    </div>`;
}
function showProfile(){
  document.getElementById("screen").innerHTML=`<div class="panel">
    <div class="toolbar"><button onclick="renderMain()">← 返回</button></div>
    ${renderMiniCharacter()}
    <h3 style="margin-top:20px">Potential</h3>
    <div class="stats">${Object.entries(state.pot).map(([k,v])=>`<div class="stat"><div class="label">${STAT_ICONS[k]} ${STAT_NAMES[k]}</div><div class="value">${v}</div><div class="meta">${statTier(v)}</div></div>`).join("")}</div>
    <h3 style="margin-top:20px">Development</h3>
    ${["martial","scholar","political","social","hunter","leadership","survival","ambition"].map(k=>`<div class="progress"><span>${TAG_NAMES[k]||k}</span><span>${state.tags[k]||0}</span></div><div class="meter"><i style="width:${Math.min(100,(state.tags[k]||0))}%"></i></div>`).join("")}
  </div>`;
}
function showInventory(){
  document.getElementById("screen").innerHTML=`<div class="panel">
    <div class="toolbar"><button onclick="renderMain()">← 返回</button></div>
    <h2>🎒 裝備</h2>
    <div class="grid two">${state.inventory.map((it,i)=>`<div class="stat"><div class="meta">${it.slot==="mount"?"坐騎":"武器"} · ${it.quality}</div><h3>${it.name}</h3><div>${it.slot==="weapon"?"Weapon Power +"+it.power:"機動能力 +" + 25}</div><div class="cardrow">${it.traits.map(t=>`<span class="tag">${t}</span>`).join("")}</div><button onclick="equip(${i})">${state.equipped.weapon===it||state.equipped.mount===it?"已裝備":"裝備"}</button></div>`).join("")}</div>
  </div>`;
}
function equip(i){
  const it=state.inventory[i];
  if(it.slot==="weapon")state.equipped.weapon=it; else state.equipped.mount=it;
  log(`裝備：${it.name}`);
  showInventory();
}
function showHistory(){
  document.getElementById("screen").innerHTML=`<div class="panel"><div class="toolbar"><button onclick="renderMain()">← 返回</button></div><h2>📜 我的人生</h2><div class="log">${state.history.map(x=>`<div class="log-item"><b>${x.age}歲</b>　${x.text}</div>`).join("")}</div></div>`;
}
function nextMainEvent(){
  state.age++;
  const events=[
    ["184年・黃巾", "縣城正在招募鄉勇。你要不要投身亂局？",[
      ["參軍", {lea:2,str:1}, 4],["留在地方",{pol:1,cha:1},1],["去外地尋師", {int:2},2]
    ]],
    ["陌生的消息", "一名旅人說，北方有位年輕武人正在招募門客。",[
      ["追上去", {sur:1,cha:1},2],["打聽消息",{int:1,pol:1},2],["不理會",{sur:1},0]
    ]],
    ["山道伏擊", "你發現一隊人似乎沒有注意到你。",[
      ["偷襲", {sur:2,str:1},5],["觀察",{int:2,sur:1},2],["離開",{sur:1},1]
    ]]
  ];
  const ev=pick(events);
  document.getElementById("screen").innerHTML=`<div class="event"><div class="meta">${ev[0]}</div><h2>${ev[0]}</h2><p class="quote">${ev[1]}</p><div class="choices">${ev[2].map((x,i)=>`<button class="choice" onclick="mainChoice(${JSON.stringify(x[1])},${x[2]})"><strong>${x[0]}</strong><small>選擇會影響你的未來。</small></button>`).join("")}</div></div>`;
}
function mainChoice(mods,div){
  Object.entries(mods).forEach(([k,v])=>state.stats[k]=clamp(state.stats[k]+v));
  state.stats=Object.fromEntries(Object.entries(state.stats).map(([k,v])=>[k,Math.min(v,state.pot[k])]));
  state.divergence+=div;
  state.xp+=rand(10,22);
  log(`成年後事件：能力發生變化。`);
  renderMain();
}

function renderCombat(first){
  const c=state.combat,e=c.enemy,p=c.player;
  document.getElementById("screen").innerHTML=`
  <div class="combat">
    <div class="meta">⚔️ BATTLE · ${c.round} 回合</div>
    <h2>${first?"第一次真正殺人":"戰鬥仍在繼續"}</h2>
    ${c.surprise?'<div class="banner gold">🥷 AMBUSH — 你取得先手！</div>':""}
    <div class="combat-layout">
      <div class="fighter enemy"><h3><span>山賊</span><span>${e.hp}/${e.maxHp}</span></h3><div class="hpbar"><i style="width:${e.hp/e.maxHp*100}%"></i></div><p>士氣 ${e.morale} · Momentum ${e.momentum}</p><div class="cardrow">${e.wounds.map(w=>`<span class="tag">${w}</span>`).join("")}</div></div>
      <div class="fighter"><h3><span>${state.name}</span><span>${p.hp}/${p.maxHp}</span></h3><div class="hpbar"><i style="width:${p.hp/p.maxHp*100}%"></i></div><p>士氣 ${p.morale} · Momentum ${p.momentum} · CPR ${playerCPR()}</p><div class="cardrow">${state.wounds.map(w=>`<span class="tag">${w}</span>`).join("")}</div></div>
    </div>
    <div class="combat-log" style="margin-top:14px">${c.log.slice(0,12).map(x=>`<div>${x}</div>`).join("")}</div>
    ${c.ended?`<div class="banner ${e.hp<=0?"good":"bad"}">${e.hp<=0?"勝利！":"你敗下陣來。"}</div><button class="primary" onclick="continueAfterCombat()">繼續人生 →</button>`:
    `<div class="action-grid">
      <button onclick="combatAction('quick')">⚡ 迅擊<br><small>${pct(combatChance("quick"))}</small></button>
      <button onclick="combatAction('heavy')">💥 重擊<br><small>${pct(combatChance("heavy"))}</small></button>
      <button onclick="combatAction('feint')">🪤 佯攻<br><small>${pct(combatChance("feint"))}</small></button>
      <button onclick="combatAction('defend')">🛡️ 防守</button>
      <button onclick="combatAction('maneuver')">🥷 走位</button>
      <button onclick="combatAction('retreat')">🏃 撤退</button>
    </div>`}
  </div>`;
}

function saveGame(){localStorage.setItem(SAVE_KEY,JSON.stringify({state,formativeIndex}));alert("已保存。")}
function loadGame(){const raw=localStorage.getItem(SAVE_KEY);if(!raw){alert("沒有保存檔。");return}const d=JSON.parse(raw);state=d.state;formativeIndex=d.formativeIndex;state.combat?renderCombat(false):state.formativeDone?renderMain():renderFormative()}
document.getElementById("saveBtn").onclick=saveGame;
document.getElementById("loadBtn").onclick=loadGame;
document.getElementById("newBtn").onclick=()=>{if(confirm("開始新人生？目前人生未保存的進度會消失。"))newLife()};

newLife();
