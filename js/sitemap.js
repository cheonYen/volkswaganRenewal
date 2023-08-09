let sitemapMenu = document.querySelectorAll('.sitemap .category > li'),
    clickableDepth1 = document.querySelectorAll('.clickable'),
    depth2Menu = document.querySelectorAll('.sitemap .depth2');

console.log(sitemapMenu);
console.log(clickableDepth1);
console.log(depth2Menu);















for(let clickableDepth1Len = 0; clickableDepth1Len < clickableDepth1.length; clickableDepth1Len++){
 clickableDepth1[clickableDepth1Len].addEventListener('click', function(e){
   //closeAllSitemapDepth1();
   e.preventDefault();
   if(!this.classList.contains('open')){
     this.classList.add('open');
   }else{
     this.classList.remove('open');
   }
 })
}


function closeAllSitemapDepth1(){
  for(let num = 0; num < clickableDepth1.length; num++){
      clickableDepth1[num].classList.remove('open');
  }
}


