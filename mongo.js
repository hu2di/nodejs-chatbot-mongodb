var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/test';
	
function findGamesFromCollections() {
	var kq = "HHH";
	
	MongoClient.connect(url, function(err, db) {
		if (err) {
			console.log('Unable to connect to the mongoDB server. Error:', err);
		} else {
			//HURRAY!! We are connected. :)
			console.log('Connection established to', url);

			// do some work here with the database.
			var gamesCollection = db.collection("Games");
			
			gamesCollection.find().toArray(function (err, result) {
				if (err) {
					console.log(err);
				} else if (result.length) {
					console.log('Found:', result);
					kq = 'xxx';
				} else {
					console.log('No document(s) found with defined "find" criteria!');
				}
				//Close connection
				db.close();
			});
		}
	});
	
	return kq;
}

var result = findGamesFromCollections();
console.log("Result: " + result);