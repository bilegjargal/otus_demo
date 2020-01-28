//We can use db object when we use mysql or mongodb
//For now I am just using json file as an data.
const db = require("./mysql-adapter");

const data = require("../../data/students.js");

/**
 * return item with corresponding id
 * if id is undefined, then return all items
 * @param {number} id
 * 
 * TODO://add to listing operation later,
 */
async function list(id) {
  if (id === undefined) {
    return data.students;
  } else {
    return data.students.filter(item => item.id === parseInt(id));
  }
}

/**
 * return filter result based on searchParam
 * @param {any} searchParam
 */
async function find(searchParam) {
  return data.students.filter(item => {
    for (let el in item) {
      if (item[el].toString().includes(searchParam)) return true;
    }
    return false;
  });
}

/**
 * return course lists
 * TODO:// add to listing operation later,
 */
async function getCourses(){
  return data.classes;
}

/**
 * TODO:
 * option is object for search criteria
 * @param {string} table 
 * @param {object} options 
 */
async function getList(table, options){

}

const dbObject = Object.freeze({
  list,
  find,
  getCourses
});

module.exports = dbObject;
