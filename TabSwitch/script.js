let tabs = document.querySelectorAll(".tab");
tabs.forEach((tab)=>{
     tab.addEventListener('click', function(){
          let activetab = tab.querySelector(".active");
          console.log(activetab);
     })
     
})