var MongoClient = require('mongodb').MongoClient;
var dbconfigurations = require('../dbconfig.json');

var db;

// Initialize connection once
exports.init = function(){
    let dburl = dbconfigurations.config.dbconfig.db_type +"://"
        +dbconfigurations.config.dbconfig.host_url+":"
        +dbconfigurations.config.dbconfig.port +"/"
        +dbconfigurations.config.dbconfig.dbname;
    console.log("database URL"+dburl);

    MongoClient.connect(dburl,
                            {poolSize:dbconfigurations.config.dbconfig.pool_size,
                                w: dbconfigurations.config.dbconfig.write_confrim_wait},
                        function(err, database){
                            if(err) throw err;
                            db = database;
                        }
    );

    console.log("db connection successful!");
}
