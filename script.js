
  import { input_search1 } from "./list.js";

  import{user_name} from "./list.js";

// import{analyser} from "./list.js";

import{button_serch1} from "./list.js" ;
;





if(button_serch1){
button_serch1.addEventListener("click", (e) =>{
   e.preventDefault();
   
 
   window.open("./show.html", "_blank");
}
);
  }



async function fetchData(){

         try{
            //  const token = "" ;
                    const response = await fetch(`https://api.github.com/users/${user_name}`
                    ,{
                      // headers: {
                      //            'Authorization': `token ${token}`
                      //           }

                    }) 
                     //  const repo = await fetch(`https://api.github.com/users/${user_name}/repos`); 
                     //  console.log(repo.name);
       if(!response.ok){
     throw new Error("Erreur HTTP : " + response.status);
    
    
 }
   console.log(response.status);
     
  const data = await response.json(); 
 console.log(data);

// khasni hna nht dik imag li ghadi tjini mn github wst blasa li khlitha l imag 
let userAvatar = document.querySelector("#user-avatar");

let profile_name = document.querySelector("#prfile_nom");
let profile_log = document.querySelector("#prfile_log");
let prfile_bio = document.querySelector("#prfile_bio");
let profil_localisation = document.querySelector("#profil_localisation");
let profil_cree = document.querySelector("#profil_cree");



if(profile_name) {

  profile_name.textContent = data.name || data.login
}
if(profile_log){
  profile_log.textContent = `@${data.login}`
}

if (userAvatar) {
  userAvatar.src = data.avatar_url;
  userAvatar.classList.remove("hidden");
  userAvatar.classList.add("rounded-full")
}
 if(prfile_bio) {

  if(data.bio!=null){

    prfile_bio = data.bio;
  }
  }
 
  
  const date = new Date(data.created_at);
  const month = date.toLocaleDateString("fr-FR", {month:"long"});
  const year = date.getFullYear();
  const all_from = `Member depuis ${month} ${year}`;

  const stat_repo = document.querySelector("#stat-repos");

  const stat_statut = document.querySelector("#stat-followers");

  const stat_folowing = document.querySelector("#stat-following");





  

   
   if(profil_cree) {
     profil_cree.textContent = all_from;
   }

  //  public_repos

  if(stat_repo){
    stat_repo.textContent = data.public_repos;
  }

    if(stat_statut) {
      stat_statut.textContent = data.followers;

    }

    if(stat_folowing) {
      stat_folowing.textContent = data.following
;

    }

    const button_voir = document.querySelector("#prfile_link");

    if(button_voir){
button_voir.addEventListener("click", (e) =>{
   e.preventDefault();
   
 
   window.open("./show.html", "_blank");
}
);



 }
}








   




//  document.querySelector("#user-avatar").src = data.avatar_url;
//     document.querySelector("#name").textContent = data.name;





//   data.forEach(element => {
//      console.log(element.name)
   
//   });
   
   catch (error){
     console.error("Failed to fetch data:", error.message);
      throw error;


   }

  
}


 fetchData();
