import { MOCKAPI_URL } from "./config.js";

const shortlist_con = document.querySelector("#shortlist_con");
let allcan = [];


function afficher(liste){
  shortlist_con.innerHTML = "";
  liste.forEach(c=> {
    shortlist_con.innerHTML += `
        <div class="candidat-card bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4 transition">

          <div class="flex items-center gap-4">
            <div class="relative p-0.5 rounded-full bg-cyan-500">
              <img src="${c.avatar_url}" alt="${c.login}"
                class="w-14 h-14 rounded-full bg-slate-950 object-cover"/>
            </div>

            <div class="space-y-1">
              <h3 class="text-white font-bold text-base">${c.name || c.login}</h3>
              <span class="text-gray-400 text-xs">@${c.login}</span>
              <p class="text-gray-400 text-xs italic">${c.bio || "Aucune note."}</p>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-3 text-xs">
           
             <select name="type" id="depo_langague" class="px-3 py-1 rounded-full border border-cyan-800 bg-cyan-950 text-cyan-400">
            <option value="" >type</option>
            <option value="acontacter">À contacter</option>
            <option value="refuse">refuse</option>
            <option value="retenu">retenu</option>
            <option value="entretion">Entretien</option>
          
            
          </select>

            <button class="px-3 py-1.5 rounded-lg text-cyan-400 border border-cyan-800 bg-cyan-950/30 hover:bg-cyan-900/50 transition modifier">
              ✎ Modifier
            </button>

            <button class="px-3 py-1.5 rounded-lg text-red-400 border border-red-900 bg-red-950/30 hover:bg-red-900/50 transition supprimer">
              ✕ Supprimer
            </button>
          </div>

        </div>`
  })
};

let supprimer_buttons = document.querySelectorAll(".modifier");
if(supprimer_buttons){
function open_modifier_modal() {
  console.log("hamza is the best");

}

supprimer_buttons.forEach((hamza_button) => {
  hamza_button.addEventListener("click", open_modifier_modal);
});

}
async function shortlist() {
  try {
    const res = await fetch(MOCKAPI_URL);
    if(!res.ok) {
      throw new Error("Erreur HTTP: " + res.status);
    }

    const candidats = await res.json();
    console.log(candidats);
    allcan = candidats;
    afficher(allcan);

  } catch (error) {
    console.error("Failed to load shortlist:", error.message);
  }
}

const search_candidat = document.querySelector("#search_candidat");


function affiche_name_short () {
const input_can = search_candidat.value.trim().toLowerCase();
if(input_can === ""){
  afficher(allcan);
}
  else{
    const filter_names = allcan.filter(c =>{
      const nom = (c.name || c.login).toLowerCase();
      return nom.includes(input_can);
    });
    afficher(filter_names);
  }

}
if(search_candidat){
  search_candidat.addEventListener("input" , affiche_name_short);
}
  


shortlist();