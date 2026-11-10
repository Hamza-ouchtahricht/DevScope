async function fetchData(){
         try{
       const response = await fetch("data.json"); 
       if(!response.ok){
     throw new Error("Erreur HTTP : " + response.status);
    
    
 }
  console.log(response.status);
     
 const data = await response.json();
 console.log(data);
  }
  catch (error){
     console.error("Failed to fetch data:", error.message);
     throw error;


  }

  
}

fetchData();
