const app = require('./app');
const MongoClient = require('mongodb').MongoClient;
const DAO = require('./dao');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
MongoClient.connect(process.env.MONGO_DB_URL).then(async client => {
  DAO.initCollection(client.db().collection('codes'));
  app.listen(PORT, () => console.log('listening on port ' + PORT));
});
