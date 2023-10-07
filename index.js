import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let todoList = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res) =>{
    res.render("index.ejs",{todoList: todoList});
});

app.post("/create", (req,res) =>{
    todoList.push(req.body.task); //Add string from form in index.ejs to todoList Array
    res.render("index.ejs",{todoList: todoList});
});

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
});