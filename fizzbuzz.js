
for(let number = 1 ; number < 101; number++ ){
    if (number%3 !==0 && number%5 == 0){
        console.log('Buzz');
    }
    else{
        if (number%3 == 0){
            
            console.log('Fizz');
        }
        else{
        console.log(number);
        }

    }
    
}