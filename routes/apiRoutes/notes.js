const fs = require('fs');
const path = require('path');

function createNewAnimal(body, animalsArray) {
    const animal = body;
    animalsArray.push(animal);

    fs.writeFileSync(
      path.join(__dirname, '../data/animals.json'),
      JSON.stringify({ animalsArray }, null, 2)
    );
    return animal;
  }

  function findById(id, animalsArray) {
    const result = animalsArray.filter(animal => animal.id === id)[0];
  
  fs.writeFileSync(
      path.join(__dirname, '../data/animals.json'),
      JSON.stringify({ animalsArray }, null, 2)
    );
    return result;
  }