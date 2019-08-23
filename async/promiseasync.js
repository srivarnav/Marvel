var isMomHappy = false;

//promise
var willGetNewPhone = new Promise(
    function(resolve, reject){
        if(isMomHappy){
            var phone = {
                brand : 'google pixel',
                price : '70k'
            }
            resolve (phone); //fulfilled
        }else{
            var reason = new Error('mom is not happy');
            reject(reason); //reject
        }
    }
);

//consume the promise
var askMom = function (){
    willGetNewPhone
    .then(function (fulfilled){
        console.log(fulfilled);
    })
    .catch(function(error){
        console.log(error.message);
    });
}

askMom();