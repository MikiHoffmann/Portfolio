// helper for HTML elements creation
const createChildElement = (parentElement,element,className) => {
  const childElement = document.createElement(element);
  parentElement.appendChild(childElement);
  childElement.classList.add(className);
};
// titles
const titles = ['CONTACT.','PROJECTS.','SKILLS.','EDUCATION.','WORK.'];
let titleContainers = document.querySelectorAll('.sectionTitle').forEach((title) => {
  createChildElement(title,'span','sectionTitleTextLarge');
  createChildElement(title,'span','sectionTitleTextSmall');
});
console.log(titleContainers);
let titleTextLarge = document.querySelectorAll('.sectionTitleTextLarge');
let titleTextSmall = document.querySelectorAll('.sectionTitleTextSmall');
for(let i = 0; i < titles.length; i++) {
  titleTextLarge[i].innerText = titles[i];
  titleTextLarge[i].classList.add('orangeText');
  for(let j = 0; j < 30; j++) {
    titleTextSmall[i].innerText += titles[i];
  };
};
// projects section - images: 750x469px
const galleryItem = [
  {image:'montmartreLink.png',text:'website for café Montmartre',link:'https://www.cafemontmartre.nl'},
  {image:'stopwatchLink.png',text:'a little stopwatch project',link:'mIMG/101projects/stopwatch/stopwatch.html'},
  {image:'theeHuisjeLink.png',text:'Techgrounds selection assignment',link:'mIMG/101projects/theehuisje/index.html'},
  {image:'kathondduifLink.png',text:'popUp challange',link:'mIMG/101projects/challangeKatHondDuif/index.html'},
  {image:'miki101SeptLink.png',text:'previous design for miki101',link:'mIMG/101projects/miki101Sept21/index.html'},
  {image:'naaimachine-huis.png',text:'some fashion & stagewear designs',link:'gallery.html'}
];
const projectsArticle = document.getElementById('projectsArticle');
for(let i = 0; i < galleryItem.length; i++) {
  createChildElement(projectsArticle,'div','articleColumn33');
};
projectsArticle.querySelectorAll('.articleColumn33').forEach((column) => {
  createChildElement(column,'figure','gallery');
});
projectsArticle.querySelectorAll('.gallery').forEach((figure) => {
  createChildElement(figure,'a','frameLink');
  createChildElement(figure,'figcaption','figCaptionText');
});
projectsArticle.querySelectorAll('a').forEach((links) => {
  createChildElement(links,'img','galleryImg');
});
let links = projectsArticle.querySelectorAll('.frameLink');
let img = projectsArticle.querySelectorAll('img');
let figCap = projectsArticle.querySelectorAll('figcaption');
const iFrame = document.getElementById('iFrameContainer');
for(let i = 0; i < links.length; i++) {
  links[i].addEventListener('click',() => {
    iFrameContainer.style.height = '100%';
  });
};
for(let i = 0; i < galleryItem.length; i++) {
  links[i].href = `${galleryItem[i].link}`;
  links[i].target = 'iFrameField';
  img[i].src = `mIMG/101projects/${galleryItem[i].image}`;
  figCap[i].innerText = `${galleryItem[i].text}`;
};
const iFrameClose = document.getElementById('iFrameClose');
iFrameClose.addEventListener('click',() => {
  iFrameContainer.style.height = '0%';
});