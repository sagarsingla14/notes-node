console.log('Starting Notes !');

const fs = require('fs');
var fetchNotes = () => {
  try {
    var data = fs.readFileSync('notes-data.json');
    return JSON.parse(data);
  }
  catch (e) {
    return [];
  }
};


var saveNotes = (arrNotes) => {
  var data = JSON.stringify(arrNotes);
  fs.writeFileSync('notes-data.json',data);
};

var addNote = (title, body) =>  {
  arrNotes =  [];
  var note = {
     title,
     body
  };
  arrNotes = fetchNotes();
  var duplicatesPresent = arrNotes.filter((note) => {
    return note.title === title;
  });
  if(duplicatesPresent.length === 0){
    arrNotes.push(note);
    saveNotes(arrNotes);
    return note;
  }
};

var readNote = (title) => {
  var fetchData = fetchNotes();
  var dataArray = fetchData.filter((note) => note.title === title);
  if(dataArray.length){
    debugger;
    return dataArray[0];
  }
};

var removeNote = (title) => {
  var fetchData = fetchNotes();
  var dataArray = fetchData.filter((note) => note.title !== title);
  saveNotes(dataArray);
  return fetchData.length !== dataArray.length;
};

var getLists = () => {
  return fetchNotes();
};

var logCat = (note) => {
  console.log('title : ' + note.title + ' body : ' + note.body + ' !!');
};

module.exports = {
  addNote,
  getLists,
  readNote,
  removeNote,
  logCat
};

// console.log("REMOVING NOTE ", title);
// console.log(module);
// console.log("LISTING ALL NOTES");
// module.exports.age = 20;

// module.exports.addNote = () => {
//   console.log('Add Note !! ');
// console.log("count dups" , duplicatesPresent.length);
// console.log("READ NOTE ", title);
//   return 'Note Added ';
// }
//
// module.exports.add = (a,b) => {
//   return a-b;
// }
//
