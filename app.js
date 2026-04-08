const { MongoClient } = require('mongodb');
const url = process.env.MONGO_URL || 'mongodb://localhost:27017/taskdb'; [cite: 19]
let db;

MongoClient.connect(url)
  .then(client => {
    db = client.db('taskdb');
    console.log('Connected to MongoDB');
  })
  .catch(error => console.error(error));


app.get('/tasks', async (req, res) => {
  const tasks = await db.collection('tasks').find().toArray();
  res.json(tasks);
});