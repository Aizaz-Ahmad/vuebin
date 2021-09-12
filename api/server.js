const app = require('./app');
const MongoClient = require('mongodb').MongoClient;
const DAO = require('./dao');
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

console.log(process.env.CLIENT_URL, process.env.MONGO_DB_URL);

const PORT = process.env.PORT || 3000;

MongoClient.connect(process.env.MONGO_DB_URL).then(async client => {
  DAO.initCollection(client.db().collection('codes'));
  app.listen(PORT, () => console.log('listening on port ' + PORT));
});
