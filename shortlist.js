import { MOCKAPI_URL } from "./config.js";

const shortlist_con = document.querySelector("#shortlist-container");

async function shortlist() {
  try {
    const res = await fetch(MOCKAPI_URL);
    if(!res.ok) {
      throw new Error("Erreur HTTP: " + res.status);
    }

    const candidats = await res.json();
    console.log(candidats);

    shortlist_con.innerHTML = "";

    candidats.forEach(c => {
      shortlist_con.innerHTML += `
        <div class="candidat-card bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-center gap-4">
            <img src="${c.avatar_url}" alt="${c.login}"
              class="candidat-avatar w-14 h-14 rounded-full object-cover"/>
            <div>
              <h3 class="text-white font-bold">${c.name || c.login}</h3>
              <span class="text-gray-400 text-xs">@${c.login}</span>
              <p class="text-gray-400 text-xs">${c.bio || ""}</p>
            </div>
          </div>
        </div>`;
    });

  } catch(error) {
    console.error("Failed to load shortlist:", error.message);
  }
}

shortlist();