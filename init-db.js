db = db.getSiblingDB('taskdb');
db.tasks.drop();
db.tasks.insertMany([
  { id: 1, name: 'Setup Lab 8', status: 'completed' },
  { id: 2, name: 'Configure MongoDB', status: 'pending' },
  { id: 3, name: 'Run CI/CD Pipeline', status: 'pending' }
]);