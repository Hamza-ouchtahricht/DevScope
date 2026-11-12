
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
            // const token = "" ;
                    const response = await fetch(`https://api.github.com/users/${user_name}`
                    ,{
                     // headers: {
                     //            'Authorization': `token ${token}`
                     //           }

                    }) 
                     // const repo = await fetch(`https://api.github.com/users/${user_name}/repos`); 
                     // console.log(repo.name);
       if(!response.ok){
     throw new Error("Erreur HTTP : " + response.status);
    
    
 }
   console.log(response.status);
     
  const data = await response.json(); 
 console.log(data);

// khasni hna nht dik imag li ghadi tjini mn github wst blasa li khlitha l imag 
let userAvatar = document.querySelector("#user-avatar");

let profile_name = document.querySelector("#prfile_nom");

if(profile_name) {

}

if (userAvatar) {
  userAvatar.src = data.avatar_url;
  userAvatar.classList.remove("hidden");
  userAvatar.classList.add("rounded-full")
}



   




//  document.querySelector("#user-avatar").src = data.avatar_url;
//     document.querySelector("#name").textContent = data.name;





//   data.forEach(element => {
//      console.log(element.name)
   
//   });
   }
   catch (error){
     console.error("Failed to fetch data:", error.message);
      throw error;


   }

  
}


 fetchData();
