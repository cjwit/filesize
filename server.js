var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer({dest: 'uploads/'});

app.post("/", upload.single("upload-file"), function(req, res) {
	res.send({"size": req.file.size});
});

app.use(express.static('public'));

app.listen(8000, function() {
	console.log("  Listening on port 8000");
});
