const express =require ("express");
const path =require ("path");
//const { Console } = require("console");
//const apiRoutes = require("./Routes/apiRoutes.js")
var PORT = process.env.PORT || 3000;

const app= express();

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static ('public'));


//te
//app.use(apiRoutes);
require("./Routes/apiRoutes")(app)

app.get("/notes", (req, res) => {
    console.log("/notes")

   res.sendFile (path.join (__dirname, './public/notes.html') );
});

app.get("/", (req, res) => {
    console.log("/ index")
    res.sendFile (path.join (__dirname, './public/index.html') );
});


app.listen(PORT, () => {
    console.log (`Listening to port: ${PORT}`);
});

