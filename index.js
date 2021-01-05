// Code your solutions in this file
function writeCards(arrayOfNames, eventName) {
    let messages = [];
    for (let i = 0; i < arrayOfNames.length; i++){
        let message = `Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`;
        messages.push(message);
    }
    return messages;
}

function countDown(number) {
    let i = 0
     while (i <= number){
         console.log(number - i);
         i++;
     }
}