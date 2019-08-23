function abc (fullname){
    console.log(fullname);
    console.log("Enjoy your day!")    
}

function xyz(name,callback){
    console.log("Hello");
    callback(name+"Srivastava");
}

xyz("Arnav",abc);