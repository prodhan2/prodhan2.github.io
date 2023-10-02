 document.addEventListener("DOMContentLoaded", function() {
 
   var btn = document.getElementById("button");
  
   btn.addEventListener("click", function() {
     init($items);
   });

   var $items = $(".item");

   // Library: /gsap/1.19.0/TweenMax.min.js
   
   function init(items) {
     TweenMax.staggerFrom(items, .5, {
       scale: .6,
       opacity: 0,
       delay: 2,
       ease: Linear.easeOut,
       force3D: false
     }, .1);
   }
   init($items);

 });