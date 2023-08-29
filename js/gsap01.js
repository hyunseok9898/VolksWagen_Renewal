$(document).ready(function(){
  $(".box1").click(function(){
    gsap.from(".box1", {
      rotation:27,
      x: 100,
      duration:1
    });
  })
})