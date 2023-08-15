//스크롤 이벤트//////////////////////
/**
 * 1) 화면 768px 이하일 때
 * 2) 화면 769px 이상일 때
*/
let mediaViewWidth = window.matchMedia('(max-width: 768px)');
let orderOfUseLi = document.querySelectorAll('.orderOfUse li'),
    chargingMethodHeading = document.querySelector('.chargingMethod .heading'),
    cmContentsImg = document.querySelectorAll('.cmContentsWrap li');

window.addEventListener('scroll', function(){
  console.log(window.scrollY);
  //1) 768px 이하 ******
  if(mediaViewWidth.matches == true){
    if(window.scrollY > 20){
      orderOfUseLi[0].classList.add('animation');

      if(window.scrollY > 200){
        orderOfUseLi[1].classList.add('animation');

        if(window.scrollY > 500){
          orderOfUseLi[2].classList.add('animation');

          if(window.scrollY > 900){
            chargingMethodHeading.classList.add('animation');
            if(window.scrollY > 1000){
              cmContentsImg[0].classList.add('animation');
              if(window.scrollY > 2000){
                cmContentsImg[1].classList.add('animation');
                if(window.scrollY > 2800){
                  cmContentsImg[2].classList.add('animation');
                }else{
                  cmContentsImg[2].classList.remove('animation');
                }
              }else{
                cmContentsImg[1].classList.remove('animation');
              }
            }else{
              cmContentsImg[0].classList.remove('animation');
            }
          }else{
            chargingMethodHeading.classList.remove('animation');
          }
        }else{
          orderOfUseLi[2].classList.remove('animation');
        }
      }else{
        orderOfUseLi[1].classList.remove('animation');
      }
    }else{
      for(let a = 0; a < orderOfUseLi.length; a++){
        orderOfUseLi[a].classList.remove('animation');
      }
    }
  }
  //1)**********************************
  //2) 769px 이상 ******
  else{
    if(window.scrollY > 270){
      for(let a = 0; a < orderOfUseLi.length; a++){
        orderOfUseLi[a].classList.add('animation');
      }
      if(window.scrollY > 780){
        chargingMethodHeading.classList.add('animation');
        if(window.scrollY > 1000){
          cmContentsImg[0].classList.add('animation');
          if(window.scrollY > 1650){
            cmContentsImg[1].classList.add('animation');
            if(window.scrollY > 2400){
              cmContentsImg[2].classList.add('animation');
            }else{
              cmContentsImg[2].classList.remove('animation');
            }
          }else{
            cmContentsImg[1].classList.remove('animation');
          }
        }else{
          cmContentsImg[0].classList.remove('animation');
        }
      }else{
        chargingMethodHeading.classList.remove('animation');
      }
    }else{
      for(let a = 0; a < orderOfUseLi.length; a++){
        orderOfUseLi[a].classList.remove('animation');
      }
    }
  }
  //2)**********************************
});