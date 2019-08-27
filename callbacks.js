console.log('Callbacks Starting Here !!');

var callBackFunction = (result,callback) => {

  if(result>40){
    callback(true,result);
  }
  else{
    callback(false,result);
  }
};

callBackFunction(10, (data,marks) => {
  if(data){
    console.log('pass');
    console.log(marks);
  }
  else{
    console.log('fail');
    console.log(marks);
  }
});
