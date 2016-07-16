var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer({dest: 'uploads/'});

app.post("/", upload.single("upload-file"), function(req, res) {
	res.send({"size": req.file.size});
});

app.use(express.static('public'));

var port = process.env.PORT || 8000
app.listen(port, function() {
	console.log("  Listening on port", port);
});
