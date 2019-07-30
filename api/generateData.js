const faker = require('faker');

const database = { messages: [] };

for (var i=1; i<=30; i++) {
  database.messages.push({
    id: i,
    date: faker.date.between('2019-06-30', '2019-05-30'),
    name: faker.random.words(),
    message: faker.lorem.sentences(3,3),
    grateful: faker.lorem.sentence()
  });
}

console.log(JSON.stringify(database));