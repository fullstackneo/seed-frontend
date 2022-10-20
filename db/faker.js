const { faker } = require('@faker-js/faker');
const fs = require('fs');
const path = require('path');
const data = [];
for (let i = 0; i < 50; i++) {
  data.push({
    id: faker.datatype.uuid(),
    items: {
      hours: faker.datatype.float({
        min: 1,
        max: 100,
        precision: 1
      }),
      expenses:
        '$' +
        faker.datatype.float({
          min: 20,
          max: 2000,
          precision: 0.01
        }),
      materials: new Array(5).fill()
        .map(el => faker.commerce.product())
    },
    notes: faker.lorem.paragraph(),
    dueDate: faker.date.past(),
    paidAt: faker.date.past()
  });
}

fs.writeFile(path.join(__dirname, '/data.js'), 'export default ' + JSON.stringify(data), err => err && console.log(err));
