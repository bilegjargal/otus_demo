const dbObject = require('../data-access/data-operation.js');

async function listStudents(httpRequest) {
  const headers = {
    'Content-Type': 'application/json'
  }
  try {

    const list = await dbObject.list(httpRequest.params.id);
    return {
      headers,
      statusCode: 200,
      body: list
    }
  } catch (e) {
    console.log(e);
    return{
      headers,
      statusCode: 400,
      body: {
        error: e.message
      }
    }
  }
}

async function getStudent() {
  try {
    await dbObject.find();
  } catch (error) {
    console.log(error);
  }
}

module.exports = Object.freeze({
  listStudents,
  getStudent
});