var notestitle = document.getElementById('title');
var notesDescription = document.getElementById('desc')

var allnotes = [];

//if the content loaded then we are setting the local storage data to object formate usinng JSON.parse to allusers array
    document.addEventListener('DOMContentLoaded', function(){
     //to get local stotrage items
    //to strore json formate to array or object
 
    if(localStorage.getItem('notes')){ //checking the notes key is present in local stoarge or not
        allnotes =JSON.parse(localStorage.getItem('notes')) //setting that notes key data from localstorage to array(allnotes) 
        console.log(allnotes);
    }else{
        allnotes = [];
    }


    //index.html printing all data
    var container =  document.getElementById('notes-container');
    console.log(allnotes, "hh");
    display();
    function display() {
        if (allnotes.length == 0) {
            container.innerHTML = `<h1 class="text-center">No notes found...</h1>`
        }
        else {
            allnotes.map((item, index) => {
                container.innerHTML += `
           <div class="col-12 col-md-4 mb-3 ">
           <div class="card p-3 h-100 shadow d-flex flex-column justify-content-between">
       <div>
       <h1 class="fs-4 fw-bold">${item.title}</h1>
       <p class="fs-5 text-secondary">${item.description}</p>
       </div>

           <div class="d-flex gap-3">
           <button class="btn btn-primary w-100">Edit</button>
           
           <button class="btn btn-danger w-100" onclick="deleteNotes(${index})>Delete</button>
           </div>
       </div>
           </div>
            `
            })
        }
    }
})

function deleteNotes(index) {
    console.log(allnotes)
    allnotes.splice(index, 1)
    console.log(allnotes)
    localStorage.setItem("notes", JSON.stringify(allnotes))
    display()
}


function saveNotes(e){
    e.preventDefault(); //to avoid page refresh

   console.log(allnotes);
   //storing all the form data into object 
    const newNotes = {
        title:notestitle.value,
        description:notesDescription.value
    }

    //we are setting the new data into local storage using one key
     // to convert  the objects or array to josn formate we can use JSON.stringify(object or array)

    allnotes.push(newNotes); //adding new data to array and let upload this array to local stoarge

    localStorage.setItem("notes",JSON.stringify(allnotes) )

    console.log(newNotes);
    alert('notes created')
    //after save the data we are redirecting to home page
    // window.href = '/index.html'
    notestitle.value = "";
    notesDescription.value = ""
}



