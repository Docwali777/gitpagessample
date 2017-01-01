var express = require("express");
var path = require("path")
var hbs = require("hbs")

var app = express();

app.set("port", process.env.PORT || 3000);

app.set("view engine", "hbs")
app.use(express.static(path.join(__dirname, '/public')));
hbs.registerPartials(__dirname + '/views/partials')

//app.use(express.static(__dirname + "/public"))
app.get("/", (req, res)=>{
  res.render("index")
});

app.get("/about", (req, res)=>{
  res.render("about", {
    name: " Wali Gauvin"
  })
})

app.listen(app.get("port"))
