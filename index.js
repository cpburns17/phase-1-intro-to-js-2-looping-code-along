// Code your solutions in this file

function writeCards(names, event) {   
    let messages = []
    for (let i=0; i < names.length; i++) {
        let mes = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        messages.push(mes)
        debugger; 
    }
    return messages;
} 
writeCards(["Guadalupe", "Ollie", "Aki"], 'surprise');

function countDown() {
    let i = 10;
    while (i >= 0)
    console.log(i--)
}
// countDown()
