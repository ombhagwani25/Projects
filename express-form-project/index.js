const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static("public"));

app.set('view engine', 'ejs');


// Middleware to parse JSON bodies
app.use(express.json());
app.use(bodyParser.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));


app.set('views', path.join(__dirname, 'public', 'views'));

app.get("/", (req,res)=> {
    res.render('index');

})


app.post("/signup" , async (req,res)=> {
    const name = req.body.username;
    const email = req.body.email;
    const password= req.body.password;      

    const tempUser = new userModel({
        name : name,            
        email : email,
        password : password
    })

    const existing = await userModel.findOne({email : email});
    if(existing) {
        res.render('existing' ,{email : email});
    } else {
        tempUser.save().then(()=> {
        console.log('user created successfully !');
        res.render('newuser' , {name : name, email : email});
    }).catch(()=> {
        console.log('error creating user :' + err);
    });
    
    }   
    
    

   
})

app.get("/forgotpassword" , (req,res) => {
    res.render('forgotpassword');
})
app.post("/changepassword", async (req, res) => {
    
    const useremail = req.body.useremail;
    const newpassword = req.body.newpassword;
    const userFound = await userModel.findOne({ email: useremail });
  
    if (userFound) {
      userFound.password = newpassword;
  
      try {
        await userFound.save();
        res.send("Password changed successfully, please login again <br> <a href='/'>Login</a>");
      } catch (err) {
        console.log("Error occurred while changing the password:", err);
        res.send("There was a problem changing the password , please try again ! <br> <a href='/forgotpassword'>Go Back</a>");
      }
    }
  });
  

app.post("/signin" , async (req, res)=> {
    console.log("ent signin");
   const email = req.body.email;
   const password = req.body.password;
   
   const userFound = await userModel.findOne({email : email});
//    console.log(userFound);
   if(userFound) {
      
    if(userFound.email === email && userFound.password === password) {
        res.render('dashboard' , { name : userFound.name , email : email})
    } else {
        res.render('error' , {msg : "email or password is incorrect"});
    }
   } else {
    res.render ('error' , {msg : "user not found"})
   }
})

app.listen(3000);

// mongo db connections

mongoose.connect("mongodb://127.0.0.1:27017/signupform").then( ()=> {
    console.log("Connection Successfull");
}).catch((err)=> {
    console.log("Error while connecting to mongo db : " + err);
})

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
});

const userModel = mongoose.model("users", userSchema);







