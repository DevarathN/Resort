import config from "../conf/index.js";

//Implementation of fetch call to fetch all reservations
async function fetchReservations() {
  // TODO: MODULE_RESERVATIONS
  // 1. Fetch Reservations by invoking the REST API and return them
  try{
    const res = await fetch(`${config.backendEndpoint}/reservations/`)
    const ans = await res.json()
    return ans
  }
  catch{
    return null
  }
  

  // Place holder for functionality to work in the Stubs
  
}

//Function to add reservations to the table. Also; in case of no reservations, display the no-reservation-banner, else hide it.
function addReservationToTable(reservations) {
  // TODO: MODULE_RESERVATIONS
  // 1. Add the Reservations to the HTML DOM so that they show up in the table
  
  reservations.map(res=>{
    let tableBody = document.getElementById('reservation-table')
    let newdate =new Date(res.time).toLocaleString('en-IN',{month:'long',day:'numeric',year:'numeric'})
    
    let newtime =new Date(res.time).toLocaleTimeString('en-IN')
    let newbookingTime = newdate + ', '+newtime
    tableBody.innerHTML+=`
    
      <td>${res.id}</td>
      <td>${res.name}</td>
      <td>${res.adventureName}</td>
      <td>${res.person}</td>
      <td>${new Date(res.date).toLocaleString('en-IN',{day:'numeric',month:'numeric',year: "numeric"})}</td>
      <td>${res.price}</td>
      <td>${newbookingTime}</td>
      <td><button onclick='' id=${res.id} type='button' type='button' class='reservation-visit-button'>
      <a href =../detail/?adventure=${res.adventure}>'Visit Adventure'</a>
      </button></td>
      `
  })
  
  if(reservations.length!==0){
    document.getElementById('reservation-table-parent').style.display = 'block'
    document.getElementById('no-reservation-banner').style.display = 'none'
    
    
  }
  else{
    document.getElementById('reservation-table-parent').style.display = 'none'
    document.getElementById('no-reservation-banner').style.display = 'block'
  }
    
  
    
  
  //Conditionally render the no-reservation-banner and reservation-table-parent
  
  
  
 
  
  
  /*
    Iterating over reservations, adding it to table (into div with class "reservation-table") and link it correctly to respective adventure
    The last column of the table should have a "Visit Adventure" button with id=<reservation-id>, class=reservation-visit-button and should link to respective adventure page

    Note:
    1. The date of adventure booking should appear in the format D/MM/YYYY (en-IN format) Example:  4/11/2020 denotes 4th November, 2020
    2. The booking time should appear in a format like 4 November 2020, 9:32:31 pm
  */

}

export { fetchReservations, addReservationToTable };
