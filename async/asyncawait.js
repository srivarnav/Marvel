function resolveafter2sec(){
    return new Promise(resolve=>{
            resolve('resolved');   
    });
}

async function asyncCall(){
    console.log('calling');
    var result = await resolveafter2sec();
    console.log(result);
}

asyncCall();