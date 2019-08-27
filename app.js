console.log('Starting here !!');

const fs= require('fs');
const os= require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleNote = {
  describe : 'title of note',
  demand: true,
  alias: 't'
};

const bodyNote = {
  describe: 'body of note',
  demand: true,



  alias: 'b'
};

 argv = yargs
.command('add','Add note title',{
  title: titleNote,
  body: bodyNote
})
.command('remove','remove a note',{
  title : titleNote
})
.command('read','read a note',{
  title: titleNote
})
.command('list','Show list')
.help()
.argv;

// TAKING INPUT FROM USER
var command = argv._[0];

// DEBUG:
debugger;
if(command === "list"){
  var lists = notes.getLists();
  var length = lists.length;
  console.log('total notes : ' + length);
  lists.forEach((note) => {
    notes.logCat(note);
  });
}

else if(command === "add"){
  var note = notes.addNote(argv.title, argv.body);
  if(note){
    debugger;
    console.log('Note Added Successfully');
  }
  else{
    console.log('title already taken');
  }
}

else if(command === "read"){
  var message = notes.readNote(argv.title);
  if(message) {
    console.log('Read Successfully');
  }
  else {
    console.log('Not not found');
  }
}

else if(command === "remove"){
  var message = notes.removeNote(argv.title);
  if(message){
    console.log('note is removed');
  }
  else{
    console.log('note didnt removed');
  }

}

else{
  console.log('command not recogonsied');
}

// var si
// simple = argv.title;
// console.log(simple);
// console.log(argv);

// console.log('add node');

// console.log(argv.body);
// console.log(process);
// var user = os.userInfo();
// console.log('remove node');
// console.log(_.isString(true));
// console.log(_.isString('true'));
// var arr = _.uniq( ['Sagar'] );
// console.log(arr)
// var res = notes.add(10,20);
// console.log('result', res);
// console.log(argv);
// console.log(user);
// fs.appendFileSync('greetings.txt', '!!   Hello  ' + notes.addNote() + '!!!');



// console.log('show node list');




// console.log('read node');
