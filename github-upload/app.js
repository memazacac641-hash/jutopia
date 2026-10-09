const data = window.PORTFOLIO;
let lang = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'zh';

const ui = {
  zh: {skip:'跳到主要内容',navWork:'作品',navAbout:'关于我',navContact:'联系我',student:'广州美术学院 · 艺术设计学学生',heroText:'以当代视觉与空间体验，重新讲述文化故事。',explore:'浏览作品',workTitle:'作品 / Works',workNote:'从产品、展览到 AI，探索文化叙事的不同表达。',aboutTitle:'关于我 / About me',skillsTitle:'设计工具',contactTitle:'联系方式 / Contact',invite:'从一句\n你好开始。',contactNote:'欢迎就作品、实习机会或设计合作联系我。',copy:'复制微信号',top:'回到顶部',projectInfo:'项目资料',close:'关闭',needed:'待补充资料',cover:'封面待补充',details:'查看详情',qr:'微信二维码\n待补充',copied:'微信号已复制',copyFailed:'暂时无法复制，请手动复制：',openProject:'打开项目链接',items:['实际项目名称、年份与背景','你的职责、使用工具与设计过程','项目封面、过程图与图片说明','真实成果与可公开的项目链接']},
  en: {skip:'Skip to main content',navWork:'Work',navAbout:'About me',navContact:'Contact me',student:'Art & Design student · GAFA',heroText:'Translating cultural narratives into contemporary visual and spatial experiences.',explore:'Explore work',workTitle:'Selected work',workNote:'Exploring cultural narratives through products, exhibitions and AI.',aboutTitle:'About me',skillsTitle:'Design tools',contactTitle:'Get in touch',invite:'Let’s start\nwith hello.',contactNote:'Get in touch about my work, internships or design collaborations.',copy:'Copy WeChat ID',top:'Back to top',projectInfo:'Project information',close:'Close',needed:'Information to add',cover:'Cover to be added',details:'View details',qr:'WeChat QR code\nTo be added',copied:'WeChat ID copied',copyFailed:'Copy unavailable. Please copy manually: ',openProject:'Open project link',items:['Actual project title, year and context','Your role, tools and design process','Project cover, process images and descriptions','Real outcomes and a public project link']}
};
const get = (value) => typeof value === 'object' ? (value[lang] || value.zh) : value;
Object.assign(ui.zh, {navExperience:'经历',experienceTitle:'实习经历 / Experience',experienceNote:'从品牌视觉到文化传播，在实践中拓展设计。'});
Object.assign(ui.en, {navExperience:'Experience',experienceTitle:'Internship experience',experienceNote:'Developing my practice through brand visuals and cultural communications.'});
let selectedExperience = 0;
Object.assign(ui.zh,{playFilm:'播放短片',filmTitle:'个人短片'});
Object.assign(ui.en,{playFilm:'Play film',filmTitle:'Personal film'});
const aboutVideo = document.querySelector('#about-video');
const playFilmButton = document.querySelector('#play-about-video');
if(data.aboutVideo?.src){
  aboutVideo.src = data.aboutVideo.src;
  if(data.aboutVideo.poster)aboutVideo.poster = data.aboutVideo.poster;
  playFilmButton.hidden = false;
}
playFilmButton.addEventListener('click',async()=>{
  playFilmButton.hidden=true;
  document.querySelector('#video-status').textContent='';
  aboutVideo.focus({preventScroll:true});
  try { await aboutVideo.play(); }
  catch { playFilmButton.hidden=false;document.querySelector('#video-status').textContent=lang==='zh'?'播放暂时失败，请使用视频控制栏重试。':'Playback failed. Please try the video controls.'; }
});
aboutVideo.addEventListener('play',()=>{playFilmButton.hidden=true;});
aboutVideo.addEventListener('error',()=>{
  playFilmButton.hidden=true;
  document.querySelector('#video-status').textContent=lang==='zh'?'视频暂时无法加载，请刷新后重试。':'Video unavailable. Please refresh and try again.';
});
aboutVideo.addEventListener('loadedmetadata',()=>{
  if(Number.isFinite(aboutVideo.duration)){
    const seconds=Math.floor(aboutVideo.duration);
    document.querySelector('#film-duration').textContent=String(Math.floor(seconds/60)).padStart(2,'0')+':'+String(seconds%60).padStart(2,'0');
  }
});
function selectExperience(index, animate = true) {
  selectedExperience = index;
  const tabs = [...document.querySelectorAll('#experience-tabs [role="tab"]')];
  tabs.forEach((tab, i) => {tab.setAttribute('aria-selected', String(i === index));tab.tabIndex = i === index ? 0 : -1;});
  const item = data.experiences[index];
  const panel = document.querySelector('#experience-panel');
  panel.setAttribute('aria-labelledby', 'experience-tab-'+item.id);
  panel.replaceChildren();
  const heading = element('div','experience-heading');
  const title = element('div');title.append(element('h3','',get(item.role)),element('p','experience-company',item.company));
  if(item.department)title.append(element('p','experience-department',get(item.department)));
  heading.append(title,element('span','experience-date',item.dates));
  const list = element('ul','experience-bullets');get(item.bullets).forEach(text=>list.append(element('li','',text)));
  panel.append(heading,list);
  if(animate && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    panel.getAnimations().forEach(animation=>animation.cancel());
    panel.animate([{opacity:0,transform:'translateY(12px)'},{opacity:1,transform:'translateY(0)'}],{duration:260,easing:'ease-out'});
  }
}
function renderExperiences() {
  const root = document.querySelector('#experience-tabs');root.replaceChildren();
  data.experiences.forEach((item,i)=>{
    const tab = element('button','experience-tab');tab.type='button';tab.id='experience-tab-'+item.id;
    tab.setAttribute('role','tab');tab.setAttribute('aria-controls','experience-panel');
    tab.append(element('span','experience-tab-number','0'+(i+1)),element('strong','',item.name),element('span','experience-tab-role',get(item.role)),element('span','experience-tab-date',item.dates));
    tab.addEventListener('click',()=>selectExperience(i));
    tab.addEventListener('keydown',event=>{
      let next;
      if(event.key==='ArrowRight')next=(i+1)%data.experiences.length;
      if(event.key==='ArrowLeft')next=(i-1+data.experiences.length)%data.experiences.length;
      if(event.key==='Home')next=0;
      if(event.key==='End')next=data.experiences.length-1;
      if(next!==undefined){event.preventDefault();selectExperience(next);root.children[next].focus();}
    });root.append(tab);
  });selectExperience(selectedExperience,false);
}
function safeUrl(value){try{const url=new URL(value,location.href);return ['http:','https:','file:'].includes(url.protocol)?url.href:null;}catch{return null;}}
function element(tag, className, text){const node=document.createElement(tag);if(className)node.className=className;if(text!==undefined)node.textContent=text;return node;}
function renderProjects(){
  const grid=document.querySelector('#projects');grid.replaceChildren();
  data.projects.forEach(project=>{
    const article=element('article','project-card');
    const cover=element('a','project-cover '+project.tone);cover.href=projectHref(project);cover.setAttribute('aria-label',ui[lang].details+': '+get(project.title));
    const imageSource=project.thumbnail||project.image;
    const imageUrl=imageSource&&safeUrl(imageSource);
    if(imageUrl){const img=element('img');img.src=imageUrl;img.alt=get(project.thumbnailAlt||project.alt)||get(project.title);img.loading='lazy';if(project.thumbnail){img.style.objectFit='contain';}else if(project.imagePosition)img.style.objectPosition=project.imagePosition;cover.append(img);img.addEventListener('error',()=>{img.remove();fillPlaceholder(cover,project);},{once:true});}
    else fillPlaceholder(cover,project);

    const meta=element('div','project-index');meta.append(element('span','','/'+project.id),element('span','',project.year));
    const caption=element('div','project-caption');const text=element('div');const title=element('h3');const titleLink=element('a','project-title',get(project.title));titleLink.href=projectHref(project);title.append(titleLink);text.append(title,element('p','',get(project.category)));
    const button=element('a','details-button',ui[lang].details);button.href=projectHref(project);caption.append(text,button);article.append(meta,cover,caption);grid.append(article);
  });
}
function fillPlaceholder(cover,project){const label=element('span','cover-label');label.append(element('span','','PROJECT / '+project.id),element('span','','PLACEHOLDER'));cover.append(label,element('span','cover-number',project.id),element('span','placeholder',ui[lang].cover));}
function projectHref(project){return 'project.html?id='+encodeURIComponent(project.id)+'&lang='+lang;}
function render(){
  document.documentElement.lang=lang==='zh'?'zh-CN':'en';document.title=lang==='zh'?'顾馨心 Julia Gu — 个人作品集':'Julia Gu — Art & Design Portfolio';
  document.querySelector('meta[name="description"]').content=lang==='zh'?'顾馨心 Julia Gu，广州美术学院艺术设计学学生的个人作品集。':'Julia Gu, Art and Design student at Guangzhou Academy of Fine Arts. Personal portfolio.';
  document.querySelector('nav').setAttribute('aria-label',lang==='zh'?'主要导航':'Main navigation');
  aboutVideo.setAttribute('aria-label',ui[lang].filmTitle);
  document.querySelectorAll('[data-i18n]').forEach(node=>{node.textContent=ui[lang][node.dataset.i18n];});
  document.querySelectorAll('[data-lang]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.lang===lang)));
  document.querySelector('#bio').textContent=get(data.bio);const email=document.querySelector('#email');email.textContent=data.email;email.href='mailto:'+data.email;document.querySelector('#wechat-id').textContent=data.wechat;
  const qr=document.querySelector('#qr');qr.replaceChildren();const url=data.qrImage&&safeUrl(data.qrImage);if(url){const img=element('img');img.src=url;img.alt=lang==='zh'?'顾馨心的微信二维码':'Julia Gu’s WeChat QR code';qr.append(img);}else{qr.textContent=ui[lang].qr;}
  document.querySelector('#copy-status').textContent='';renderProjects();renderExperiences();
}
document.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',()=>{lang=button.dataset.lang;const url=new URL(location.href);url.searchParams.set('lang',lang);history.replaceState(null,'',url);render();}));
document.querySelector('#copy').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(data.wechat);document.querySelector('#copy-status').textContent=ui[lang].copied;}catch{document.querySelector('#copy-status').textContent=ui[lang].copyFailed+data.wechat;}});
render();
