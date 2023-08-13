let hamburgerBtn = document.querySelector('.header .trigger'),
    closeBtn = document.querySelector('.sitemap .closeBtn'),
    sitemap = document.querySelector('.sitemap'),
    header = document.querySelector('.header'),
    main = document.querySelector('.main'),
    footer = document.querySelector('.footer');
let sitemapMenu = document.querySelectorAll('.sitemap .category > li .depth1'),
    categoryMenu = document.querySelectorAll('.sitemap .category > li h3 a');


hamburgerBtn.addEventListener('click', function(){
  change2Sitemap();
})
closeBtn.addEventListener('click', function(){
  change2Sitemap();
})
/** 
 * change2Sitemap
 * 1) header .trigger와 sitemap .closeBtn의 클릭이벤트를 위한 함수 선언
*/
function change2Sitemap(){
  if(!header.classList.contains('close')){
    header.classList.add('close');
    main.classList.add('close');
    footer.classList.add('close');
    sitemap.classList.add('visible');
  }else{
    header.classList.remove('close');
    main.classList.remove('close');
    footer.classList.remove('close');
    sitemap.classList.remove('visible');
  }
}


/** 
 * clickDepth1
 * 1) depth1[idx]의 li.clickable 요소를 변수로 선언
 * 2) li.clickable[idx]의 depth2를 변수로 선언
 * 3) 변수 clickableDepth1를 클릭할 때
 * 4) 클릭한 요소에 open 클래스가 없으면 클래스 추가
 * 5) 클릭한 요소에 open 클래스가 있다면 클래스 삭제
*/
clickDepth1();
function clickDepth1(){
  for(let b = 0; b < sitemapMenu.length; b++){
    let clickableDepth1 = sitemapMenu[b].querySelectorAll('.clickable'); //1)
  
    for(let bb = 0; bb < clickableDepth1.length; bb++){
      let depth2Menu = clickableDepth1[bb].querySelector('.depth2'); //2)
      
      clickableDepth1[bb].addEventListener('click', function(e){ //3)
        e.preventDefault();
        if(!this.classList.contains('open')){ //4)
          closeAllDepth1(); //0)
          this.classList.add('open'); //4)
        }else{
          this.classList.remove('open'); //5)
        }
  
        /** 
          * closeAllDepth1
          * 0) 초기화. 모두 닫기
        */
        function closeAllDepth1(){
          for(let num = 0; num < clickableDepth1.length; num++){
              clickableDepth1[num].classList.remove('open');
          }
        }
      })
    }
  }
}


for(let c = 0; c < categoryMenu.length; c++){
  let categoryParent = categoryMenu[c].parentNode.parentNode
      categoryParentAll = document.querySelectorAll('.sitemap .category > li');
  console.log(categoryParent);
  console.log(categoryParentAll);

  categoryMenu[c].addEventListener('click', function(e){
    e.preventDefault();
    if(!categoryParent.classList.contains('open')){
      for(let cc = 0; cc < categoryParentAll.length; cc++){
        categoryParentAll[cc].classList.remove('open');
      }

      categoryParent.classList.add('open');
    }else{
      categoryParent.classList.remove('open');
    }
  })
}