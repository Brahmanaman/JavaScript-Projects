const users = [
  {
    name: "Aman Sharma",
    pic: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1480",
    bio: "Full-stack developer passionate about creating scalable web apps using .NET Core and Angular."
  },
  {
    name: "Priya Mehta",
    pic: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1364",
    bio: "UI/UX designer who loves turning ideas into beautiful and intuitive interfaces."
  },
  {
    name: "Rohit Verma",
    pic: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387",
    bio: "Data analyst exploring trends and insights through Python, Pandas, and Power BI."
  },
  {
    name: "Sneha Patel",
    pic: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1372",
    bio: "Mobile app developer experienced in Ionic and Capacitor, focused on user-first experiences."
  },
  {
    name: "Arjun Rao",
    pic: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1365",
    bio: "DevOps engineer enthusiastic about cloud automation, Docker, and CI/CD pipelines."
  }
];
let cards = document.querySelector(".cards");
let notfound = document.querySelector(".not-found");

function showUsers(users){
     if(!users.length){
          notfound.textContent = "user not found";
     }
     else{
          notfound.textContent = "";
          users.forEach(user => {
          let card = document.createElement("div");
           card.classList.add("card");
          let img = document.createElement("img");
          img.setAttribute("src", user.pic);
          
          let content = document.createElement("div");
          content.classList.add("content");
          let h3 = document.createElement("h3");
          h3.textContent = user.name;
          let p = document.createElement("p");
          p.textContent = user.bio;
          content.appendChild(h3);
          content.appendChild(p);

          card.appendChild(img);
          card.appendChild(content);
          cards.appendChild(card);
     });
     }
}


let username = document.querySelector("input");
username.addEventListener("input", function(){
     cards.innerHTML = "";
     let newusers = users.filter((user)=>{
          return user.name.toLocaleLowerCase().startsWith(username.value.toLocaleLowerCase()); 
     });
     showUsers(newusers)
})

showUsers(users);