var models = require('../models');

exports.send = function(req, res) {
    //console.log(req.body); // help you see what is inside of req.body
    // your solution here
    var email = req.body.email;
    var content = req.body.content;
    var created = req.body.created;

    var MessageSchema = new models.Message ({
    	"email": email, 
    	"content": content,
    	"created": created
    });

    models.Message
      .find({})
      .exec(saveMessage);

 	function saveMessage(err, message_post) {
 		if(err) { 
 			console.log(err); 
 			res.send(500); 
 		}
 		var data = {
 			data: message_post
 		};
 		MessageSchema.save(function() {
 			res.redirect('/');
 		})	
 	}
};