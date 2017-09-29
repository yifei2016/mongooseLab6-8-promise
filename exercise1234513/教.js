// XMLRequest 
// "{email: 'hello.yifei@icloud.com', password: 'Wang8494977'}"


app.use(body.parser(JOSON))

app.post("/users/auth",function(req,res){

	var email = req.body.email; // yifei
	var password = req.body.password; // Wang8494977

	var user =  db.users.find({email: email});

	if(password === user.password){

 		db.users.update({_id: user._id},{$set: {loggedinAt: new Date() }});
 		
 		res.render("profile",{
				email: user.email,
				loggedinAt: user.loggedinAt
			});
		
		res.status(200)
			.json({
				email: user.email,
				loggedinAt: user.loggedinAt
			});

	}else{
		res.status(401);
	}
})
var a = "{'email': 'dasdsa'}"

---
a = {email: "data"}
a.email