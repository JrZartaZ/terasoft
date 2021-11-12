const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });

const ConnectDatabase = async () => {

	console.log( process.env.DB_MONGO_URI );

	mongoose.connect( process.env.DB_MONGO_URI, {
			useNewUrlParser: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		}
	);

	mongoose .connection .on( 'error', console.error.bind(console, `Connection error database: `));
	mongoose .connection .once( 'open', () => {
		console.log( `Connected successfully, Database name: ${ mongoose .connections[ 0 ] .name }` );
	});

};

module.exports = ConnectDatabase;
