var express = require("express");
var app = express();
app.set("port", process.env.PORT || 3000);

app.use(express.static(__dirname + "/public"))
app.get("/", (req, res)=>{
  res.render("home")
})

app.get("/about", (req, res)=>{
  res.render("about")
})

app.listen(app.get("port"))
