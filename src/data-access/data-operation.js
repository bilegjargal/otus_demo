//We can use db object when we use mysql or mongodb
//For now I am just using json file as an data.
const db = require("./adapter");

const data = require('../../data/students.json');

/**
 * return item with corresponding id
 * if id is undefined, then return all items
 * @param {number} id 
 */
async function list(id) {
  if (id === undefined) {
    return data.students;
  } else {
    return data.filter((item) => item.id === id);
  }
}

/**
 * return filter result based on searchParam
 * @param {any} searchParam 
 */
async function find(searchParam) {
  return data.filter((item) => {
    for (let el in item) {
      if (item[el].includes(searchParam))
        return true;
    }
    return false;
  });
}

const dbObject = Object.freeze({
  list, find
});

module.exports = dbObject;