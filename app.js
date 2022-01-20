const express =require("express");
const path= require("path");
const app = express();
const hbs =require("hbs");

require("./db/conn");
const Register= require("./models/registers");
const Iwpuser= require("./models/iwpusers");
const { Mongoose, mongo } = require("mongoose");
const MongoClient = require('mongodb').MongoClient;

const port =process.env.PORT || 3000;

const static_path= path.join(__dirname, "../public");
const template_path= path.join(__dirname, "../templates/views");
const partials_path= path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);

app.get("/",(req,res) => {
    res.render("index")
});

app.get("/register",(req,res)=>{
    res.render("register");
})

app.get("/IWP_User1",(req,res)=>{
    res.render("IWP_User1");
})

//var fetchRouter = require('./models/fetch-route');
//app.use('/', fetchRouter);

//app.get("/iwpuser",(req,res)=>{
//    res.render("iwpuser");
//})

app.get("/IWP_User2",(req,res)=>{
    res.render("IWP_User2");
})

app.get("/IWP_User3",(req,res)=>{
    res.render("IWP_User3");
})

app.get("/login",(req,res)=>{
    res.render("login");
})

app.post("/register",async (req,res)=>{
    try{
        const registerEmployee= new Register({
            fullname : req.body.fullname,
            email : req.body.email,
            password :req.body.password
        })
        const registered =await registerEmployee.save();
        res.status(201).render("index");
    }
    catch(error){
        res.status(400).send(error);
    }
})

//app.get("/iwpuser",(req,res)=>{
//    req.body.fullname: fullname
//    res.render("iwpuser");
//})

app.get("/iwpuser", function(req, res) {
//res.send("WRONG CREDENTIALS");
res.render("iwpuser");

/*userTable=mongoose.model('registers',userSchema);

    Mongoose.find({}, function(err, Users){
      if (err)
          return done(err);
  
      if (Users) {
        console.log("Users count : " + Users.length);
        res.render('/iwpuser.ejs', {
          usersArray: Users
        });
      }
    });*/
  });



app.post("/login",async(req,res)=>{
   try{
       const email=req.body.email;
       const password=req.body.password;

      //checking from db
      const useremail=await Register.findOne({email:email});
     if(useremail.password == password){
         res.status(201).render("index")
     }
     else{
         res.send("WRONG CREDENTIALS");
     }
   }
   catch(error){
       res.status(400).send("invalid email")
   }
})

app.listen(port,() =>{
    console.log(`server is running at port no ${port}`);
}) 