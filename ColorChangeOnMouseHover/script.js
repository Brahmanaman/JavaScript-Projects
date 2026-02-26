let box = document.querySelector(".box")

box.addEventListener("mousemove", function(e){
     let boxRect = box.getBoundingClientRect();
     let boxMid = boxRect.width / 2;
      let boxLeftSide = e.clientX - boxRect.left;

      
      if(boxLeftSide < boxMid){
           let mapPoint = gsap.utils.mapRange(0, boxMid, 255, 0, boxLeftSide);
           let opacity = gsap.utils.mapRange(0, boxMid, 1, 0, boxLeftSide);
          gsap.to(box, {
               backgroundColor:`rgba(${mapPoint},0,0, ${opacity})`
      })
      }
      else{
          let rightSide = e.clientX - boxMid;
          let mapPoint = gsap.utils.mapRange(boxMid, boxRect.width, 0, 255, rightSide);
          let opacity = gsap.utils.mapRange(boxMid, boxRect.width, 0, 1, rightSide);
          gsap.to(box, {
               backgroundColor:`rgba(0,0,${mapPoint}, ${opacity})`
          })
      }
});

box.addEventListener("mouseleave", function(e){
     gsap.to(box, {
          backgroundColor:'white',
          ease:"power1.inOut"
     })
})