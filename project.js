const params = new URLSearchParams(location.search);
let lang = params.get('lang') === 'en' ? 'en' : 'zh';
const project = window.PORTFOLIO.projects.find(item => item.id === params.get('id'));
const words = {
  zh: {skip:'跳到主要内容',back:'返回作品集',overview:'项目介绍',year:'年份',role:'我的职责',tools:'使用工具',missing:'待补充',cover:'项目封面待补充',process:'设计过程',processNote:'请补充项目背景、设计思路、你的具体工作与真实成果。',gallery:'项目图片',galleryNote:'过程图、细节图与最终作品待补充。',external:'打开项目链接',notFound:'未找到该作品',notFoundNote:'这个作品链接可能有误，请返回作品集选择项目。',imageError:'图片暂时无法加载'},
  en: {skip:'Skip to main content',back:'Back to portfolio',overview:'Project overview',year:'Year',role:'My role',tools:'Tools',missing:'To be added',cover:'Project cover to be added',process:'Design process',processNote:'Add the project context, design approach, your responsibilities and actual outcomes.',gallery:'Project gallery',galleryNote:'Process images, details and final work will be added.',external:'Open project link',notFound:'Project not found',notFoundNote:'This project link may be incorrect. Return to the portfolio to choose a project.',imageError:'Image unavailable'}
};
function translated(value){return value && typeof value==='object' ? value[lang] || value.zh || '' : value || '';}
function node(tag, className, text){const el=document.createElement(tag);if(className)el.className=className;if(text!==undefined)el.textContent=text;return el;}
function imageUrl(value){try{const url=new URL(value,location.href);return ['http:','https:','file:'].includes(url.protocol)?url.href:null;}catch{return null;}}
function image(src, alt, className){const img=node('img',className);img.src=src;img.alt=alt;img.loading='lazy';img.addEventListener('error',()=>img.replaceWith(node('p','image-error',words[lang].imageError)),{once:true});return img;}
function render(){
  const text=words[lang];document.documentElement.lang=lang==='zh'?'zh-CN':'en';
  document.querySelectorAll('[data-text]').forEach(el=>el.textContent=text[el.dataset.text]);
  document.querySelectorAll('[data-lang]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.lang===lang)));
  document.querySelector('#home-link').href='index.html?lang='+lang;
  for(const id of ['back-link','footer-back'])document.getElementById(id).href='index.html?lang='+lang+'#work';
  const root=document.querySelector('#project-content');root.replaceChildren();
  if(!project){document.title=text.notFound+' — JUTOPIA';root.append(node('section','section',undefined));const section=root.firstChild;section.append(node('h1','',text.notFound),node('p','',text.notFoundNote));return;}
  const title=translated(project.title);document.title=title+' — JUTOPIA';document.querySelector('meta[name="description"]').content=translated(project.summary);
  const hero=node('section','project-intro');hero.append(node('p','project-eyebrow','PROJECT / '+project.id+' · '+translated(project.category)),node('h1','',title));root.append(hero);
  const overview=node('section','section project-overview');const copy=node('div');copy.append(node('h2','',text.overview),node('p','project-summary',translated(project.summary)));const metadata=node('dl','project-metadata');
  const fields=[[text.year,project.year],[text.role,translated(project.role)],[text.tools,translated(project.tools)]];
  if(project.award)fields.push([lang==='zh'?'获奖':'Award',translated(project.award)]);
  for(const [label,value] of fields){const row=node('div');row.append(node('dt','',label),node('dd','',value||text.missing));metadata.append(row);}overview.append(copy,metadata);root.append(overview);
  const cover=node('div','detail-cover '+project.tone);const coverUrl=project.image&&imageUrl(project.image);if(coverUrl)cover.append(image(coverUrl,translated(project.alt)||title,''));else cover.append(node('span','','PROJECT / '+project.id),node('p','',text.cover));root.append(cover);
  const process=node('section','section project-process');
  if(project.sections?.length){project.sections.forEach(item=>{const block=node('div','process-block');block.append(node('h2','',translated(item.heading)),node('p','',translated(item.body)));process.append(block);});}else{process.append(node('h2','',text.process),node('p','section-note',text.processNote));}root.append(process);
  const gallery=node('section','section project-gallery');gallery.append(node('h2','',text.gallery));
  if(project.gallery?.length){project.gallery.forEach(item=>{const src=item.image&&imageUrl(item.image);if(!src)return;const figure=node('figure');figure.append(image(src,translated(item.alt)||title,''));if(translated(item.caption))figure.append(node('figcaption','',translated(item.caption)));gallery.append(figure);});root.append(gallery);}else if(!project.image){gallery.append(node('p','section-note',text.galleryNote));root.append(gallery);}
  const externalUrl=project.url&&imageUrl(project.url);if(externalUrl){const area=node('div','section');const link=node('a','details-button',text.external);link.href=externalUrl;link.target='_blank';link.rel='noopener noreferrer';area.append(link);root.append(area);}
}
document.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',()=>{lang=button.dataset.lang;const url=new URL(location.href);url.searchParams.set('lang',lang);history.replaceState(null,'',url);render();}));
render();
