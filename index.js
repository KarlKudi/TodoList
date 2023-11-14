import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let todoList = [];
let workList = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res) =>{
    res.render("index.ejs",{todoList: todoList});
});

app.get("/work", (req,res) =>{
    res.render("workList.ejs",{workList: workList});
});

app.post("/create", (req,res) =>{
    todoList.push(req.body.task); //Add string from form in index.ejs to todoList Array
    res.render("index.ejs",{todoList: todoList});
});

app.post("/workCreate", (req,res)=>{
    workList.push(req.body.workTask);
    res.render("workList.ejs",{workList: workList});
})

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
});