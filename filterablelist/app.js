
//Get Input Element
let filterInput = document.getElementById("filterInput");
//Add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
    // Get value of input

    let filterValue = document.getElementById("filterInput").value.toUpperCase();

    // Get names from ul
    let ul = document.getElementById('names');
    // Get lists from ul
    let li = ul.querySelectorAll('li.collection-item');
    console.log(li);
    //loop through collection-item lists
    
   
}
