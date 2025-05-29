require('dotenv').config();
const mongoose = require('mongoose');
const Subject = require('./models/Subject');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const subjects = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'React' },
  { name: 'Node' },
  { name: 'Express' },
  { name: 'MERN' },
  { name: 'C++' },
  { name: 'DSA' },
  { name: 'ML' },
];

async function seed() {
  try {
    await Subject.deleteMany({});
    await Subject.insertMany(subjects);
    console.log('Subjects seeded!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
