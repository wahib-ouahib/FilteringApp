
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

    //loop through collection-item lists
    for(let i = 0;i<li.length;i++){
        let a = li[i].getElementsByTagName('a')[0];
        // If matched
        if(a.innerHTML.toUpperCase().indexOf(filterValue)>-1){
            li[i].style.display = '';
        // If it doesnt match
        }else{
            li[i].style.display = 'none';
        }
    }
   
}
