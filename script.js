
  import { input_search1 } from "./list.js";

  // import{user_name} from "./list.js";

// import{analyser} from "./list.js";

import{button_serch1} from "./list.js" ;
;
let user_name = sessionStorage.getItem("username") || "" ;
const input_search2 = document.querySelector("#input_search2");
if(input_search2 && user_name){
  input_search2.value = user_name;
}
let button_search2 = document.querySelector("#button_search2");

if(button_search2){
  button_search2.addEventListener("click", (e) =>{
    e.preventDefault();
  
 user_name = input_search2.value.trim() 
  fetchData();
  fetchrepo();
  })
}


if(button_serch1){
button_serch1.addEventListener("click", (e) =>{
   e.preventDefault();

   user_name = input_search1.value.trim();
  if(user_name){
    sessionStorage.setItem("username", user_name);
      
  }
   
 
   window.open("./show.html", "_blank"); 
}
);
  }



async function fetchData(){

         try{
              // const token = "" ;
                    const response = await fetch(`https://api.github.com/users/${user_name}`
                      
                    ,{
                      //  headers: {
                      //             'Authorization': `token ${token}`
                      //            }

                    }) 
                       
       if(!response.ok){
     throw new Error("Erreur HTTP : " + response.status);
    
    
 }
   console.log(response.status);
   console.log(user_name);
     
  const data = await response.json(); 
 console.log(data);

// khasni hna nht dik imag li ghadi tjini mn github wst blasa li khlitha l imag 
let userAvatar = document.querySelector("#user-avatar");

let profile_name = document.querySelector("#prfile_nom");
let profile_log = document.querySelector("#prfile_log");
let prfile_bio = document.querySelector("#prfile_bio");
let profil_localisation = document.querySelector("#profil_localisation");
let profil_cree = document.querySelector("#profil_cree");

if(profil_localisation){
  profil_localisation.textContent = data.location || "Aucunt Localisation"
}



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

    
  const profil_link = document.getElementById("prfile_link");

   profil_link.href = `https://github.com/${user_name}`;

   console.log(user_name);

//     if(button_voir){
// button_voir.addEventListener("click", (e) =>{
//    e.preventDefault();
   
 
//    window.open("./show.html", "_blank");
// }
// );



//  }
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

 async function fetchrepo(){

          try{
              
                     const res = await fetch(`https://api.github.com/users/${user_name}/repos`
                     ,{
                    

                     }) 
                       
        if(!res.ok){
      throw new Error("Erreur HTTP : " + res.status);
    
    
  }
    console.log(res.status);
     
   const repos = await res.json(); 
  console.log(repos);

 const repos_cont = document.querySelector("#repos_cont");

 if(repos_cont) {
  repos_cont.textContent = repos.length
  }

  const repo_details = document.getElementById("repos-container");

  repo_details.innerHTML = "";

 

  console.log(repos.length);

    for(let i = 0; i<repos.length ;i++){
       repo_details.innerHTML += `<div class="bg-[#141822]/70 border border-gray-800/80 hover:border-gray-700 rounded-xl p-5 flex flex-col justify-between space-y-4 transition">
             <div>
               <div class="flex items-center gap-2 text-white font-semibold text-sm">
                 <span class="text-cyan-400 font-mono" >🗂️</span>
                 <span class="repo-name truncate min-h-[20px] test" ></span>
               </div>
               <p class="repo_desc text-xs text-gray-400 mt-2 line-clamp-2 min-h-[16px]"></p>
             </div>

             <div class="space-y-2 pt-2">
               <div class="flex items-center gap-4 text-xs font-mono-code">
                 <span class="repo_lang text-gray-300 flex items-center gap-1 min-h-[16px]"></span>
                 <span class="repo_stars text-yellow-500 flex items-center gap-1"> <span class="stars-count"></span></span>
                 <span class="repo_forks text-cyan-400 flex items-center gap-1"> <span class="forks-count"></span></span>
               </div>
               <p class="repo_updated text-[11px] font-mono- text-gray-500 min-h-[16px]"></p>
             </div>
           </div> `;
           ;
        
            

          //  let name_tes = document.querySelector("#test")

          //  repos.forEach(repo => {

          //   name_tes.textContent= repo.name;
            
          //  });

        

          //  console.log(name_tes);

    
    }

     let name_tes = document.querySelectorAll(".test");
     let desc = document.querySelectorAll(".repo_desc");
     let language = document.querySelectorAll(".repo_lang");
     let repo_stars = document.querySelectorAll(".repo_stars");
     let repo_forks = document.querySelectorAll(".repo_forks");
     let repo_updated = document.querySelectorAll(".repo_updated");


      

    console.log(name_tes.length)
     for(let i = 0 ; i< repos.length ;i++){

      name_tes[i].textContent = repos[i].name
      desc[i].textContent =repos[i].description || "Aucune description."
      language[i].textContent =repos[i].language
       repo_stars[i].textContent= `★ ${repos[i].stargazers_count}`;
       repo_forks[i].textContent = `⑂  ${repos[i].forks_count}`;
      

        let date_repo = new Date(repos[i].updated_at);
        let lyoma = new Date();
        console.log(lyoma);
        let diff_days = lyoma - date_repo;
        let diff = Math.floor(diff_days / (1000 * 60 * 60 * 24));
        
     
       

     let date_repo_all = `Mis a jour il ya ${diff} jour`;
     for(let j = repos.length -1;j>=i; j--){
          repo_updated[j].textContent =  date_repo_all;
      }
       

     }
       //hada description
   



   



//  let name_tes = document.querySelector("#test")

//             repos.forEach(repo => {

//              name_tes.textContent= repo.name;
            
//             });










  



     }

    








   




 
   
    catch (error){
      console.error("Failed to fetch data:", error.message);
       throw error;


    }

  
 }



 fetchData();

fetchrepo();
