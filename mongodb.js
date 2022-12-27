const {MongoClient} = require('mongodb')
const url= 'mongodb://0.0.0.0:27017';
const databaseName='E-comm'
const client= new MongoClient(url);

async function dbConnection()
{
    let result = await client.connect();
    db= result.db(databaseName);
    return collection = db.collection('products');
}

module.exports = dbConnection;