const { MongoClient } = require('mongodb');
const url = process.env.DATABASE_URL || 'mongodb://localhost:27017/todoDB';

async function seed() {
  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db('todoDB');
    await db.collection('tasks').insertMany([
      { id: 1, name: 'Setup Docker', status: 'done' },
      { id: 2, name: 'Fix package.json', status: 'done' },
      { id: 3, name: 'Run Pipeline', status: 'done' },
      { id: 4, name: 'Drink Tea', status: 'pending' }
    ]);
    console.log('Database Seeded Successfully!');
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}
seed();