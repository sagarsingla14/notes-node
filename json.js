console.log('JSON starting here !!');

// CONVERTIGN OBJECT INTO A JSON STRING
const fs = require('fs');

var noteObject ={
  title : 'title is here',
  body : 'body is here'
};

var originalNote = JSON.stringify(noteObject);
console.log(originalNote);
fs.writeFileSync('notes.json', originalNote);

var originalNoteJson = fs.readFileSync('notes.json');
var originalNoteObject = JSON.parse(originalNoteJson);
console.log(originalNoteObject);

console.log(originalNoteObject.body);




// var obj = {
  //   name : "Sagar Singla",
  //   Age : 20
  // }

  // var stringObj = JSON.stringify(obj);
  //
  // console.log(typeof stringObj);
  // console.log(stringObj);

  // CONVERTIG STRING INTO OBJECT
  // var jsonString = '{"name":"Sagar Singla","age":25}';
  // var jsonObject = JSON.parse(jsonString);
  // console.log(typeof jsonObject);
  // console.log(jsonObject);
