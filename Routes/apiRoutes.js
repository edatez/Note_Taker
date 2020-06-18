const fs=require("fs")

let notes=[]
fs.readFile("./db/db.json", function(err, data){
    notes = JSON.parse (data),
    console.log(notes)
});





module.exports =  function(app){

   
  

app.get("/api/notes", function (req, res) {
    console.log("api notes")
     res.json(notes);
});

app.post("/api/notes", function (req,res){
    console.log (req.body)
    notes.push(req.body)

    // push the new note inside the notes array 
    // and write the file 
    fs.writeFile ("./db/db.json", JSON.stringify(notes), function (err, data){    
    })
    res.json("done")

  
});
// delete

app.delete("/api/notes/:id", function (req,res){
    console.log (req.params)
 //   notes.push(req.body)

 //remove the note from the array based on the id you are receiving 

    fs.writeFile ("./db/db.json", JSON.stringify(notes), function (err, data){    
    })
    res.json("done")
})
}
  