$(document).ready(function(){
  let endPoint = $('#sec02').offset().top + $('#sec02').outerHeight();
  /* sec02 이미지 변경 */
  gsap.timeline({
      scrollTrigger: {
          trigger: '#wrapper',
          start: 'top top',
          // end: '+='+($('#sec02').outerHeight()),
          // end: '+=5000',
          end:'+='+(endPoint),
          scrub: 0.5,
          pin: true,
      }
  })
  .fromTo('.coverBox .left_box .cover_bg.cover_bg_t', {width: '100%', height: '0%'}, {width: '100%', height: '0%', ease: 'none', duration: 0.3}, 0.5)
  .fromTo('.coverBox .left_box .cover_bg.cover_bg_b', {width: '100%', height: '0%'}, {width: '100%', height: '0%', ease: 'none', duration: 0.3}, 0.5)
  .fromTo('.coverBox .left_box .cover_bg.cover_bg_r', {width: '50%', height: '100%'}, {width: '0%', ease: 'none', duration: 0.3}, 0.5)
  .fromTo('.coverBox .left_box .cover_bg.cover_bg_l', {width: '50%', height: '100%'}, {width: '0%', ease: 'none', duration: 0.3}, 0.5)

  .fromTo('.coverBox .right_box .cover_bg.cover_bg_t', {width: '100%', height: '0%'}, {height: '50%', ease: 'none', duration: 0.3}, 0.5)
  .fromTo('.coverBox .right_box .cover_bg.cover_bg_b', {width: '100%', height: '0%'}, {height: '50%', ease: 'none', duration: 0.3}, 0.5)
  .fromTo('.coverBox .right_box .cover_bg.cover_bg_r', {width: '0%', height: '100%'}, {width: '50%', ease: 'none', duration: 0.3}, 0.5)
  .fromTo('.coverBox .right_box .cover_bg.cover_bg_l', {width: '0%', height: '100%'}, {width: '50%', ease: 'none', duration: 0.3}, 0.5)

  .fromTo('.cont_box.text_box .text_1', {opacity: 1, ease: 'none', duration: 0.1}, {opacity: 0, ease: 'none', duration: 0.1}, 0.5)
  .fromTo('.cont_box.text_box .text_2', {opacity: 0, ease: 'none', duration: 0.1}, {opacity: 1, ease: 'none', duration: 0.1}, 0.8)

  .to('.motion_img .img_1', {opacity: '0', ease: 'none', duration: 0}, 1)
  .fromTo('.coverBox .right_box .cover_bg.cover_bg_t', {width: '100%', height: '50%'}, {height: '0%', ease: 'none'}, 1.5)
  .fromTo('.coverBox .right_box .cover_bg.cover_bg_b', {width: '100%', height: '50%'}, {height: '0%', ease: 'none'}, 1.5)
  .fromTo('.coverBox .right_box .cover_bg.cover_bg_r', {width: '0%', height: '100%'}, {width: '0%', height: '100%', ease: 'none'}, 1.5)
  .fromTo('.coverBox .right_box .cover_bg.cover_bg_l', {width: '0%', height: '100%'}, {width: '0%', height: '100%', ease: 'none'}, 1.5)

  .fromTo('.coverBox .left_box .cover_bg.cover_bg_t', {width: '100%',height: '0%'}, {height: '50%', ease: 'none', duration: 0.3}, 1.5)
  .fromTo('.coverBox .left_box .cover_bg.cover_bg_b', {width: '100%',height: '0%'}, {height: '50%', ease: 'none', duration: 0.3}, 1.5)
  .fromTo('.coverBox .left_box .cover_bg.cover_bg_r', {width: '0%',height: '100%'}, {width: '50%', ease: 'none', duration: 0.3}, 1.5)
  .fromTo('.coverBox .left_box .cover_bg.cover_bg_l', {width: '0%',height: '100%'}, {width: '50%', ease: 'none', duration: 0.3}, 1.5)

  .fromTo('.cont_box.text_box .text_2', {opacity: 1, ease: 'none', duration: 0.1}, {opacity: 0, ease: 'none', duration: 0.1}, 1.5)
  .fromTo('.cont_box.text_box .text_3', {opacity: 0, ease: 'none', duration: 0.1}, {opacity: 1, ease: 'none', duration: 0.1}, 1.8)

  .to('.motion_img .img_2', {opacity: '0', ease: 'none', duration: 0}, 2)
  .fromTo('.coverBox .right_box .cover_bg.cover_bg_t', {width: '100%', height: '0%'}, {height: '50%', ease: 'none'}, 2.5)
  .fromTo('.coverBox .right_box .cover_bg.cover_bg_b', {width: '100%', height: '0%'}, {height: '50%', ease: 'none'}, 2.5)
  .fromTo('.coverBox .right_box .cover_bg.cover_bg_r', {width: '0%', height: '100%'}, {width: '50%', height: '100%', ease: 'none'}, 2.5)
  .fromTo('.coverBox .right_box .cover_bg.cover_bg_l', {width: '0%', height: '100%'}, {width: '50%', height: '100%', ease: 'none'}, 2.5)

  .fromTo('.coverBox .left_box .cover_bg.cover_bg_t', {width: '100%',height: '0%'}, {height: '0%', ease: 'none', duration: 0.3}, 2.5)
  .fromTo('.coverBox .left_box .cover_bg.cover_bg_b', {width: '100%',height: '0%'}, {height: '0%', ease: 'none', duration: 0.3}, 2.5)
  .fromTo('.coverBox .left_box .cover_bg.cover_bg_r', {width: '50%',height: '100%'}, {width: '0%', ease: 'none', duration: 0.3}, 2.5)
  .fromTo('.coverBox .left_box .cover_bg.cover_bg_l', {width: '50%',height: '100%'}, {width: '0%', ease: 'none', duration: 0.3}, 2.5)

  .fromTo('.cont_box.text_box .text_3', {opacity: 1, ease: 'none', duration: 0.1}, {opacity: 0, ease: 'none', duration: 0.1}, 2.5)
  .fromTo('.cont_box.text_box .text_4', {opacity: 0, ease: 'none', duration: 0.1}, {opacity: 1, ease: 'none', duration: 0.1}, 2.8)    
});