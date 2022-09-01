const btn = document.querySelector('.wraper_input_button');
const input = document.querySelector('.wraper_input_input');
const  messageO = document.querySelector('.message0')
const message = document.createElement('div');
const newMessage = message.cloneNode();
message.className = 'message';
newMessage.className = 'message';
function addMessage(inputM, messageM ) {
btn.addEventListener('click', function() {
    messageM.innerHTML = inputM.value;
    messageO.append(messageM);
    inputM.value = '';
})
}

addMessage(input, newMessage);


// btn.addEventListener('click', function() {
//         message.innerHTML = input.value;
//         messageO.append(message);
//         input.value = '';
//     })
